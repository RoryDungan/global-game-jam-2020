import React from 'react';
import Container from './Typing.container';
import View from './Typing.view';

export default props => (
  <Container View={View} {...props} />
);
