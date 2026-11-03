import { API_BASE_URL } from '../constants/pokedex'
import type { Pokemon } from '../types/pokemon'
import type {
  PokemonApiResponse,
  SpeciesApiResponse,
} from '../types/pokeapi'
import { mapPokemon } from './pokemonMapper'

export class PokeApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'PokeApiError'
    this.status = status
  }
}

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new PokeApiError(
      response.status,
      `PokéAPI respondió ${response.status}`,
    )
  }
  return (await response.json()) as T
}

/** Consulta un Pokémon por su número de Pokédex. */
export async function getPokemonById(
  id: number,
  signal?: AbortSignal,
): Promise<Pokemon> {
  const [pokemon, species] = await Promise.all([
    fetchJson<PokemonApiResponse>(`${API_BASE_URL}/pokemon/${id}`, signal),
    fetchJson<SpeciesApiResponse>(
      `${API_BASE_URL}/pokemon-species/${id}`,
      signal,
    ),
  ])
  return mapPokemon(pokemon, species)
}
