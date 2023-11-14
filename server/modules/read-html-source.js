const fs = require('fs');
const path = require('path');

const pageName = 'index';
const _cache = new Map();

/**
 * @returns {String} fileContent | cache
 */
export async function readHtmlSource() {
  if (_cache.has(pageName)) {
    return _cache.get(pageName);
  }

  const fileContent = await fs.readFile(
    path.resolve(__dirname, `index.html`),
    'utf8'
  );

  _cache.set(pageName, fileContent);

  return fileContent;
}
