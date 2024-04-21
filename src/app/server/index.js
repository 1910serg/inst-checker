import express from 'express';
import path from 'path';

import { renderApp } from './lib/render-app';

const app = express();
const port = 3000;

app.use('/', express.static(path.resolve(__dirname)));

app.get('/', async (req, res, next) => {
  console.log('Generating app...');
  try {
    const appString = renderApp();

    res.send(`
      <html>
        <head>
          <title>SSR React App</title>
          <link href="/build/styles.css" rel="stylesheet" />
        </head>
        <body>
          <div id="root">${appString}</div>
          <script src="/build/vendor.js"></script>
          <script src="/build/main.js"></script>
        </body>
      </html>
  `);
  } catch (err) {
    console.error(err);

    next(err.message);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
