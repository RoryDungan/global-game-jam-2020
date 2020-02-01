// import React from 'react';

/*
type: 'text' || 'image',
data: {
  message: '',
  image: '',
}
 */

// export default ({ message }) => (
//   <div>{JSON.stringify(message)}</div>
// );

import React from 'react';
import { Bubble, Container } from './MessageBubble.styles';

export default ({ text, alignRight }) => (
  <Container alignRight={alignRight}>
    <Bubble alignRight={alignRight}>{text}</Bubble>
  </Container>
);
