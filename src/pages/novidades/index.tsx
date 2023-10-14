import { Sidebar } from '@/app/components/Sidebar'
import 'tailwindcss/tailwind.css'

export default function Novidades() {
  return (
    <div className="grid min-h-screen grid-cols-app bg-teal-950">
      <Sidebar />
      <main className="px-4 pb-12 pt-8">
        <h1 className="text-zinc-400">Novidades - Página em construção</h1>
      </main>
    </div>
  )
}
