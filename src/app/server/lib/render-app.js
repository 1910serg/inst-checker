import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../UI/App';

/**
 * Возвращает строку с приложением
 *
 * @returns {String} appString
 */
export function renderApp() {
  const app = React.createElement(App);

  const appString = ReactDOMServer.renderToString(app);

  return appString;
}
