import fs from 'fs';
import path from 'path';

function generateSitemap() {
  console.log("🗺️ Starting sitemap generation...");
  
  const baseUrl = 'https://motsatsord.se';
  const wordsTsPath = path.join(process.cwd(), 'src', 'data', 'words.ts');
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  if (!fs.existsSync(wordsTsPath)) {
    console.error("❌ Could not find src/data/words.ts!");
    return;
  }

  const fileContent = fs.readFileSync(wordsTsPath, 'utf-8');
  const jsonStartIndex = fileContent.indexOf('{');
  const jsonEndIndex = fileContent.lastIndexOf('}');
  
  if (jsonStartIndex === -1 || jsonEndIndex === -1) {
    console.error("❌ Could not parse words.ts");
    return;
  }

  const jsonString = fileContent.substring(jsonStartIndex, jsonEndIndex + 1);
  const words = JSON.parse(jsonString);
  const wordKeys = Object.keys(words);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  for (const word of wordKeys) {
    const encodedWord = encodeURIComponent(word.trim().toLowerCase());
    xml += `  <url>\n    <loc>${baseUrl}/ord/${encodedWord}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }

  xml += `</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`\n🎉 BOOM! Your sitemap now contains ${wordKeys.length + 1} URLs total!`);
}

generateSitemap();