import Main from '@/app/components/Main'
import CoverImage from '../../../public/homeImages/swim.jpg'

import 'tailwindcss/tailwind.css'

export default function Loja() {
  return (
    <div>
      <Main
        title="Loja"
        backgroundImage={CoverImage}
        imageAlt={''}
        width={200}
      />
    </div>
  )
}
