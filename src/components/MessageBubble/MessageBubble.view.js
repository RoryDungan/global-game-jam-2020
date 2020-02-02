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
import { Bubble, Container, Paragraph } from './MessageBubble.styles';

export default ({ text, alignRight }) => (
  <Container alignRight={alignRight}>
    <Bubble alignRight={alignRight}>
      {/* {text} */}
      {text.split('\n').map((m, i) => <Paragraph key={i}>{m}</Paragraph>)}
    </Bubble>
  </Container>
);
