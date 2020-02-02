function display() {
     for (const arg of arguments) {
         console.log(arg);
     }
}

async function main() {
const df = require('data-forge')
const fs = require('fs')
require('data-forge-fs')

const processMessage = sender => m => {
    const type = m['Image'] ? 'image' : 'text'
    const delay = m['Delay'] === undefined
        ? 0.5
        : m['Delay']
    const typingDuration = m['Typing duration'] === undefined
        ? type === 'text'
            ? m['Message'].split(' ').length * 0.07
            : 0.5
        : m['Typing duration']
    return {
        sender,
        type,
        delay,
        typingDuration,
        data: type === 'image'
            ? { url: m['Image'] }
            : { text: m['Message'] }
    }
}

const toObj = arr => {
    const newObj = {}
    for (let element of arr) {
        newObj[element.id] = element
        delete newObj[element.id].id
    }
    return newObj
}

const incomingMessages = toObj(df.readFileSync('incoming-messages.csv')
    .parseCSV()
    .parseFloats(['Delay', 'Typing duration'])
    .where(m => m['ID'])
    .groupBy(m => m['ID'])
    .select(group => {
        let response1 = '1'
        let response2 = '2'
        try {
            response1 = group.where(m => m['Response 1']).first()['Response 1']
            response2 = group.where(m => m['Response 2']).first()['Response 2']
        } catch (e) {
            console.log('group ' + group.first()['ID'] + ' missing response!')
        }
        return {
            id: group.first()['ID'],
            responseOptions: [response1, response2],
            messages: group.select(processMessage('friend')).toArray()
        }
    })
    .toArray())

console.dir(incomingMessages)

fs.writeFileSync('incomingMessages.json', JSON.stringify(incomingMessages, null, 2))

const sendableOptions = toObj(df.readFileSync('sendable-options.csv')
    .parseCSV()
    .parseFloats(['Score'])
    .where(m => m['ID'])
    .select(m => {
        const paths = []
        if (m['Secondary destination']) {
            paths.push({
                requirements: [{ score: { min: 9999, max: 9999 } }],
                destination: m['Secondary destination']
            })
        }
        paths.push({ destination: m['Default destination'] })
        return {
            id: m['ID'],
            message: processMessage('self')(m),
            score: m['Score'] || 0,
            paths
        }
    })
    .toArray())

console.dir(sendableOptions)

fs.writeFileSync('sendableOptions.json', JSON.stringify(sendableOptions, null, 2))
const messageHistory = df.readFileSync('message-history.csv')
    .parseCSV()
    .where(m => m['Message'])
    .select(m => ({
        sender: m['Sender'],
        type: 'text',
        data: {
            text: m['Message']
        }
    }))
    .toArray();

console.dir(messageHistory)

fs.writeFileSync('messageHistory.json', JSON.stringify(messageHistory, null, 2))

}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));
