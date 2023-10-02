import Image from 'next/image'
import logo from '../../../public/footerImages/logo.png'

export function Sidebar() {
  return (
    <aside className="border-r border-teal-900 px-5 py-8">
      <div className="text-green- flex items-center gap-2 text-xl font-semibold  text-teal-500">
        <Image src={logo} alt="" height={48} />
        <h1>Triatleta Pobre</h1>
      </div>
    </aside>
  )
}
