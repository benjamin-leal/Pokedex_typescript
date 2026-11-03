interface PokeballIconProps {
  className?: string
}

/** Pokébola decorativa (oculta para lectores de pantalla). */
export function PokeballIcon({ className }: PokeballIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#212121" strokeWidth="6" />
      <path
        d="M4 50a46 46 0 0 1 92 0z"
        fill="#ee1515"
        stroke="#212121"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M4 50h92" stroke="#212121" strokeWidth="6" />
      <circle cx="50" cy="50" r="14" fill="#fff" stroke="#212121" strokeWidth="6" />
    </svg>
  )
}