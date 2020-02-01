import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({
  currentState: {
    type: 'waiting',
    data: {
      messageId: '1'
    }
  },
  chatlog: []
});

export {
  useGlobalState,
};
