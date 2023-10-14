import Main from '@/app/components/Main'
import CoverImage from '../../../public/footerImages/81_img_3285 1.png'

import 'tailwindcss/tailwind.css'

export default function Novidades() {
  return (
    <div>
      <Main title="Novidades" backgroundImage={CoverImage} imageAlt={''} />
    </div>
  )
}
