import { useEffect, useState } from "react"
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"
import { words } from "./data/words"

const allWords = Object.keys(words)
const popularWords = ["stor", "snabb", "varm", "glad", "ljus", "hög", "ung", "full", "öppen", "lätt"]

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

  const suggestions = allWords
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
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(query)
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

          <div className="featured-pair" aria-label="Exempel på motsatsord: snabb och långsam">
            <Link to="/ord/snabb">snabb</Link>
            <span aria-hidden="true">↔</span>
            <Link to="/ord/l%C3%A5ngsam">långsam</Link>
          </div>
        </div>

        <div className="popular" id="popular-words">
          <h2>Prova ett vanligt ord</h2>
          <div className="chips">
            {popularWords.slice(0, 6).map((word) => (
              <Link key={word} to={"/ord/" + encodeURIComponent(word)}>
                {word}
              </Link>
            ))}
          </div>
        </div>

        <div className="trust-row" id="about">
          <div><span aria-hidden="true">✓</span><strong>Granskade ordpar</strong></div>
          <div><span aria-hidden="true">✓</span><strong>Tydliga meningar</strong></div>
          <div><span aria-hidden="true">✓</span><strong>Alltid gratis</strong></div>
        </div>
      </section>

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord · Ordpar med stöd av <a href="https://sv.wiktionary.org/">Wiktionary</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>
    </main>
  )
}

function WordPage() {
  const { word } = useParams()
  const cleanWord = word?.toLowerCase().trim() || ""
  const result = words[cleanWord as keyof typeof words]

  useEffect(() => {
    if (result) {
      updateSeo(
        "Motsatsord till " + cleanWord + " – motsatsord.se",
        result.description + " Se motsatsordet och exempelmeningar.",
        "https://www.motsatsord.se/ord/" + encodeURIComponent(cleanWord),
      )
    } else {
      updateSeo(
        "Motsatsord till " + cleanWord + " – motsatsord.se",
        "Ordet finns inte i den granskade ordlistan ännu.",
        undefined,
        true,
      )
    }
  }, [cleanWord, result])

  const browseWords = popularWords.filter((candidate) => candidate !== cleanWord && candidate !== result?.opposite)

  return (
    <main className="page word-page-shell">
      <SiteHeader />

      <section className="word-hero">
        <Link className="back-button" to="/">← Till startsidan</Link>
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
                  {otherWord} ↔ {words[otherWord as keyof typeof words].opposite}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="result-card" style={{ marginTop: "24px" }}>
            <p>Vi har inte lagt till <strong>{cleanWord}</strong> i den granskade ordlistan ännu.</p>
            <Link to="/">Till startsidan</Link>
          </div>
        )}
      </section>

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord · Ordpar med stöd av <a href="https://sv.wiktionary.org/">Wiktionary</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</footer>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ord/:word" element={<WordPage />} />
    </Routes>
  )
}

export default App

