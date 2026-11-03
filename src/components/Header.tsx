import { PokeballIcon } from './PokeballIcon'

export function Header() {
  return (
    <header className="site-header">
      <PokeballIcon className="site-header__logo" />
      <div>
        <h1 className="site-header__title">Pokédex</h1>
        <p className="site-header__subtitle">
          Busca un Pokémon por su número nacional
        </p>
      </div>
    </header>
  )
}