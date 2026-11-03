export interface PokemonStat {
  key: string
  label: string
  value: number
}

export interface PokemonAbility {
  name: string
  hidden: boolean
}

export interface Pokemon {
  id: number
  name: string
  genus: string
  description: string
  imageUrl: string | null
  heightM: number
  weightKg: number
  types: string[] // claves de la API, p. ej. "fire"
  abilities: PokemonAbility[]
  stats: PokemonStat[]
}