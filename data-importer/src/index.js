function display() {
     for (const arg of arguments) {
         console.log(arg);
     }
}

async function main() {
const df = require('data-forge')
const fs = require('fs')
require('data-forge-fs')

const processMessage = m => {
    const type = m['Image'] ? 'image' : 'text'

    return {
        type,
        delay: m['Delay'],
        typingDuration: m['Typing duration'],
        data: type === 'image'
            ? { url: m['Image'] }
            : { message: m['Message'] }
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
    .parseInts(['Response 1', 'Response 2'])
    .parseFloats(['Delay', 'Typing duration'])
    .where(m => m['ID'])
    .groupBy(m => m['ID'])
    .select(group => ({
        id: group.first()['ID'],
        responseOptions: [group.first()['Response 1'], group.first()['Response 2']],
        messages: group.select(processMessage).toArray()
    }))
    .toArray())

console.dir(incomingMessages)

fs.writeFileSync('incomingMessages.json', JSON.stringify(incomingMessages, null, 2))

const sendableOptions = toObj(df.readFileSync('sendable-options.csv')
    .parseCSV()
    .parseInts(['Default destination', 'Seconadary destination'])
    .parseFloats(['Score'])
    .where(m => m['ID'])
    .groupBy(m => m['ID'])
    .select(group => {
        const paths = []
        if (group.first()['Secondary destination']) {
            paths.push({
                requirements: [{ score: { min: 9999, max: 9999 } }],
                destination: group.first()['Secondary destination']
            })
        }
        paths.push({ destination: group.first()['Default destination'] })
        return {
            id: group.first()['ID'],
            messages: group.select(processMessage).toArray(),
            score: group.first()['Score'],
            paths
        }
    })
    .toArray())

console.dir(sendableOptions)

fs.writeFileSync('sendableOptions.json', JSON.stringify(sendableOptions, null, 2))

}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));
