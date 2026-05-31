import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"

// Här importerar vi din ordlista helt utan att krascha Vite
import { words } from "./data/words"

// Detta drar automatiskt ut ALLA ord i din words.ts så att din autocomplete fungerar direkt
const allWords = Object.keys(words)

// Återanvändbar sökkomponent som matchar din CSS perfekt
function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const suggestions = allWords
    .filter((word) => query.trim() !== "" && word.startsWith(query.toLowerCase().trim()))
    .slice(0, 8)

  const handleSearch = (searchTarget: string) => {
    const clean = searchTarget.toLowerCase().trim()
    if (clean) {
      navigate(`/ord/${clean}`)
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

  // Hämtar matchningen och mappar mot din strukturs egenskaper (opposite, examples, related)
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
                  {(result.examples || []).map((example: string) => (
                    <div key={example}>{example}</div>
                  ))}
                </div>
              </>
            )}

            {result.related && result.related.length > 0 && (
              <>
                <h3>Liknande ord</h3>
                <div className="related">
                  {(result.related || []).map((relatedWord: string) => (
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