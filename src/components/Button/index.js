import React from 'react';
import Container from './Button.container';
import View from './Button.view';

export default props => (
  <Container View={View} {...props} />
);
