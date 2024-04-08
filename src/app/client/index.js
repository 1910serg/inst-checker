import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@babel/polyfill';

import App from './UI/App.js';

import './index.html';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
