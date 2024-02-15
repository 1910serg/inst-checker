import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@babel/polyfill';

import App from './components/App.js';

import './index.html';
import '../style/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);