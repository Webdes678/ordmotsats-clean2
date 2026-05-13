import { useState } from "react"
import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"

import { words } from "./data/words"

function HomePage() {
  const navigate = useNavigate()

  document.title = "Motsatsord – hitta svenska motsatsord"

  const [query, setQuery] = useState("")
  const [searchWord, setSearchWord] = useState("")

  const cleanQuery = searchWord.toLowerCase().trim()

  const result = words[cleanQuery as keyof typeof words]

  const suggestions = Object.keys(words)
    .filter((word) => word.startsWith(query.toLowerCase().trim()))
    .slice(0, 8)

  const searches = [
    "stor ↔ liten",
    "snabb ↔ långsam",
    "varm ↔ kall",
    "glad ↔ ledsen",
    "ljus ↔ mörk",
    "hög ↔ låg",
    "rik ↔ fattig",
    "ung ↔ gammal",
    "full ↔ tom",
    "öppen ↔ stängd",
  ]

  return (
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          motsatsord<span>.se</span>
        </div>

      </header>

      <section className="hero">
        {!searchWord && (
          <>
            <h1>
              Hitta <span>motsatsen</span> till vilket svenskt ord som helst
            </h1>

            <p>
              Skriv in ett ord så visar vi motsatsord, exempel och liknande ord.
            </p>
          </>
        )}

        <div className="search">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSearchWord("")
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/ord/${query.toLowerCase().trim()}`)
              }
            }}
            placeholder="Sök efter ett ord, t.ex. stor, snabb, glad..."
          />

          <button
            onClick={() => {
              navigate(`/ord/${query.toLowerCase().trim()}`)
            }}
          >
            Sök
          </button>
        </div>

        {query && !searchWord && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((word) => (
              <button
                key={word}
                onClick={() => {
                  navigate(`/ord/${word}`)
                }}
              >
                {word}
              </button>
            ))}
          </div>
        )}
        {searchWord && result && (
          <>
            <button
              className="back-button"
              onClick={() => {
                setQuery("")
                setSearchWord("")
              }}
            >
              ← Tillbaka
            </button>

            <div className="word-page">
              <div className="word-card">
                <p>Motsatsord till</p>

                <h1>{cleanQuery}</h1>

                <h2>
                  ↔ <span>{result.opposite}</span>
                </h2>
              </div>

              <h3>Exempelmeningar</h3>

              <div className="examples">
                {result.examples.map((example) => (
                  <div key={example}>{example}</div>
                ))}
              </div>

              <h3>Liknande ord</h3>

              <div className="related">
                {result.related.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </div>
            </div>
          </>
        )}

        {searchWord && !result && (
          <div className="result-card">
            <p>Inget motsatsord hittades.</p>
          </div>
        )}

        {!searchWord && (
          <>
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
          </>
        )}
      </section>
    </main>
  )
}

function WordPage() {
  const navigate = useNavigate()
  const { word } = useParams()

  const result = words[word as keyof typeof words]
  
  document.title = `Motsatsord till ${word} – motsatsord.se`

  if (!word || !result) {
    return (
      <main className="page">
        <section className="hero">
          <div className="result-card">
            <p>Inget motsatsord hittades.</p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          motsatsord<span>.se</span>
        </div>
      </header>

      <section className="hero">
        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          ← Tillbaka
        </button>

        <div className="word-page">
          <div className="word-card">
            <p>Motsatsord till</p>

            <h1>{word}</h1>

            <h2>
              ↔ <span>{result.opposite}</span>
            </h2>
          </div>

          <h3>Exempelmeningar</h3>

          <div className="examples">
            {result.examples.map((example) => (
              <div key={example}>{example}</div>
            ))}
          </div>

          <h3>Liknande ord</h3>

          <div className="related">
            {result.related.map((relatedWord) => (
              <button
                key={relatedWord}
                onClick={() => {
                  navigate(`/ord/${relatedWord}`)
                }}
              >
                {relatedWord}
              </button>
            ))}
          </div>
        </div>
      </section>
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