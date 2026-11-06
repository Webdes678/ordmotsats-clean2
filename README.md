# motsatsord.se

A Swedish opposite-word site built with React and Vite.

## Word data

Edit `generate-words.js` to add or correct a reviewed pair. Each pair has a clear opposite, a short explanation of the intended sense, and two original Swedish example sentences. Run `npm run build` to regenerate `src/data/words.ts` and `public/sitemap.xml` before building the site.

The current reviewed list contains 427 pairs and 854 word pages. Some pairs were selected with help from [Swedish Wiktionary](https://sv.wiktionary.org/) through the [DBnary extract](https://kaiko.getalp.org/about-dbnary/download/). The extracted relationships are reviewed before use. Word-pair data derived from Wiktionary is credited under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Descriptions and examples here were written for this site; Wiktionary example quotations were not copied.

Do not add every candidate in a source dump automatically: some listed relationships are related words rather than true opposites.

