import React from 'react';
import Container from './Header.container';
import View from './Header.view';

export default props => (
  <Container View={View} {...props} />
);
