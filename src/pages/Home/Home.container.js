import React, { useState, useEffect } from 'react';
import { avatarImage } from '../../assets/images';
import { useGlobalState } from '../../services/stateService';
import { incomingMessages, sendableOptions } from '../../assets/messages';

export default ({ View, ...props }) => {
  const [otherUser, setOtherUser] = useState({
    username: 'Les',
    avatar: {
      src: avatarImage,
    },
  });

  const [currentState, setCurrentState] = useGlobalState('currentState')
  let [chatlog, setChatlog] = useGlobalState('chatlog')

  const [previousStateType, setPreviousStateType] = useState('')

  const setTyping = isFriendTyping => setCurrentState({
    ...currentState,
    data: {
      ...currentState.data,
      isFriendTyping,
    }
  });

  const setReadyState = options => {
    console.log('SETTING READY STATE')
    console.dir(options)
    setCurrentState({
      type: 'ready',
      data: {
        options
      }
    })
  }

  const appendMessage = (msg) => {
    const newChatlog = [
      ...chatlog,
      msg
    ];
    setChatlog(newChatlog)
    chatlog = newChatlog;
  }

  const setWaitingState = messageId => {
    const destinations = sendableOptions[messageId].paths

    console.log('setWaitingState, messageId: ' +  destinations[0].destination)

    appendMessage(sendableOptions[messageId].message)

    setCurrentState({
      type: 'waiting',
      data: {
        messageId: destinations[0].destination
      }
    })
  }

  // Special code for each ending
  const goToEnding = endId => {
    switch (endId) {
      case '_ENDING_1_':
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Disconnected.' }
        }), 1000)
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Reload the page to play again.' }
        }), 2000)
        break;

      case '_ENDING_2_':
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Disconnected.' }
        }), 1000)
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Reload the page to play again.' }
        }), 2000)
        break;

      case '_ENDING_4_':
        appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Disconnected.' }
        })
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'This user has blocked you.' }
        }), 1400)
        setTimeout(() => {
          const newChatlog = chatlog.map(m => m.sender === 'friend'
            ? { ...m, data: { text: 'Message unavailable' }}
            : m);
          setChatlog(newChatlog);
          chatlog = newChatlog;
        }, 2000)
        setTimeout(() => appendMessage({
          sender: 'chat',
          type: 'text',
          data: { text: 'Reload the page to play again.' }
        }), 4000)
        break;

      default:
        throw new Error('Invalid ending ID ' + endId);
    }
  }

  const enterReadyState = () => { }

  const enterWaitingState = () => {
    const incomingMessage = incomingMessages[currentState.data.messageId];

    console.log('enterWaitingState, messageId: ' + currentState.data.messageId);
    if (!incomingMessage.responseOptions || incomingMessage.responseOptions.length < 2) {
      throw new Error('Invalid response options in incoming message ' + currentState.data.messageId);
    }

    let delay = 0;
    for (const msg of incomingMessage.messages) {
      setTimeout(() => setTyping(true), (delay + msg.delay) * 1000);
      setTimeout(() => setTyping(false), (delay + msg.delay + msg.typingDuration) * 1000);
      setTimeout(() => appendMessage(msg), (delay + msg.delay + msg.typingDuration) * 1000);
      delay += msg.delay + msg.typingDuration;
    }

    if (incomingMessage.responseOptions.some(r => r.match(/_ENDING_/g))) {
      setTimeout(() => {
        console.log('Going to ending', incomingMessage.responseOptions[0])
        goToEnding(incomingMessage.responseOptions[0]);
      }, delay * 1000);
    } else {
      setTimeout(() => setReadyState(incomingMessage.responseOptions), delay * 1000)
    }
  }

  if (currentState.type !== previousStateType) {
    setPreviousStateType(currentState.type);

    switch (currentState.type) {
      case 'waiting':
        enterWaitingState();
        break;
      case 'ready':
        enterReadyState();
        break;
      default:
        break;
    }
  }

  return (
    <View {...props}
      chatlog={chatlog}
      otherUser={otherUser}
      options={currentState.data.options || []}
      onOptionSelected={setWaitingState}
      isTyping={currentState.data.isFriendTyping} />
  );
};
