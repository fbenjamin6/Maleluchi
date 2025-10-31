import { Parallax } from '@react-spring/parallax'

export function Header({
  parallaxScroll,
  calculateOffset,
}: {
  parallaxScroll: (n: number) => void
  calculateOffset: (section: number) => number
}) {
  return (
    <>
      <header className=' w-full h-[70px] fixed flex z-50 justify-center bg-neutral-300/25'>
        <nav className='max-w-[1000px] w-full justify-between items-center flex'>
          <img
            className='w-[60px]'
            src='./src/assets/logoMaleluchi.png'
            alt='Logo de Maleluchi'
          />
          <ul className='flex gap-8 fredoka '>
            <li className=''>
              <button
                onClick={() => parallaxScroll(calculateOffset(1))}
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                SOBRE NOSOTROS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(calculateOffset(2))}
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                JUEGOS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(calculateOffset(4))}
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                PREGUNTAS FRECUENTES
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(calculateOffset(5))}
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                CONTACTO
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
