import { promises as fs } from 'fs';
import path from 'path';

const pageName = 'index';
const _cache = new Map();

/**
 * Возвращает и устанавливает в кэш страницу html
 *
 * @returns {Promise<string>}
 */
export async function readHtmlSource() {
  if (_cache.has(pageName)) {
    return _cache.get(pageName);
  }

  const fileContent = await fs.readFile(
    path.resolve('build', 'index.html'),
    'utf8'
  );

  _cache.set(pageName, fileContent);

  return fileContent;
}
