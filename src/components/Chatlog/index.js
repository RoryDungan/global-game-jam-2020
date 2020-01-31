import React from 'react';
import Container from './Chatlog.container';
import View from './Chatlog.view';

export default props => (
  <Container View={View} {...props} />
);
