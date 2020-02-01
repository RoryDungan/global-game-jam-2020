import React, { useState } from 'react';
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

  const appendMessage = msg => setChatlog([
    ...chatlog,
    msg
  ])

  const [enterWaitingState] = useState(() => () => {
    const incomingMessage = incomingMessages[currentState.data.messageId];

    console.dir(incomingMessages);

    let delay = 0;
    for (const msg of incomingMessage.messages) {
      console.log('appending message' + msg.data.message);

      setTimeout(() => setTyping(true), delay + msg.delay);
      setTimeout(() => setTyping(false), delay + msg.delay + msg.typingDuration);
      setTimeout(() => appendMessage(msg.data), delay + msg.delay + msg.typingDuration);
      delay += msg.delay + msg.typingDuration;
    }

    setTimeout(() => setReadyState(incomingMessage.responseOptions), delay)
  })

  useEffect(() => {
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
