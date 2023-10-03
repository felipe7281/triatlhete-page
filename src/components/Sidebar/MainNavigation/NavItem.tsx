import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a href="/loja" className="rounded hover:bg-teal-900">
      <li className="flex items-center gap-2">
        <Icon size={32} />
        {title}
      </li>
    </a>
  )
}
