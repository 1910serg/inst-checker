import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@babel/polyfill';

import App from './App.js';

// TODO: Удалить это
import { mult, sum } from './modules/calc';

import './index.html';
import './style/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
