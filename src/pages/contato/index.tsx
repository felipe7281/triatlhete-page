import { Sidebar } from '@/app/components/Sidebar'
import 'tailwindcss/tailwind.css'

export default function Contato() {
  return (
    <div className="grid min-h-screen grid-cols-app bg-teal-950">
      <Sidebar />
      <main className="px-4 pb-12 pt-8">
        <h1 className="text-zinc-400">Contato - Página em construção</h1>
      </main>
    </div>
  )
}
