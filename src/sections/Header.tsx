import { Parallax } from '@react-spring/parallax'
import { useState } from 'react'

export function Header({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleScroll(n: number) {
    parallaxScroll(n)
    setIsOpen(false)
  }
  return (
    <>
      <header
        className={`w-full h-[70px] fixed flex  z-50 justify-center bg-neutral-300/25 transition-all duration-300 ${isOpen ? 'max-lg:h-[260px] max-lg:bg-neutral-900/20' : 'max-lg:h-[70px] max-lg:bg-neutral-300/25'}`}
      >
        <nav className='max-w-[950px] xl:max-w-[1150px] w-full justify-between items-end lg:items-center flex max-lg:flex-col max-lg:justify-start  max-lg:gap-5'>
          <div className='flex max-lg:shrink-0 max-lg:h-[70px] max-lg:w-full  justify-between px-5'>
            <button className='cursor-pointer' onClick={() => handleScroll(0)}>
              <img
                className='w-[60px]'
                src='./src/assets/logoMaleluchi.png'
                alt='Logo de Maleluchi'
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='max-lg:flex flex-col gap-[6px] hidden items-center justify-center cursor-pointer'
            >
              <div className='w-9 h-[5px] bg-white rounded-full' />
              <div className='w-9 h-[5px] bg-white rounded-full' />
              <div className='w-9 h-[5px] bg-white rounded-full' />
            </button>
          </div>
          <ul
            className={`flex max-lg:flex-col max-lg:gap-3 gap-8 fredoka max-lg:text-right overflow-hidden  px-5`}
          >
            <li className=''>
              <button
                onClick={() => handleScroll(2)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                JUEGOS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => handleScroll(4)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                PREGUNTAS FRECUENTES
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => handleScroll(5)}
                className='text-white hover:text-[#F5B501] transition-colors duration-300 cursor-pointer'
              >
                SOBRE NOSOTROS
              </button>
            </li>
            <li className=''>
              <button
                onClick={() => handleScroll(6)}
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
