import { useEffect, useState } from "react"
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"
import { featuredOpposites, pairCount, wordCount } from "./data/site-summary"
import { homeStructuredData, wordStructuredData, serializeStructuredData } from "./structured-data.js"

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

function SiteHeader({ showNavigation = false }: { showNavigation?: boolean }) {
  return (
    <header className="site-header">
      <Link className="logo" to="/" aria-label="motsatsord.se startsida">
        <span className="logo-mark" aria-hidden="true">↔</span>
        <span>motsatsord<span>.se</span></span>
      </Link>

      {showNavigation && (
        <nav className="site-nav" aria-label="Huvudmeny">
          <a href="#popular-words">Ordlista</a>
          <a href="#about">Om</a>
        </nav>
      )}
    </header>
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
        </div>

        <div className="trust-row" id="about">
          <div><span aria-hidden="true">✓</span><strong>{wordCount} granskade ord</strong></div>
          <div><span aria-hidden="true">✓</span><strong>{pairCount} kontrollerade ordpar</strong></div>
          <div><span aria-hidden="true">✓</span><strong>2 granskade exempel per ordpar</strong></div>
        </div>
      </section>

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord · Ordpar med stöd av <a href="https://sv.wiktionary.org/">Wiktionary</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>
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
      updateStructuredData(wordStructuredData(cleanWord, result))
      updateSeo(
        "Motsatsord till " + cleanWord + " – motsatsord.se",
        result.description + " Se motsatsordet och exempelmeningar.",
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

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord · Ordpar med stöd av <a href="https://sv.wiktionary.org/">Wiktionary</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>
    </main>
  )
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
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ord/:word" element={<WordPageRoute />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

