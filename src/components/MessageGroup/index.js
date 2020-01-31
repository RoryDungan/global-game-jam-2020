import React from 'react';
import Container from './MessageGroup.container';
import View from './MessageGroup.view';

export default props => (
  <Container View={View} {...props} />
);
