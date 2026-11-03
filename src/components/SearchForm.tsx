import { useState } from 'react'
import type { FormEvent } from 'react'
import { MAX_POKEDEX_ID } from '../constants/pokedex'

interface SearchFormProps {
  initialValue: number
  disabled?: boolean
  onSearch: (id: number) => void
}

export function SearchForm({ initialValue, disabled, onSearch }: SearchFormProps) {
  const [value, setValue] = useState(String(initialValue))
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = Number(value)

    if (!Number.isInteger(id) || id < 1 || id > MAX_POKEDEX_ID) {
      setValidationError(`Ingresa un número entero entre 1 y ${MAX_POKEDEX_ID}.`)
      return
    }

    setValidationError(null)
    onSearch(id)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <label className="search-form__label" htmlFor="pokedex-number">
        Número de Pokédex
      </label>
      <div className="search-form__controls">
        <input
          id="pokedex-number"
          className="search-form__input"
          type="number"
          inputMode="numeric"
          min={1}
          max={MAX_POKEDEX_ID}
          placeholder="Ej: 25"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-invalid={validationError !== null}
          aria-describedby={validationError ? 'search-error' : undefined}
        />
        <button className="button button--primary" type="submit" disabled={disabled}>
          Buscar
        </button>
      </div>
      {validationError && (
        <p id="search-error" className="search-form__error" role="alert">
          {validationError}
        </p>
      )}
    </form>
  )
}