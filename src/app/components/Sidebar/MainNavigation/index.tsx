import { AddressBook, Newspaper, ShoppingBag, Trophy } from 'phosphor-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="items-flex-start flex flex-col justify-center px-3">
      <ul className="flex flex-col gap-4 text-lg text-teal-500">
        <NavItem href="/loja" title="Loja" icon={ShoppingBag} />
        <NavItem href="/novidades" title="Novidades" icon={Newspaper} />
        <NavItem href="/conquistas" title="Conquistas" icon={Trophy} />
        <NavItem href="/contato" title="Contato" icon={AddressBook} />
      </ul>
    </nav>
  )
}
