import { Parallax } from '@react-spring/parallax'

export function Header({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  return (
    <>
      <header className=' w-full h-[70px] fixed flex z-50 justify-center bg-neutral-300/25'>
        <nav className='max-w-[1000px] w-full justify-between items-center flex'>
          <button className='cursor-pointer' onClick={() => parallaxScroll(0)}>
            <img
              className='w-[60px]'
              src='./src/assets/logoMaleluchi.png'
              alt='Logo de Maleluchi'
            />
          </button>
          <ul className='flex gap-8 fredoka '>
            <li className=''>
              <button
                onClick={() => parallaxScroll(2)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                JUEGOS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(4)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                PREGUNTAS FRECUENTES
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(5)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                SOBRE NOSOTROS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => parallaxScroll(6)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
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
