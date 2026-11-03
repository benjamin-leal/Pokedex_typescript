import type { Pokemon } from '../types/pokemon'
import { padPokedexNumber } from '../services/format'
import { StatList } from './StatList'
import { TypeBadge } from './TypeBadge'

interface PokemonCardProps {
  pokemon: Pokemon
}

const numberFormat = new Intl.NumberFormat('es-CL', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const titleId = `pokemon-${pokemon.id}-name`

  return (
    <article className="pokemon-card" aria-labelledby={titleId}>
      <header className="pokemon-card__header">
        <p className="pokemon-card__number">N.º {padPokedexNumber(pokemon.id)}</p>
        <h2 id={titleId} className="pokemon-card__name">
          {pokemon.name}
        </h2>
        <p className="pokemon-card__genus">{pokemon.genus}</p>
      </header>

      <figure className="pokemon-card__figure">
        {pokemon.imageUrl ? (
          <img
            src={pokemon.imageUrl}
            alt={`Ilustración de ${pokemon.name}`}
            width={475}
            height={475}
          />
        ) : (
          <p>Sin imagen disponible</p>
        )}
      </figure>

      <section className="pokemon-card__section" aria-labelledby={`${titleId}-types`}>
        <h3 id={`${titleId}-types`} className="visually-hidden">
          Tipos
        </h3>
        <ul className="pokemon-card__types">
          {pokemon.types.map((type) => (
            <li key={type}>
              <TypeBadge type={type} />
            </li>
          ))}
        </ul>
      </section>

      <p className="pokemon-card__description">{pokemon.description}</p>

      <section className="pokemon-card__section" aria-labelledby={`${titleId}-body`}>
        <h3 id={`${titleId}-body`} className="section-title">
          Ficha
        </h3>
        <dl className="measures">
          <div>
            <dt>Altura</dt>
            <dd>{numberFormat.format(pokemon.heightM)} m</dd>
          </div>
          <div>
            <dt>Peso</dt>
            <dd>{numberFormat.format(pokemon.weightKg)} kg</dd>
          </div>
        </dl>
      </section>

      <section className="pokemon-card__section" aria-labelledby={`${titleId}-abilities`}>
        <h3 id={`${titleId}-abilities`} className="section-title">
          Habilidades
        </h3>
        <ul className="abilities">
          {pokemon.abilities.map((ability) => (
            <li key={ability.name}>
              {ability.name}
              {ability.hidden && <small> (oculta)</small>}
            </li>
          ))}
        </ul>
      </section>

      <section className="pokemon-card__section" aria-labelledby={`${titleId}-stats`}>
        <h3 id={`${titleId}-stats`} className="section-title">
          Estadísticas base
        </h3>
        <StatList stats={pokemon.stats} />
      </section>
    </article>
  )
}