export const padPokedexNumber = (id: number): string =>
  String(id).padStart(4, '0')

export const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1)

/** "solar-power" -> "Solar power" */
export const slugToText = (slug: string): string =>
  capitalize(slug.replace(/-/g, ' '))