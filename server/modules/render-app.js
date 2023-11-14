import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../src/App';

/**
 * @returns {String} html
 */
export function renderApp() {
  const app = React.createElement(App);

  const html = ReactDOMServer.renderToString(app);

  return html;
}