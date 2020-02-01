import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({ count: 0 });

export {
  useGlobalState,
};
// const Component = () => {
//   const [count, setCount] = useGlobalState('count');
// };
