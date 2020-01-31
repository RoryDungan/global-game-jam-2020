import React from 'react';
import Container from './MessageBubble.container';
import View from './MessageBubble.view';

export default props => (
  <Container View={View} {...props} />
);
