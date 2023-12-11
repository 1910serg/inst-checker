import express from 'express';
import path from 'path';

import { readHtmlSource } from './modules/render-html';
import { renderApp } from './modules/render-app';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const html = await readHtmlSource();
  const appString = renderApp();

  const htmlWithReactApp = html.replace('{{APP}}', appString);

  res.send(htmlWithReactApp);
});

app.use('/', express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
