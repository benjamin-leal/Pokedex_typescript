import { TYPE_LABELS } from '../constants/pokedex'

interface TypeBadgeProps {
  type: string
}

export function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span className="type-badge" data-type={type}>
      {TYPE_LABELS[type] ?? type}
    </span>
  )
}