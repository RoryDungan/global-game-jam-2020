import { createGlobalState } from 'react-hooks-global-state';
import { messageHistory } from '../assets/messages';

const { useGlobalState } = createGlobalState({
  currentState: {
    type: 'waiting',
    data: {
      messageId: '1'
    }
  },
  chatlog: messageHistory
});

export {
  useGlobalState,
};
