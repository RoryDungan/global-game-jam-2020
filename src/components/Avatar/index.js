import React from 'react';
import Container from './Avatar.container';
import View from './Avatar.view';

export default props => (
  <Container View={View} {...props} />
);
