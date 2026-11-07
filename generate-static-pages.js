import fs from 'node:fs';
import path from 'node:path';
import { homeStructuredData, wordStructuredData, serializeStructuredData } from './src/structured-data.js';

const baseUrl = 'https://www.motsatsord.se';
const projectRoot = process.cwd();
const wordsPath = path.join(projectRoot, 'src', 'data', 'words.ts');
const distPath = path.join(projectRoot, 'dist');
const templatePath = path.join(distPath, 'index.html');

const popularWords = ['stor', 'snabb', 'varm', 'glad', 'ljus', 'hög', 'ung', 'full', 'öppen', 'lätt'];
const homepageWords = [...popularWords, 'tidig', 'rätt', 'rik', 'dag'];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function wordUrl(word) {
  return '/ord/' + encodeURIComponent(word);
}

function readWords() {
  const source = fs.readFileSync(wordsPath, 'utf-8');
  const jsonStart = source.indexOf('{');
  const jsonEnd = source.lastIndexOf('}');

  if (jsonStart === -1 || jsonEnd === -1 || jsonEnd < jsonStart) {
    throw new Error('Could not find generated word data in src/data/words.ts.');
  }

  return JSON.parse(source.slice(jsonStart, jsonEnd + 1));
}

function setHead(template, { title, description, canonical, structuredData, noindex = false }) {
  const titleHtml = '<title>' + escapeHtml(title) + '</title>';
  const descriptionHtml = '<meta name="description" content="' + escapeHtml(description) + '" />';
  const canonicalHtml = canonical ? '<link rel="canonical" href="' + escapeHtml(canonical) + '" />' : '';
  const schemaHtml = structuredData
    ? '<script id="structured-data" type="application/ld+json">' + serializeStructuredData(structuredData) + '</script>'
    : '';

  return template
    .replace(/<title>[\s\S]*?<\/title>/, titleHtml)
    .replace(/<meta name="description"[^>]*>/, descriptionHtml)
    .replace('</head>', '  ' + canonicalHtml + schemaHtml
      + (noindex ? '<meta name="robots" content="noindex,follow" />' : '') + '\n</head>');
}

function setRoot(template, markup) {
  const root = '<div id="root"></div>';
  if (!template.includes(root)) {
    throw new Error('Could not find the empty React root in dist/index.html.');
  }
  return template.replace(root, '<div id="root">' + markup + '</div>');
}

function setEmbeddedWordData(template, word, entry) {
  const data = JSON.stringify({ word, entry })
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
  const script = '<script>window.__WORD_PAGE_DATA__=' + data + ';</script>';
  return template.replace('</head>', '  ' + script + '\n</head>');
}

function siteHeader(showNavigation = false) {
  const navigation = showNavigation
    ? '<nav class="site-nav" aria-label="Huvudmeny"><a href="#popular-words">Ordlista</a><a href="#about">Om</a></nav>'
    : '';

  return '<header class="site-header">'
    + '<a class="logo" href="/" aria-label="motsatsord.se startsida">'
    + '<img class="logo-mark" src="/logo-pale-blue.png" alt="" width="40" height="40" />'
    + '<span>motsatsord<span>.se</span></span>'
    + '</a>'
    + navigation
    + '</header>';
}

function searchBar({ buttonLabel = 'Sök', placeholder = 'Sök bland kontrollerade ordpar, t.ex. stor eller glad', variant = 'default' } = {}) {
  return '<div class="search-container search-container--' + escapeHtml(variant) + '">'
    + '<div class="search">'
    + '<span class="search-icon" aria-hidden="true">⌕</span>'
    + '<input aria-label="Sök efter ett svenskt ord" placeholder="' + escapeHtml(placeholder) + '" />'
    + '<button type="button">' + escapeHtml(buttonLabel) + '</button>'
    + '</div>'
    + '</div>';
}

function footer() {
  return '<footer class="footer">© 2026 motsatsord.se · Svenska motsatsord · Ordpar med stöd av '
    + '<a href="https://sv.wiktionary.org/">Wiktionary</a> '
    + '(<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>';
}

function homeMarkup(words) {
  const chips = homepageWords.map((word) => {
    const opposite = words[word]?.opposite;
    if (!opposite) throw new Error('Missing homepage word: ' + word);
    return '<a href="' + wordUrl(word) + '">' + escapeHtml(word) + ' ↔ ' + escapeHtml(opposite) + '</a>';
  }).join('');

  return '<main class="page home-page">'
    + siteHeader(true)
    + '<section class="home-hero">'
    + '<div class="hero-panel">'
    + '<span class="hero-eyebrow">Hitta rätt ord direkt</span>'
    + '<h1>Vilket ord söker du motsatsen till?</h1>'
    + '<p>Skriv ett svenskt ord så hjälper vi dig.</p>'
    + searchBar({ buttonLabel: 'Hitta motsatsen', placeholder: 'Till exempel: snabb', variant: 'hero' })
    + '<p class="review-note"><span aria-hidden="true">✓</span>Alla publicerade ordpar och exempel är granskade före publicering.</p>'
    + '<div class="featured-pair" aria-label="Exempel på motsatsord: snabb och långsam">'
    + '<a href="/ord/snabb">snabb</a><span aria-hidden="true">↔</span><a href="/ord/l%C3%A5ngsam">långsam</a>'
    + '</div>'
    + '</div>'
    + '<div class="popular" id="popular-words">'
    + '<h2>Vanliga granskade ordpar</h2>'
    + '<p>Öppna ett ordpar för att se en förklaring och två exempelmeningar.</p>'
    + '<div class="chips">' + chips + '</div>'
    + '</div>'
    + '<div class="trust-row" id="about">'
    + '<div><span aria-hidden="true">✓</span><strong>' + Object.keys(words).length + ' granskade ord</strong></div>'
    + '<div><span aria-hidden="true">✓</span><strong>' + Math.floor(Object.keys(words).length / 2) + ' kontrollerade ordpar</strong></div>'
    + '<div><span aria-hidden="true">✓</span><strong>2 granskade exempel per ordpar</strong></div>'
    + '</div>'
    + '</section>'
    + footer()
    + '</main>';
}

function wordMarkup(word, entry, words) {
  const browseWords = popularWords.filter((candidate) => candidate !== word && candidate !== entry.opposite);
  const related = browseWords.map((otherWord) => {
    const opposite = words[otherWord]?.opposite;
    if (!opposite) throw new Error('Missing related word: ' + otherWord);
    return '<a href="' + wordUrl(otherWord) + '">' + escapeHtml(otherWord) + ' ↔ ' + escapeHtml(opposite) + '</a>';
  }).join('');

  const examples = entry.examples.map((example) => '<p>' + escapeHtml(example) + '</p>').join('');

  return '<main class="page word-page-shell">'
    + siteHeader()
    + '<section class="word-hero">'
    + '<nav class="breadcrumbs" aria-label="Brödsmulor"><a href="/">Startsidan</a><span aria-hidden="true">›</span><span aria-current="page">' + escapeHtml(word) + '</span></nav>'
    + searchBar()
    + '<div class="word-page">'
    + '<div class="word-card">'
    + '<p>Motsatsord till</p>'
    + '<h1>' + escapeHtml(word) + '</h1>'
    + '<h2>↔ <a href="' + wordUrl(entry.opposite) + '">' + escapeHtml(entry.opposite) + '</a></h2>'
    + '</div>'
    + '<p class="word-description">' + escapeHtml(entry.description) + '</p>'
    + '<h3>Exempelmeningar</h3>'
    + '<div class="examples">' + examples + '</div>'
    + '<div class="related"><h3>Fler vanliga ordpar</h3>' + related + '</div>'
    + '</div>'
    + '</section>'
    + footer()
    + '</main>';
}

function generateStaticPages() {
  const words = readWords();
  const template = fs.readFileSync(templatePath, 'utf-8');
  const wordOutputPath = path.join(distPath, 'ord');

  fs.mkdirSync(wordOutputPath, { recursive: true });

  const homeHtml = setRoot(
    setHead(template, {
      title: 'Motsatsord – svenska ordpar och antonymer',
      description: 'Slå upp vanliga svenska motsatsord med tydliga exempelmeningar.',
      canonical: baseUrl + '/',
      structuredData: homeStructuredData(),
    }),
    homeMarkup(words),
  );
  fs.writeFileSync(templatePath, homeHtml, 'utf-8');

  for (const [word, entry] of Object.entries(words)) {
    const title = 'Motsatsord till ' + word + ' – motsatsord.se';
    const description = entry.description + ' Se motsatsordet och exempelmeningar.';
    const canonical = baseUrl + wordUrl(word);
    const html = setRoot(
      setEmbeddedWordData(
        setHead(template, { title, description, canonical, structuredData: wordStructuredData(word, entry) }),
        word,
        entry,
      ),
      wordMarkup(word, entry, words),
    );

    fs.writeFileSync(path.join(wordOutputPath, word + '.html'), html, 'utf-8');
  }

  // A standalone document lets Vercel preserve HTTP 404 without the word route replacing it.
  const errorTemplate = template.replace(/<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g, '');
  const errorMarkup = '<main class="page word-page-shell">' + siteHeader()
    + '<section class="word-hero"><div class="result-card not-found">'
    + '<p class="error-code">404</p><h1>Sidan kunde inte hittas</h1>'
    + '<p>Länken kan vara felstavad eller sidan kan ha flyttats. Sök efter ett ord eller gå till startsidan.</p>'
    + '<a class="back-button" href="/">← Till startsidan</a></div>'
    + '<form id="not-found-search" class="search-container"><div class="search">'
    + '<input name="word" aria-label="Sök efter ett svenskt ord" placeholder="Till exempel: snabb" required />'
    + '<button type="submit">Sök</button></div></form></section>' + footer() + '</main>'
    + '<script>document.getElementById("not-found-search").addEventListener("submit",function(event){event.preventDefault();const word=this.elements.word.value.trim().toLowerCase();if(word)window.location.assign("/ord/"+encodeURIComponent(word));});</script>';
  fs.writeFileSync(path.join(distPath, '404.html'), setRoot(setHead(errorTemplate, {
    title: 'Sidan kunde inte hittas – motsatsord.se',
    description: 'Sidan kunde inte hittas. Sök efter svenska motsatsord eller gå till startsidan.',
    noindex: true,
  }), errorMarkup), 'utf-8');

  console.log('Pre-rendered homepage, 404 page and ' + Object.keys(words).length + ' word pages with structured data.');
}

generateStaticPages();

