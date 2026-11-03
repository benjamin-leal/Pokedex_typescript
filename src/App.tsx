import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PokemonCard } from './components/PokemonCard'
import { SearchForm } from './components/SearchForm'
import { StatusMessage } from './components/StatusMessage'
import { DEFAULT_POKEDEX_ID, MAX_POKEDEX_ID } from './constants/pokedex'
import { usePokemon } from './hooks/usePokemon'

function App() {
  const [pokedexId, setPokedexId] = useState(DEFAULT_POKEDEX_ID)
  const { pokemon, loading, error } = usePokemon(pokedexId)

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        {/* key: reinicia el input cuando el número cambia con ◀ / ▶ */}
        <SearchForm
          key={pokedexId}
          initialValue={pokedexId}
          disabled={loading}
          onSearch={setPokedexId}
        />

        <nav className="pager" aria-label="Navegar por la Pokédex">
          <button
            className="button"
            type="button"
            onClick={() => setPokedexId((id) => id - 1)}
            disabled={pokedexId <= 1}
          >
            ◀ Anterior
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setPokedexId((id) => id + 1)}
            disabled={pokedexId >= MAX_POKEDEX_ID}
          >
            Siguiente ▶
          </button>
        </nav>

        <section className="result" aria-label="Resultado de la búsqueda">
          {loading && (
            <StatusMessage variant="loading" message="Buscando en la Pokédex…" />
          )}
          {error && <StatusMessage variant="error" message={error} />}
          {pokemon && <PokemonCard pokemon={pokemon} />}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App