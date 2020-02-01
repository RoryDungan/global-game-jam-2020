import React from 'react';
import 'normalize.css';
import './index.css';
import { Home } from './pages';
// Even though it's not being used we should keep it here so that it initialises the state.
import { useGlobalState } from './services/stateService';

export default () => (
  <Home />
);
