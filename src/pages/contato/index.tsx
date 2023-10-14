import Main from '@/app/components/Main'
import CoverImage from '../../../public/homeImages/header.png'

import 'tailwindcss/tailwind.css'

export default function Contato() {
  return (
    <div>
      <Main
        title="Contato"
        backgroundImage={CoverImage}
        imageAlt={''}
        width={400}
      />
    </div>
  )
}
