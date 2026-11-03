export const API_BASE_URL = 'https://pokeapi.co/api/v2'

/** Última entrada de la Pokédex nacional con datos completos en la PokéAPI. */
export const MAX_POKEDEX_ID = 1025
export const DEFAULT_POKEDEX_ID = 25 // Pikachu

/** Valor máximo de una estadística base, usado para dimensionar las barras. */
export const MAX_BASE_STAT = 255

export const TYPE_LABELS: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Eléctrico',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragón',
  dark: 'Siniestro',
  steel: 'Acero',
  fairy: 'Hada',
}

export const STAT_LABELS: Record<string, string> = {
  hp: 'PS',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'Ataq. Esp.',
  'special-defense': 'Def. Esp.',
  speed: 'Velocidad',
}