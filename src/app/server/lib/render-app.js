import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../client/components/App';

/**
 * Возвращает строку с приложением
 *
 * @returns {String} html
 */
export function renderApp() {
  const app = React.createElement(App);

  const html = ReactDOMServer.renderToString(app);

  return html;
}
