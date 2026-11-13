import { useEffect, useState } from "react"
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"
import { featuredOpposites, pairCount, wordCount } from "./data/site-summary"
import { homeStructuredData, wordStructuredData, serializeStructuredData } from "./structured-data.js"
import { directoryLetters } from "./data/directory-summary"
import { letterUrl, directoryTitle, directoryDescription } from "./directory.js"
import type { DirectoryGroup } from "./directory.js"

function updateStructuredData(data?: Record<string, unknown>) {
  const existing = document.getElementById("structured-data")
  if (!data) {
    existing?.remove()
    return
  }
  const script = existing ?? document.createElement("script")
  script.id = "structured-data"
  script.setAttribute("type", "application/ld+json")
  script.textContent = serializeStructuredData(data)
  if (!existing) document.head.appendChild(script)
}

type WordEntry = {
  opposite: string
  description: string
  examples: readonly string[]
  related: readonly string[]
}

type EmbeddedWordData = {
  word: string
  entry: WordEntry
}

declare global {
  interface Window {
    __WORD_PAGE_DATA__?: EmbeddedWordData
    __DIRECTORY_PAGE_DATA__?: DirectoryGroup
  }
}

const popularWords = ["stor", "snabb", "varm", "glad", "ljus", "hög", "ung", "full", "öppen", "lätt"] as const
const homepageWords = [...popularWords, "tidig", "rätt", "rik", "dag"] as const

let searchIndexRequest: Promise<readonly string[]> | undefined
const wordShardRequests = new Map<string, Promise<Record<string, WordEntry>>>()

function getShardName(word: string) {
  const firstCharacter = word.charAt(0).toLocaleLowerCase("sv-SE")

  if (firstCharacter === "å") return "aa"
  if (firstCharacter === "ä") return "ae"
  if (firstCharacter === "ö") return "oe"
  if (/^[a-z]$/.test(firstCharacter)) return firstCharacter
  return "other"
}

function loadSearchIndex() {
  searchIndexRequest ??= fetch("/data/search-index.json").then((response) => {
    if (!response.ok) throw new Error("Could not load the search index.")
    return response.json() as Promise<string[]>
  })

  return searchIndexRequest
}

function loadWord(word: string) {
  const shardName = getShardName(word)
  let request = wordShardRequests.get(shardName)

  if (!request) {
    request = fetch(`/data/words/${shardName}.json`).then((response) => {
      if (response.status === 404) return {}
      if (!response.ok) throw new Error("Could not load the word data.")
      return response.json() as Promise<Record<string, WordEntry>>
    })
    wordShardRequests.set(shardName, request)
  }

  return request.then((entries) => entries[word] ?? null)
}

function getEmbeddedWord(word: string) {
  const embedded = window.__WORD_PAGE_DATA__
  return embedded?.word === word ? embedded.entry : undefined
}

function updateSeo(title: string, description: string, canonical?: string, noindex = false) {
  document.title = title

  let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement("meta")
    descriptionTag.name = "description"
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.content = description

  let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (canonical) {
    if (!canonicalTag) {
      canonicalTag = document.createElement("link")
      canonicalTag.rel = "canonical"
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.href = canonical
  } else {
    canonicalTag?.remove()
  }

  let robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (noindex) {
    if (!robotsTag) {
      robotsTag = document.createElement("meta")
      robotsTag.name = "robots"
      document.head.appendChild(robotsTag)
    }
    robotsTag.content = "noindex,follow"
  } else {
    robotsTag?.remove()
  }
}

type SearchBarProps = {
  buttonLabel?: string
  placeholder?: string
  variant?: "default" | "hero"
}

function SearchBar({
  buttonLabel = "Sök",
  placeholder = "Sök bland kontrollerade ordpar, t.ex. stor eller glad",
  variant = "default",
}: SearchBarProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [searchWords, setSearchWords] = useState<readonly string[]>([])

  useEffect(() => {
    if (!query.trim() || searchWords.length > 0) return

    let cancelled = false
    loadSearchIndex()
      .then((words) => {
        if (!cancelled) setSearchWords(words)
      })
      .catch(() => {
        // Search submission still works if suggestions cannot be loaded.
      })

    return () => {
      cancelled = true
    }
  }, [query, searchWords.length])

  const suggestions = searchWords
    .filter((word) => query.trim() !== "" && word.startsWith(query.toLowerCase().trim()))
    .slice(0, 8)

  const handleSearch = (searchTarget: string) => {
    const clean = searchTarget.toLowerCase().trim()
    if (clean) {
      navigate("/ord/" + encodeURIComponent(clean))
      setQuery("")
    }
  }

  return (
    <div className={`search-container search-container--${variant}`}>
      <div className="search">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          aria-label="Sök efter ett svenskt ord"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSearch(query)
          }}
          placeholder={placeholder}
        />
        <button type="button" onClick={() => handleSearch(query)}>{buttonLabel}</button>
      </div>

      {query && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((word) => (
            <button key={word} onClick={() => handleSearch(word)}>
              {word}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function SiteHeader({ showNavigation = true }: { showNavigation?: boolean }) {
  return (
    <header className="site-header">
      <Link className="logo" to="/" aria-label="motsatsord.se startsida">
        <img className="logo-mark" src="/logo-pale-blue.png" alt="" width="40" height="40" />
        <span>motsatsord<span>.se</span></span>
      </Link>

      {showNavigation && (
        <nav className="site-nav" aria-label="Huvudmeny">
          <a href="/ordlista">Ordlista A–Ö</a>
          <a href="/#about">Om</a>
        </nav>
      )}
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="footer">
      <span>© 2026 motsatsord.se · Svenska motsatsord · </span>
      <a href="/integritetspolicy">Integritetspolicy</a>
      <span> · Ordpar med stöd av </span>
      <a href="https://sv.wiktionary.org/">Wiktionary</a>
      <span> (</span><a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a><span>)</span>
    </footer>
  )
}

function HomePage() {
  useEffect(() => {
    updateStructuredData(homeStructuredData())
    updateSeo(
      "Motsatsord – svenska ordpar och antonymer",
      "Slå upp vanliga svenska motsatsord med tydliga exempelmeningar.",
      "https://www.motsatsord.se/",
    )
  }, [])

  return (
    <main className="page home-page">
      <SiteHeader showNavigation />

      <section className="home-hero">
        <div className="hero-panel">
          <span className="hero-eyebrow">Hitta rätt ord direkt</span>
          <h1>Vilket ord söker du motsatsen till?</h1>
          <p>Skriv ett svenskt ord så hjälper vi dig.</p>
          <SearchBar
            buttonLabel="Hitta motsatsen"
            placeholder="Till exempel: snabb"
            variant="hero"
          />

          <p className="review-note">
            <span aria-hidden="true">✓</span>
            Alla publicerade ordpar och exempel är granskade före publicering.
          </p>

          <div className="featured-pair" aria-label="Exempel på motsatsord: snabb och långsam">
            <Link to="/ord/snabb">snabb</Link>
            <span aria-hidden="true">↔</span>
            <Link to="/ord/l%C3%A5ngsam">långsam</Link>
          </div>
        </div>

        <div className="popular" id="popular-words">
          <h2>Vanliga granskade ordpar</h2>
          <p>Öppna ett ordpar för att se en förklaring och två exempelmeningar.</p>
          <div className="chips">
            {homepageWords.map((word) => (
              <Link key={word} to={"/ord/" + encodeURIComponent(word)}>
                {word} ↔ {featuredOpposites[word]}
              </Link>
            ))}
          </div>
          <a className="directory-link" href="/ordlista">Se alla ord i ordlistan A–Ö →</a>
        </div>

        <div className="trust-row">
          <div><span aria-hidden="true">✓</span><strong>{wordCount} ord</strong></div>
          <div><span aria-hidden="true">✓</span><strong>{pairCount} ordpar</strong></div>
          <div><span aria-hidden="true">✓</span><strong>2 exempel per ordpar</strong></div>
        </div>

        <section className="about-section" id="about" aria-labelledby="about-heading">
          <span className="hero-eyebrow">Om webbplatsen</span>
          <h2 id="about-heading">Om motsatsord.se</h2>
          <p>motsatsord.se är en kostnadsfri svensk ordlista som hjälper dig att snabbt hitta motsatsen till ett ord. För varje ord visar vi ett motsatsord, en kort förklaring och tydliga exempelmeningar.</p>
          <p>Ordlistan utvecklas och uppdateras löpande. Delar av underlaget bygger på information från <a href="https://sv.wiktionary.org/">Wiktionary</a>, som används enligt licensen <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
          <p>Har du hittat ett fel eller vill föreslå ett ord? Kontakta oss på <a href="mailto:motsatsord.se@gmail.com">motsatsord.se@gmail.com</a>.</p>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}

function WordPage({ cleanWord }: { cleanWord: string }) {
  const embeddedResult = getEmbeddedWord(cleanWord)
  const [result, setResult] = useState<WordEntry | null | undefined>(() => embeddedResult)
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    if (embeddedResult) return

    let cancelled = false

    loadWord(cleanWord)
      .then((entry) => {
        if (!cancelled) setResult(entry)
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [cleanWord, embeddedResult])

  useEffect(() => {
    if (result) {
      const seoTitle = cleanWord === "rigiditet"
        ? "Rigiditet – motsatsordet flexibilitet och exempel"
        : "Motsatsord till " + cleanWord + " – motsatsord.se"
      const seoDescription = cleanWord === "rigiditet"
        ? "Vad är motsatsen till rigiditet? Motsatsordet är flexibilitet. Rigiditet innebär stelhet och liten möjlighet till förändring. Se två tydliga exempel."
        : result.description + " Se motsatsordet och exempelmeningar."

      updateStructuredData(wordStructuredData(cleanWord, result))
      updateSeo(
        seoTitle,
        seoDescription,
        "https://www.motsatsord.se/ord/" + encodeURIComponent(cleanWord),
      )
    } else if (result === null) {
      updateStructuredData()
      updateSeo(
        "Motsatsord till " + cleanWord + " – motsatsord.se",
        "Ordet finns inte i den granskade ordlistan ännu.",
        undefined,
        true,
      )
    } else {
      updateStructuredData()
    }
  }, [cleanWord, result])

  const browseWords = popularWords.filter((candidate) => candidate !== cleanWord && candidate !== result?.opposite)

  return (
    <main className="page word-page-shell">
      <SiteHeader />

      <section className="word-hero">
        <nav className="breadcrumbs" aria-label="Brödsmulor">
          <Link to="/">Startsidan</Link><span aria-hidden="true">›</span><span aria-current="page">{cleanWord}</span>
        </nav>
        <SearchBar />

        {result ? (
          <div className="word-page">
            <div className="word-card">
              <p>Motsatsord till</p>
              <h1>{cleanWord}</h1>
              <h2>↔ <Link to={"/ord/" + encodeURIComponent(result.opposite)}>{result.opposite}</Link></h2>
            </div>

            <p className="word-description">{result.description}</p>

            <h3>Exempelmeningar</h3>
            <div className="examples">
              {result.examples.map((example) => <p key={example}>{example}</p>)}
            </div>

            <div className="related">
              <h3>Fler vanliga ordpar</h3>
              {browseWords.map((otherWord) => (
                <Link key={otherWord} to={"/ord/" + encodeURIComponent(otherWord)}>
                  {otherWord} ↔ {featuredOpposites[otherWord]}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="result-card" style={{ marginTop: "24px" }}>
            {loadFailed ? (
              <p>Ordet kunde inte laddas just nu. Försök igen om en liten stund.</p>
            ) : result === undefined ? (
              <p>Laddar ordet…</p>
            ) : (
              <>
                <h1>Ordet finns inte i ordlistan ännu</h1>
                <p>Vi har inte lagt till <strong>{cleanWord}</strong> i den granskade ordlistan ännu.</p>
                <Link to="/">Till startsidan</Link>
              </>
            )}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  )
}

function AlphabetNav({ activeLetter }: { activeLetter?: string }) {
  return (
    <nav className="alphabet-nav" aria-label="Välj begynnelsebokstav">
      {directoryLetters.map(({ letter, count }) => count > 0 ? (
        <a key={letter} href={letterUrl(letter)} aria-current={activeLetter === letter ? "page" : undefined}>{letter.toLocaleUpperCase("sv")}</a>
      ) : (
        <span key={letter} className="alphabet-disabled" aria-disabled="true" title="Inga ord på denna bokstav ännu">{letter.toLocaleUpperCase("sv")}</span>
      ))}
    </nav>
  )
}

function PrivacyPage() {
  useEffect(() => {
    updateStructuredData()
    updateSeo(
      "Integritetspolicy – motsatsord.se",
      "Läs hur motsatsord.se hanterar personuppgifter, tekniska loggar, cookies och framtida annonsering.",
      "https://www.motsatsord.se/integritetspolicy",
    )
  }, [])

  return (
    <main className="page legal-page">
      <SiteHeader />
      <section className="legal-shell">
        <nav className="breadcrumbs" aria-label="Brödsmulor">
          <Link to="/">Startsidan</Link><span aria-hidden="true">›</span><span aria-current="page">Integritetspolicy</span>
        </nav>

        <article className="legal-card">
          <span className="hero-eyebrow">Din integritet</span>
          <h1>Integritetspolicy</h1>
          <p className="legal-updated">Senast uppdaterad: 12 november 2026</p>
          <p>Den här policyn förklarar hur motsatsord.se hanterar information när du använder webbplatsen.</p>

          <h2>Personuppgiftsansvarig och kontakt</h2>
          <p>Webbplatsansvarig för motsatsord.se är personuppgiftsansvarig för den behandling som beskrivs här. Frågor om integritet och personuppgifter kan skickas till <a href="mailto:motsatsord.se@gmail.com">motsatsord.se@gmail.com</a>.</p>

          <h2>Vilka uppgifter som kan behandlas</h2>
          <p>Webbplatsen har inga användarkonton, kommentarer eller nyhetsbrev. När du besöker webbplatsen kan grundläggande teknisk information behandlas i serverloggar, till exempel IP-adress, tidpunkt, begärd webbadress samt typ av webbläsare och enhet. Om du kontaktar oss via e-post behandlar vi din e-postadress och innehållet i meddelandet för att kunna svara.</p>

          <h2>Varför uppgifterna behandlas</h2>
          <p>Tekniska loggar används för att leverera webbplatsen, upptäcka fel, skydda tjänsten och förbättra driftsäkerheten. Behandlingen grundas på vårt berättigade intresse av att erbjuda en säker och fungerande webbplats. Kontaktuppgifter används endast för att hantera och besvara din förfrågan.</p>

          <h2>Cookies och annonser</h2>
          <p>motsatsord.se använder inte cookies för besöksstatistik eller användarkonton. Webbplatsen använder Vercel Web Analytics för anonym och sammanställd statistik om exempelvis besökare och sidvisningar. Tjänsten använder inte cookies och är inte avsedd att identifiera enskilda besökare.</p>
          <p>Om Google AdSense aktiveras kan Google och dess annonspartners använda cookies eller liknande identifierare för att visa, mäta och anpassa annonser. Där samtycke krävs kommer du att kunna välja innan icke nödvändiga cookies används. Du kan läsa mer och hantera personanpassade annonser i <a href="https://adssettings.google.com/" rel="noreferrer">Googles annonsinställningar</a>.</p>

          <h2>Tjänsteleverantörer och överföringar</h2>
          <p>Webbplatsen driftas av Vercel, som kan behandla tekniska uppgifter för att leverera och skydda tjänsten samt tillhandahålla anonym besöksstatistik. Vid framtida annonsering kan Google behandla uppgifter enligt sina villkor och integritetsregler. Leverantörer kan behandla uppgifter utanför EU/EES med de skyddsåtgärder som krävs enligt tillämplig dataskyddslagstiftning.</p>

          <h2>Hur länge uppgifterna sparas</h2>
          <p>Tekniska loggar sparas endast så länge de behövs för drift, säkerhet och felsökning enligt tjänsteleverantörens inställningar. E-postmeddelanden sparas så länge det behövs för att hantera ärendet och eventuella uppföljningar.</p>

          <h2>Dina rättigheter</h2>
          <p>Du kan ha rätt att begära tillgång till, rättelse eller radering av dina personuppgifter samt att invända mot eller begränsa viss behandling. Om behandling grundas på samtycke kan du återkalla samtycket. Kontakta oss på adressen ovan. Du kan också lämna klagomål till <a href="https://www.imy.se/" rel="noreferrer">Integritetsskyddsmyndigheten (IMY)</a>.</p>

          <h2>Ändringar i policyn</h2>
          <p>Policyn kan uppdateras när webbplatsen eller de tjänster som används förändras. Datumet högst upp visar när den senast uppdaterades.</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  )
}

function DirectoryPage({ slug }: { slug?: string }) {
  const selectedLetter = directoryLetters.find((item) => item.slug === slug && item.count > 0)
  const embedded = window.__DIRECTORY_PAGE_DATA__
  const [group, setGroup] = useState<DirectoryGroup | undefined>(() => embedded?.slug === slug ? embedded : undefined)
  const [failed, setFailed] = useState(false)
  const letter = selectedLetter?.letter

  useEffect(() => {
    if (!slug || !selectedLetter || group) return
    let cancelled = false
    fetch('/data/directory/' + slug + '.json')
      .then((response) => {
        if (!response.ok) throw new Error('Directory could not load')
        return response.json() as Promise<DirectoryGroup>
      })
      .then((data) => { if (!cancelled) setGroup(data) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [slug, selectedLetter, group])

  useEffect(() => {
    updateStructuredData()
    if (slug && !selectedLetter) return
    updateSeo(directoryTitle(letter), directoryDescription(letter), 'https://www.motsatsord.se' + (letter ? letterUrl(letter) : '/ordlista'))
  }, [slug, selectedLetter, letter])

  if (slug && !selectedLetter) return <NotFoundPage />

  return (
    <main className="page directory-page">
      <SiteHeader />
      <section className="directory-shell">
        <nav className="breadcrumbs" aria-label="Brödsmulor">
          <a href="/">Startsidan</a><span aria-hidden="true">›</span>
          {letter && <><a href="/ordlista">Ordlista A–Ö</a><span aria-hidden="true">›</span></>}
          <span aria-current="page">{letter ? letter.toLocaleUpperCase("sv") : "Ordlista A–Ö"}</span>
        </nav>
        <div className="directory-intro">
          <span className="hero-eyebrow">Svenska motsatsord</span>
          <h1>{letter ? 'Motsatsord på ' + letter.toLocaleUpperCase("sv") : 'Ordlista A–Ö'}</h1>
          <p>{letter ? 'Välj ett ord för att se motsatsen, en förklaring och två exempelmeningar.' : `Hitta bland ${wordCount} ord. Välj en bokstav eller sök efter ett ord direkt.`}</p>
          <SearchBar />
        </div>
        <AlphabetNav activeLetter={letter} />
        {selectedLetter ? (
          <>
            <p className="directory-count">{selectedLetter.count} ord på {letter?.toLocaleUpperCase("sv")}</p>
            {group ? (
              <ul className="word-directory-list">
                {group.entries.map(({ word, opposite }) => <li key={word}><a href={'/ord/' + encodeURIComponent(word)}><strong>{word}</strong><span>↔ {opposite}</span></a></li>)}
              </ul>
            ) : <p role="status">{failed ? 'Ordlistan kunde inte laddas. Försök att ladda om sidan.' : 'Laddar ordlistan…'}</p>}
          </>
        ) : (
          <div className="letter-grid">
            {directoryLetters.filter((item) => item.count > 0).map((item) => (
              <a key={item.letter} className="letter-card" href={letterUrl(item.letter)}><strong>{item.letter.toLocaleUpperCase("sv")}</strong><span>{item.count} ord</span><span aria-hidden="true">→</span></a>
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  )
}

function DirectoryRoute() {
  const { letter } = useParams()
  return <DirectoryPage key={letter ?? 'all'} slug={letter} />
}

function WordPageRoute() {
  const { word } = useParams()
  const cleanWord = word?.toLowerCase().trim() || ""
  return <WordPage key={cleanWord} cleanWord={cleanWord} />
}

function NotFoundPage() {
  useEffect(() => {
    updateStructuredData()
    updateSeo("Sidan kunde inte hittas – motsatsord.se", "Sök efter svenska motsatsord eller gå till startsidan.", undefined, true)
  }, [])

  return (
    <main className="page word-page-shell">
      <SiteHeader />
      <section className="word-hero">
        <div className="result-card not-found">
          <p className="error-code">404</p>
          <h1>Sidan kunde inte hittas</h1>
          <p>Länken kan vara felstavad eller sidan kan ha flyttats. Sök efter ett ord eller gå till startsidan.</p>
          <Link className="back-button" to="/">← Till startsidan</Link>
        </div>
        <SearchBar />
      </section>
      <SiteFooter />
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ord/:word" element={<WordPageRoute />} />
      <Route path="/ordlista" element={<DirectoryRoute />} />
      <Route path="/ordlista/:letter" element={<DirectoryRoute />} />
      <Route path="/integritetspolicy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

