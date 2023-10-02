import { AddressBook, Newspaper, ShoppingBag, Trophy } from 'phosphor-react'

export function MainNavigation() {
  return (
    <nav className="items-flex-start flex flex-col justify-center px-3">
      <ul className="flex flex-col gap-4 text-lg text-teal-500">
        <a href="/loja" className="rounded hover:bg-teal-900">
          <li className="flex items-center gap-2">
            <ShoppingBag size={32} />
            Loja
          </li>
        </a>
        <a href="/novidades" className="rounded hover:bg-teal-900">
          <li className="flex items-center gap-2">
            <Newspaper size={32} />
            Novidades
          </li>
        </a>
        <a href="/conquistas" className="rounded hover:bg-teal-900">
          <li className="flex items-center gap-2">
            <Trophy size={32} />
            Conquistas
          </li>
        </a>
        <a href="/contato" className="rounded hover:bg-teal-900">
          <li className="flex items-center gap-2">
            <AddressBook size={32} />
            Contato
          </li>
        </a>
      </ul>
    </nav>
  )
}
