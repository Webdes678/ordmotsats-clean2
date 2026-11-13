import fs from 'node:fs';
import path from 'node:path';
import { homeStructuredData, wordStructuredData, serializeStructuredData } from './src/structured-data.js';
import { groupDirectory, letterUrl, directoryTitle, directoryDescription } from './src/directory.js';

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

function seoTitleForWord(word, opposite) {
  const capitalizedWord = word.charAt(0).toLocaleUpperCase('sv-SE') + word.slice(1);
  return capitalizedWord + ' – motsatsordet ' + opposite + ' och exempel';
}

function seoDescriptionForWord(word, entry) {
  return 'Vad är motsatsen till ' + word + '? Motsatsordet är ' + entry.opposite + '. '
    + entry.description + ' Se två tydliga exempel.';
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

function siteHeader(showNavigation = true) {
  const navigation = showNavigation
    ? '<nav class="site-nav" aria-label="Huvudmeny"><a href="/ordlista">Ordlista A–Ö</a><a href="/#about">Om</a></nav>'
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
  return '<footer class="footer">© 2026 motsatsord.se · Svenska motsatsord · '
    + '<a href="/integritetspolicy">Integritetspolicy</a> · Ordpar med stöd av '
    + '<a href="https://sv.wiktionary.org/">Wiktionary</a> '
    + '(<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>';
}

function privacyMarkup() {
  return '<main class="page legal-page">' + siteHeader()
    + '<section class="legal-shell">'
    + '<nav class="breadcrumbs" aria-label="Brödsmulor"><a href="/">Startsidan</a><span aria-hidden="true">›</span><span aria-current="page">Integritetspolicy</span></nav>'
    + '<article class="legal-card"><span class="hero-eyebrow">Din integritet</span><h1>Integritetspolicy</h1>'
    + '<p class="legal-updated">Senast uppdaterad: 12 november 2026</p>'
    + '<p>Den här policyn förklarar hur motsatsord.se hanterar information när du använder webbplatsen.</p>'
    + '<h2>Personuppgiftsansvarig och kontakt</h2><p>Webbplatsansvarig för motsatsord.se är personuppgiftsansvarig för den behandling som beskrivs här. Frågor om integritet och personuppgifter kan skickas till <a href="mailto:motsatsord.se@gmail.com">motsatsord.se@gmail.com</a>.</p>'
    + '<h2>Vilka uppgifter som kan behandlas</h2><p>Webbplatsen har inga användarkonton, kommentarer eller nyhetsbrev. När du besöker webbplatsen kan grundläggande teknisk information behandlas i serverloggar, till exempel IP-adress, tidpunkt, begärd webbadress samt typ av webbläsare och enhet. Om du kontaktar oss via e-post behandlar vi din e-postadress och innehållet i meddelandet för att kunna svara.</p>'
    + '<h2>Varför uppgifterna behandlas</h2><p>Tekniska loggar används för att leverera webbplatsen, upptäcka fel, skydda tjänsten och förbättra driftsäkerheten. Behandlingen grundas på vårt berättigade intresse av att erbjuda en säker och fungerande webbplats. Kontaktuppgifter används endast för att hantera och besvara din förfrågan.</p>'
    + '<h2>Cookies och annonser</h2><p>motsatsord.se använder inte cookies för besöksstatistik eller användarkonton. Webbplatsen använder Vercel Web Analytics för anonym och sammanställd statistik om exempelvis besökare och sidvisningar. Tjänsten använder inte cookies och är inte avsedd att identifiera enskilda besökare.</p><p>Om Google AdSense aktiveras kan Google och dess annonspartners använda cookies eller liknande identifierare för att visa, mäta och anpassa annonser. Där samtycke krävs kommer du att kunna välja innan icke nödvändiga cookies används. Du kan läsa mer och hantera personanpassade annonser i <a href="https://adssettings.google.com/" rel="noreferrer">Googles annonsinställningar</a>.</p>'
    + '<h2>Tjänsteleverantörer och överföringar</h2><p>Webbplatsen driftas av Vercel, som kan behandla tekniska uppgifter för att leverera och skydda tjänsten samt tillhandahålla anonym besöksstatistik. Vid framtida annonsering kan Google behandla uppgifter enligt sina villkor och integritetsregler. Leverantörer kan behandla uppgifter utanför EU/EES med de skyddsåtgärder som krävs enligt tillämplig dataskyddslagstiftning.</p>'
    + '<h2>Hur länge uppgifterna sparas</h2><p>Tekniska loggar sparas endast så länge de behövs för drift, säkerhet och felsökning enligt tjänsteleverantörens inställningar. E-postmeddelanden sparas så länge det behövs för att hantera ärendet och eventuella uppföljningar.</p>'
    + '<h2>Dina rättigheter</h2><p>Du kan ha rätt att begära tillgång till, rättelse eller radering av dina personuppgifter samt att invända mot eller begränsa viss behandling. Om behandling grundas på samtycke kan du återkalla samtycket. Kontakta oss på adressen ovan. Du kan också lämna klagomål till <a href="https://www.imy.se/" rel="noreferrer">Integritetsskyddsmyndigheten (IMY)</a>.</p>'
    + '<h2>Ändringar i policyn</h2><p>Policyn kan uppdateras när webbplatsen eller de tjänster som används förändras. Datumet högst upp visar när den senast uppdaterades.</p>'
    + '</article></section>' + footer() + '</main>';
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
    + '<a class="directory-link" href="/ordlista">Se alla ord i ordlistan A–Ö →</a>'
    + '</div>'
    + '<div class="trust-row">'
    + '<div><span aria-hidden="true">✓</span><strong>' + Object.keys(words).length + ' ord</strong></div>'
    + '<div><span aria-hidden="true">✓</span><strong>' + Math.floor(Object.keys(words).length / 2) + ' ordpar</strong></div>'
    + '<div><span aria-hidden="true">✓</span><strong>2 exempel per ordpar</strong></div>'
    + '</div>'
    + '<section class="about-section" id="about" aria-labelledby="about-heading">'
    + '<span class="hero-eyebrow">Om webbplatsen</span><h2 id="about-heading">Om motsatsord.se</h2>'
    + '<p>motsatsord.se är en kostnadsfri svensk ordlista som hjälper dig att snabbt hitta motsatsen till ett ord. För varje ord visar vi ett motsatsord, en kort förklaring och tydliga exempelmeningar.</p>'
    + '<p>Ordlistan utvecklas och uppdateras löpande. Delar av underlaget bygger på information från <a href="https://sv.wiktionary.org/">Wiktionary</a>, som används enligt licensen <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>'
    + '<p>Har du hittat ett fel eller vill föreslå ett ord? Kontakta oss på <a href="mailto:motsatsord.se@gmail.com">motsatsord.se@gmail.com</a>.</p>'
    + '</section>'
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

  const privacyHtml = setRoot(
    setHead(template, {
      title: 'Integritetspolicy – motsatsord.se',
      description: 'Läs hur motsatsord.se hanterar personuppgifter, tekniska loggar, cookies och framtida annonsering.',
      canonical: baseUrl + '/integritetspolicy',
    }),
    privacyMarkup(),
  );
  fs.writeFileSync(path.join(distPath, 'integritetspolicy.html'), privacyHtml, 'utf-8');

  const groups = groupDirectory(words);
  const directoryOutputPath = path.join(distPath, 'ordlista');
  fs.mkdirSync(directoryOutputPath, { recursive: true });
  const letterNavigation = (activeLetter) => '<nav class="alphabet-nav" aria-label="Välj begynnelsebokstav">'
    + groups.map((group) => group.entries.length > 0
      ? '<a href="' + letterUrl(group.letter) + '"' + (activeLetter === group.letter ? ' aria-current="page"' : '') + '>' + group.letter.toLocaleUpperCase('sv') + '</a>'
      : '<span class="alphabet-disabled" aria-disabled="true" title="Inga ord på denna bokstav ännu">' + group.letter.toLocaleUpperCase('sv') + '</span>').join('') + '</nav>';

  for (const group of [null, ...groups.filter((group) => group.entries.length > 0)]) {
    const letter = group?.letter;
    const title = directoryTitle(letter);
    const description = directoryDescription(letter);
    const canonical = baseUrl + (letter ? letterUrl(letter) : '/ordlista');
    const heading = letter ? 'Motsatsord på ' + letter.toLocaleUpperCase('sv') : 'Ordlista A–Ö';
    const content = group
      ? '<p class="directory-count">' + group.entries.length + ' ord på ' + letter.toLocaleUpperCase('sv') + '</p>'
        + '<ul class="word-directory-list">' + group.entries.map(({ word, opposite }) => '<li><a href="' + wordUrl(word) + '"><strong>' + escapeHtml(word) + '</strong><span>↔ ' + escapeHtml(opposite) + '</span></a></li>').join('') + '</ul>'
      : '<div class="letter-grid">' + groups.filter((item) => item.entries.length > 0).map((item) => '<a class="letter-card" href="' + letterUrl(item.letter) + '"><strong>' + item.letter.toLocaleUpperCase('sv') + '</strong><span>' + item.entries.length + ' ord</span><span aria-hidden="true">→</span></a>').join('') + '</div>';
    const markup = '<main class="page directory-page">' + siteHeader()
      + '<section class="directory-shell"><nav class="breadcrumbs" aria-label="Brödsmulor"><a href="/">Startsidan</a><span aria-hidden="true">›</span>'
      + (letter ? '<a href="/ordlista">Ordlista A–Ö</a><span aria-hidden="true">›</span>' : '')
      + '<span aria-current="page">' + (letter ? letter.toLocaleUpperCase('sv') : 'Ordlista A–Ö') + '</span></nav>'
      + '<div class="directory-intro"><span class="hero-eyebrow">Svenska motsatsord</span><h1>' + heading + '</h1><p>'
      + (group ? 'Välj ett ord för att se motsatsen, en förklaring och två exempelmeningar.' : 'Hitta bland ' + Object.keys(words).length + ' ord. Välj en bokstav eller sök efter ett ord direkt.')
      + '</p>' + searchBar() + '</div>' + letterNavigation(letter) + content + '</section>' + footer() + '</main>';
    const dataScript = group ? '<script>window.__DIRECTORY_PAGE_DATA__=' + serializeStructuredData(group) + ';</script>' : '';
    const html = setRoot(setHead(template, { title, description, canonical })
      .replace('</head>', dataScript + '</head>'), markup);
    fs.writeFileSync(group ? path.join(directoryOutputPath, group.slug + '.html') : path.join(distPath, 'ordlista.html'), html, 'utf-8');
  }

  for (const [word, entry] of Object.entries(words)) {
    const title = seoTitleForWord(word, entry.opposite);
    const description = seoDescriptionForWord(word, entry);
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

  console.log('Pre-rendered homepage, privacy policy, 404 page and ' + Object.keys(words).length + ' word pages with structured data.');
}

generateStaticPages();

