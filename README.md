# motsatsord.se

A Swedish opposite-word site built with React and Vite.

## Word data

Edit `generate-words.js` to add or correct a reviewed pair. Each pair has a clear opposite, a short explanation of the intended sense, and two original Swedish example sentences. Run `npm run build` to regenerate `src/data/words.ts` and `public/sitemap.xml` before building the site.

The current reviewed list contains 1000 pairs and 2000 word pages. Some pairs were selected with help from [Swedish Wiktionary](https://sv.wiktionary.org/) through the [DBnary extract](https://kaiko.getalp.org/about-dbnary/download/). The extracted relationships are reviewed before use. Word-pair data derived from Wiktionary is credited under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Descriptions and examples here were written for this site; Wiktionary example quotations were not copied.

Do not add every candidate in a source dump automatically: some listed relationships are related words rather than true opposites.

## Static word pages

`npm run build` runs `generate-static-pages.js` after Vite. It pre-renders the homepage and one complete HTML file per word in `dist/ord/`, including the page title, description, canonical URL, heading, opposite link, explanation, and examples. Vercel serves these files at extensionless `/ord/<word>` URLs through `cleanUrls`, so crawlers receive the word content before JavaScript runs.

## Client data

`generate-client-data.js` keeps the complete dictionary out of the main JavaScript bundle. It creates a small search index and letter-based JSON files in `public/data/` during development and production builds. The search index is requested only after someone starts typing, and client-side navigation loads only the letter file needed for the selected word. Direct visits use the word data embedded in the pre-rendered HTML, so the page content appears immediately.


