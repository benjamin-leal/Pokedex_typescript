import { PokeballIcon } from './PokeballIcon'

interface StatusMessageProps {
  variant: 'loading' | 'error'
  message: string
}

/** Estado de carga o error de la consulta a la API. */
export function StatusMessage({ variant, message }: StatusMessageProps) {
  if (variant === 'loading') {
    return (
      <div className="status status--loading" role="status" aria-live="polite">
        <PokeballIcon className="status__spinner" />
        <p>{message}</p>
      </div>
    )
  }

  return (
    <div className="status status--error" role="alert">
      <p>{message}</p>
    </div>
  )
}