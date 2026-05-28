import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"

import { words } from "./data/words"
import wordlist from "./data/swe_wordlist.txt?raw"

// Process global wordlist for autocomplete helper
const allWords = wordlist
  .split("\n")
  .map((w) => w.trim().toLowerCase())
  .filter(Boolean)
  .filter((word) => word.length >= 3 && word.length <= 15)
  .filter((word) => !word.endsWith("ens") && !word.endsWith("arnas") && !word.endsWith("ande") && !word.endsWith("het"))

// Reusable search bar used across pages
function SearchBar() {
  const navigate = useNavigate()

  // Initialize with empty text if we want a fresh search bar on result pages, 
  // or use initialValue if you want it populated on the absolute first home load.
  const [query, setQuery] = useState("")

  const suggestions = allWords
    .filter((word) => query.trim() !== "" && word.startsWith(query.toLowerCase().trim()))
    .slice(0, 8)

  const handleSearch = (searchTarget: string) => {
    const clean = searchTarget.toLowerCase().trim()
    if (clean) {
      navigate(`/ord/${clean}`)
      setQuery("") // 👈 Clears out the text string instantly
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
          placeholder="Sök efter ett ord, t.ex. stor, snabb, glad..."
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
    document.title = "Motsatsord – Hitta svenska motsatsord"
  }, [])

  const searches = [
    "stor ↔ liten", "snabb ↔ långsam", "varm ↔ kall", "glad ↔ ledsen", "ljus ↔ mörk",
    "hög ↔ låg", "rik ↔ fattig", "ung ↔ gammal", "full ↔ tom", "öppen ↔ stängd"
  ]

  return (
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          motsatsord<span>.se</span>
        </div>
      </header>

      <section className="hero">
        <h1>Hitta <span>motsatsen</span> till vilket svenskt ord som helst</h1>
        <p>Skriv in ett ord så visar vi motsatsord, exempel och liknande ord.</p>

        <SearchBar />

        <div className="popular">
          <h3>POPULÄRA SÖKNINGAR</h3>
          <div className="chips">
            {searches.map((item) => (
              <button
                key={item}
                onClick={() => {
                  const word = item.split(" ↔ ")[0]
                  navigate(`/ord/${word}`)
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="cards">
          <div>
            <h2>Snabbt</h2>
            <p>Resultat på en sekund.</p>
          </div>
          <div>
            <h2>Enkelt</h2>
            <p>En sökruta. Inga distraktioner.</p>
          </div>
          <div>
            <h2>Gratis</h2>
            <p>Inga konton, inga annonser.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 motsatsord.se · Hitta motsatsen till svenska ord
      </footer>
    </main>
  )
}

function WordPage() {
  const navigate = useNavigate()
  const { word } = useParams()
  const cleanWord = word?.toLowerCase().trim() || ""

  const result = words[cleanWord as keyof typeof words]

  useEffect(() => {
    document.title = `Motsatsord till ${cleanWord} – motsatsord.se`
  }, [cleanWord])

  return (
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          motsatsord<span>.se</span>
        </div>
      </header>

      <section className="hero">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Till startsidan
        </button>

        {/* Keeps the search flow alive right inside the word component */}
        <SearchBar />

        {result ? (
          <div className="word-page">
            <div className="word-card">
              <p>Motsatsord till</p>
              <h1>{cleanWord}</h1>
              <h2>
                ↔ <span>{result.opposite}</span>
              </h2>
            </div>

            {result.examples && result.examples.length > 0 && (
              <>
                <h3>Exempelmeningar</h3>
                <div className="examples">
                  {result.examples.map((example) => (
                    <div key={example}>{example}</div>
                  ))}
                </div>
              </>
            )}

            {result.related && result.related.length > 0 && (
              <>
                <h3>Liknande ord</h3>
                <div className="related">
                  {result.related.map((relatedWord) => (
                    <button key={relatedWord} onClick={() => navigate(`/ord/${relatedWord}`)}>
                      {relatedWord}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="result-card" style={{ marginTop: '24px' }}>
            <p>Inget motsatsord hittades för <strong>{cleanWord}</strong> än.</p>
          </div>
        )}
      </section>

      <footer className="footer">
        © 2026 motsatsord.se · Hitta motsatsen till svenska ord
      </footer>
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