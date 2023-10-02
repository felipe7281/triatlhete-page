'use client'

import Image from 'next/image'
import logo from '../../../public/footerImages/logo.png'
import {
  AddressBook,
  MagnifyingGlass,
  Newspaper,
  ShoppingBag,
  Trophy,
} from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-teal-900 px-5 py-8">
      <div className=" flex items-center  justify-start text-xl font-semibold text-teal-500">
        <Image src={logo} alt="" height={48} />
        <h1>Triatleta Pobre</h1>
      </div>

      <div className=" flex w-full items-center gap-2 rounded-lg border border-teal-500 px-3 py-2 shadow-sm">
        <MagnifyingGlass size={32} className="text-teal-500" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="flex-1 border-0 bg-transparent p-0 text-teal-500 placeholder:text-teal-500  focus:outline-none "
        />
      </div>

      <nav className="items-flex-start flex flex-col justify-center px-3">
        <ul className="  flex flex-col gap-8 text-lg text-teal-500">
          <li className="flex items-center gap-2">
            <ShoppingBag size={32} />
            Loja
          </li>
          <li className="flex items-center gap-2">
            <Newspaper size={32} />
            Novidades
          </li>
          <li className="flex items-center gap-2">
            <Trophy size={32} />
            Conquistas
          </li>
          <li className="flex items-center gap-2">
            <AddressBook size={32} />
            Contato
          </li>
        </ul>
      </nav>
    </aside>
  )
}
