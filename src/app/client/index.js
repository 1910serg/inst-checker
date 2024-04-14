import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import '@babel/polyfill';

import App from '../UI/App';

const rootElement = document.getElementById('root');

hydrateRoot(rootElement, <App />);
