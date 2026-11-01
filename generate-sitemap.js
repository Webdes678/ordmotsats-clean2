import fs from 'fs';
import path from 'path';

function generateSitemap() {
  const baseUrl = 'https://www.motsatsord.se';
  const wordsTsPath = path.join(process.cwd(), 'src', 'data', 'words.ts');
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  const fileContent = fs.readFileSync(wordsTsPath, 'utf-8');
  const jsonStartIndex = fileContent.indexOf('{');
  const jsonEndIndex = fileContent.lastIndexOf('}');
  if (jsonStartIndex === -1 || jsonEndIndex === -1) {
    throw new Error('Could not parse src/data/words.ts');
  }

  const words = JSON.parse(fileContent.substring(jsonStartIndex, jsonEndIndex + 1));
  const urls = [baseUrl + '/'].concat(
    Object.keys(words).map((word) => baseUrl + '/ord/' + encodeURIComponent(word.trim().toLowerCase()))
  );

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((url) => '  <url><loc>' + url + '</loc></url>').join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log('Generated sitemap with ' + urls.length + ' URLs.');
}

generateSitemap();
