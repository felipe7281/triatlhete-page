'use client'

import Image from 'next/image'
import logo from '../../../../public/footerImages/Logo.png'
import { MagnifyingGlass } from 'phosphor-react'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-teal-900 px-5 py-8">
      <a href="/">
        <div className=" flex items-center  justify-start text-xl font-semibold text-teal-500">
          <Image src={logo} alt="" height={48} />
          <h1>Triatleta Pobre</h1>
        </div>
      </a>

      <div className=" flex w-full items-center gap-2 rounded-lg border border-teal-500 px-3 py-2 shadow-sm">
        <MagnifyingGlass size={32} className="text-teal-500 opacity-50" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="flex-1 border-0 bg-transparent p-0 text-teal-500 placeholder:text-teal-500 placeholder:opacity-50 focus:outline-none "
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
