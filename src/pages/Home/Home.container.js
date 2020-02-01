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

  // const setTyping = isFriendTyping => setCurrentState({
  //   ...currentState,
  //   data: {
  //     ...currentState.data,
  //     isFriendTyping,
  //   }
  // });
  const setTyping = () => {}

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

  const enterReadyState = () => {

  }

  const enterWaitingState = () => {
    const incomingMessage = incomingMessages[currentState.data.messageId];

    console.log('enterWaitingState, messageId: ' + currentState.data.messageId);

    let delay = 0;
    for (const msg of incomingMessage.messages) {
      setTimeout(() => setTyping(true), (delay + msg.delay) * 1000);
      setTimeout(() => setTyping(false), (delay + msg.delay + msg.typingDuration) * 1000);
      setTimeout(() => appendMessage(msg), (delay + msg.delay + msg.typingDuration) * 1000);
      delay += msg.delay + msg.typingDuration;
    }

    setTimeout(() => setReadyState(incomingMessage.responseOptions), delay * 1000)
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
      onOptionSelected={setWaitingState} />
  );
};
