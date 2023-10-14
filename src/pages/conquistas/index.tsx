import Main from '@/app/components/Main'
import coverImageConq from '../../../public/homeImages/run.png'

import 'tailwindcss/tailwind.css'

export default function Conquistas() {
  return (
    <div>
      <Main
        title="Conquistas"
        backgroundImage={coverImageConq}
        imageAlt=""
        className="flex items-center justify-center"
      />
    </div>
  )
}
