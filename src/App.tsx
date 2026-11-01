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

function SearchBar() {
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
    <div className="search-container">
      <div className="search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(query)
          }}
          placeholder="Sök bland kontrollerade ordpar, t.ex. stor eller glad"
        />
        <button onClick={() => handleSearch(query)}>Sök</button>
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

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    updateSeo(
      "Motsatsord – svenska ordpar och antonymer",
      "Slå upp vanliga svenska motsatsord med tydliga exempelmeningar.",
      "https://www.motsatsord.se/",
    )
  }, [])

  return (
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <img src="/favicon.png" alt="Motsatsord logo" className="logo-icon" />
          <span>motsatsord<span>.se</span></span>
        </div>
      </header>

      <section className="hero">
        <h1>Hitta motsatsord till vanliga svenska ord</h1>
        <p>Se kontrollerade ordpar, korta förklaringar och exempelmeningar.</p>
        <SearchBar />

        <div className="popular">
          <h3>VANLIGA ORDPAR</h3>
          <div className="chips">
            {popularWords.map((word) => (
              <Link key={word} to={"/ord/" + encodeURIComponent(word)}>
                {word} ↔ {words[word as keyof typeof words].opposite}
              </Link>
            ))}
          </div>
        </div>

        <p className="dictionary-note">
          Ordlistan fokuserar på ordpar och exempel som har granskats. Fler ord läggs till efter kontroll.
        </p>

        <div className="cards">
          <div><h2>Tydligt</h2><p>Varje ordpar har exempel i sitt sammanhang.</p></div>
          <div><h2>Enkelt</h2><p>Sök direkt bland orden i ordlistan.</p></div>
          <div><h2>Gratis</h2><p>Slå upp ord utan konto.</p></div>
        </div>
      </section>

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord</footer>
    </main>
  )
}

function WordPage() {
  const navigate = useNavigate()
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
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>motsatsord<span>.se</span></div>
      </header>

      <section className="hero">
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

      <footer className="footer">© 2026 motsatsord.se · Svenska motsatsord</footer>
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
