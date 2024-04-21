import { promises as fs } from 'fs';
import path from 'path';

/**
 * Возвращает и устанавливает в кэш страницу html
 *
 * @returns {Promise<string>}
 */
export async function readHtmlSource() {
  const fileContent = await fs.readFile(
    path.resolve('dist', 'index.html'),
    'utf8'
  );

  return fileContent;
}
