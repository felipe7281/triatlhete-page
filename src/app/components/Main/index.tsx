import { Sidebar } from '../Sidebar'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ComponentProps } from 'react'

interface MainProps extends ComponentProps<'img'> {
  title: string
  backgroundImage: string | StaticImport
  imageAlt: string
  layout?: 'responsive' | 'fixed'
  width?: number
  height?: number
}

export default function Main({
  title,
  backgroundImage,
  imageAlt,
  width,
  height,
  layout,
}: MainProps) {
  return (
    <div className="grid min-h-screen grid-cols-app bg-teal-950">
      <Sidebar />
      <main className="flex  flex-col items-center justify-center px-4 pb-12 pt-8">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          width={width}
          height={height}
          layout={layout}
        />
        <h1 className="text-zinc-400">{title} - Página em construção</h1>
      </main>
    </div>
  )
}
