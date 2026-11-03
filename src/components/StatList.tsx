import type { CSSProperties } from 'react'
import { MAX_BASE_STAT } from '../constants/pokedex'
import type { PokemonStat } from '../types/pokemon'

interface StatListProps {
  stats: PokemonStat[]
}

export function StatList({ stats }: StatListProps) {
  return (
    <dl className="stat-list">
      {stats.map((stat) => {
        const pct = Math.min(100, (stat.value / MAX_BASE_STAT) * 100)
        return (
          <div className="stat-list__row" key={stat.key}>
            <dt>{stat.label}</dt>
            <dd>
              <span className="stat-list__value">{stat.value}</span>
              <span
                className="stat-list__bar"
                style={{ '--pct': `${pct}%` } as CSSProperties}
                aria-hidden="true"
              />
            </dd>
          </div>
        )
      })}
    </dl>
  )
}