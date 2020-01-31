import React from 'react';
import Container from './Home.container';
import View from './Home.view';

export default props => (
  <Container View={View} {...props} />
);
