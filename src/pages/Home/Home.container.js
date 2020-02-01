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
  const [chatlog, setChatlog] = useGlobalState('chatlog')

  const [previousStateType, setPreviousStateType] = useState('')

  const setTyping = isFriendTyping => setCurrentState({
    ...currentState,
    data: {
      ...currentState.data,
      isFriendTyping,
    }
  });

  const setReadyState = options => setCurrentState({
    type: 'ready',
    data: {
      options
    }
  })

  const setWaitingState = messageId => setCurrentState({
    type: 'waiting',
    data: {
      messageId
    }
  })

  const enterReadyState = () => {

  }

  const appendMessage = msg => {
    console.log('adding message: ')
    console.dir(msg)
    setChatlog([
      ...chatlog,
      msg
    ])
  }

  const [enterWaitingState] = useState(() => () => {
    const incomingMessage = incomingMessages[currentState.data.messageId];

    console.log('enterWaitingState');

    let delay = 0;
    for (const msg of incomingMessage.messages) {
      setTimeout(() => setTyping(true), (delay + msg.delay) * 1000);
      setTimeout(() => setTyping(false), (delay + msg.delay + msg.typingDuration) * 1000);
      setTimeout(() => appendMessage(msg), (delay + msg.delay + msg.typingDuration) * 1000);
      delay += msg.delay + msg.typingDuration;
    }

    // setTimeout(() => setReadyState(incomingMessage.responseOptions), delay * 1000)
  })

  useEffect(() => {
    console.log(`currentState: ${currentState.type}, prev: ${previousStateType}`)
    if (currentState.type === previousStateType) {
      return;
    }

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
  }, [currentState, enterWaitingState, previousStateType, setPreviousStateType]);

  return (
    <View {...props} chatlog={chatlog} otherUser={otherUser} />
  );
};
