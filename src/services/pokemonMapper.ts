import { STAT_LABELS } from '../constants/pokedex'
import type { Pokemon } from '../types/pokemon'
import type {
  PokemonApiResponse,
  SpeciesApiResponse,
} from '../types/pokeapi'
import { capitalize, slugToText } from './format'

const LANG = 'es'

const findByLang = <T extends { language: { name: string } }>(
  entries: T[],
): T | undefined => entries.find((entry) => entry.language.name === LANG)

/** Los textos de la API traen saltos de línea y saltos de página embebidos. */
const cleanText = (text: string): string =>
  text.replace(/[\n\f\r]+/g, ' ').trim()

/** Une la respuesta de /pokemon y /pokemon-species en un único modelo. */
export function mapPokemon(
  pokemon: PokemonApiResponse,
  species: SpeciesApiResponse,
): Pokemon {
  const artwork = pokemon.sprites.other?.['official-artwork']?.front_default

  return {
    id: pokemon.id,
    name: findByLang(species.names)?.name ?? capitalize(pokemon.name),
    genus: findByLang(species.genera)?.genus ?? 'Pokémon',
    description: cleanText(
      findByLang(species.flavor_text_entries)?.flavor_text ??
        'Sin descripción disponible en español.',
    ),
    imageUrl: artwork ?? pokemon.sprites.front_default,
    heightM: pokemon.height / 10,
    weightKg: pokemon.weight / 10,
    types: [...pokemon.types]
      .sort((a, b) => a.slot - b.slot)
      .map((entry) => entry.type.name),
    abilities: pokemon.abilities.map((entry) => ({
      name: slugToText(entry.ability.name),
      hidden: entry.is_hidden,
    })),
    stats: pokemon.stats.map((entry) => ({
      key: entry.stat.name,
      label: STAT_LABELS[entry.stat.name] ?? slugToText(entry.stat.name),
      value: entry.base_stat,
    })),
  }
}