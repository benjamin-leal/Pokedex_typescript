import { useEffect, useState } from 'react'
import { PokeApiError, getPokemonById } from '../services/pokeapi'
import type { Pokemon } from '../types/pokemon'

interface Result {
  id: number
  pokemon: Pokemon | null
  error: string | null
}

export interface UsePokemonState {
  pokemon: Pokemon | null
  loading: boolean
  error: string | null
}

const toErrorMessage = (error: unknown): string =>
  error instanceof PokeApiError && error.status === 404
    ? 'No se encontró ningún Pokémon con ese número.'
    : 'No pudimos conectar con la PokéAPI. Revisa tu conexión e inténtalo de nuevo.'

/**
 * Consulta la PokéAPI cada vez que cambia el número buscado.
 * - Cancela la petición anterior (AbortController) si el número cambia.
 * - `loading` se deriva: hay carga mientras el resultado guardado
 *   no corresponda al número pedido.
 */
export function usePokemon(id: number): UsePokemonState {
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    getPokemonById(id, controller.signal)
      .then((pokemon) => setResult({ id, pokemon, error: null }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setResult({ id, pokemon: null, error: toErrorMessage(error) })
      })

    return () => controller.abort()
  }, [id])

  const current = result?.id === id ? result : null

  return {
    pokemon: current?.pokemon ?? null,
    loading: current === null,
    error: current?.error ?? null,
  }
}