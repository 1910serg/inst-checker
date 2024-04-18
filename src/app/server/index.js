import express from 'express';
import path from 'path';

import { readHtmlSource } from './lib/render-html';
import { renderApp } from './lib/render-app';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname)));

app.get('/', async (req, res) => {
  const html = await readHtmlSource();
  const appString = renderApp();

  const htmlWithReactApp = html.replace(
    '<div id="root">{{APP}}</div>',
    `<div id="root">${appString}</div>`
  );
  res.send(htmlWithReactApp);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
