export interface NamedResource {
  name: string
}

export interface PokemonApiResponse {
  id: number
  name: string
  height: number 
  weight: number 
  types: { slot: number; type: NamedResource }[]
  abilities: { ability: NamedResource; is_hidden: boolean }[]
  stats: { base_stat: number; stat: NamedResource }[]
  sprites: {
    front_default: string | null
    other?: {
      'official-artwork'?: { front_default: string | null }
    }
  }
}

interface Localized {
  language: NamedResource
}

export interface SpeciesApiResponse {
  names: (Localized & { name: string })[]
  genera: (Localized & { genus: string })[]
  flavor_text_entries: (Localized & { flavor_text: string })[]
}