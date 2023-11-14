const express = require('express');
const path = require('path');

const { readHtmlSource } = require('./modules/read-html-source');
const { renderApp } = require('./modules/render-app');

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
