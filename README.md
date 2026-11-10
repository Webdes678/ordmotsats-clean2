# motsatsord.se

A Swedish opposite-word site built with React and Vite.

## Word data

Edit `generate-words.js` to add or correct a reviewed pair. Each pair has a clear opposite, a short explanation of the intended sense, and two original Swedish example sentences. Run `npm run build` to regenerate `src/data/words.ts` and `public/sitemap.xml` before building the site.

The current reviewed list contains 1500 pairs and 3000 word pages. Some pairs were selected with help from [Swedish Wiktionary](https://sv.wiktionary.org/) through the [DBnary extract](https://kaiko.getalp.org/about-dbnary/download/). The extracted relationships are reviewed before use. Word-pair data derived from Wiktionary is credited under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Descriptions and examples here were written for this site; Wiktionary example quotations were not copied.

Do not add every candidate in a source dump automatically: some listed relationships are related words rather than true opposites.

## Alphabetical directory

`/ordlista` links to each populated letter page under `/ordlista/<letter>`. Swedish letters use the slugs `aa` (å), `ae` (ä), and `oe` (ö). The build pre-renders the complete directory links and includes all populated directory pages in the sitemap. Empty letters are disabled and have no generated page. Letter counts and small letter-specific data files are generated from the same reviewed dictionary; no full dictionary is added to the homepage bundle.

## Static page output

`npm run build` runs `generate-static-pages.js` after Vite. It pre-renders the homepage and one complete HTML file per word in `dist/ord/`, including the page title, description, canonical URL, heading, opposite link, explanation, and examples. Vercel serves these files at extensionless `/ord/<word>` URLs through `cleanUrls`, so crawlers receive the word content before JavaScript runs.

## Structured data and missing pages

The build adds JSON-LD for `DefinedTermSet` on the homepage and `WebPage`, `DefinedTerm`, and `BreadcrumbList` on every word page. The same schema functions in `src/structured-data.js` update metadata during client-side navigation. Word-page breadcrumbs match the structured data. The build also creates `dist/404.html`, with `noindex,follow`, search, and a homepage link; Vercel serves it for missing URLs with HTTP 404. Missing pages are excluded from the sitemap.

## Client data loading

`generate-client-data.js` keeps the complete dictionary out of the main JavaScript bundle. It creates a small search index and letter-based JSON files in `public/data/` during development and production builds. The search index is requested only after someone starts typing, and client-side navigation loads only the letter file needed for the selected word. Direct visits use the word data embedded in the pre-rendered HTML, so the page content appears immediately.


