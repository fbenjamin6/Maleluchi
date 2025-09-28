export function Header() {
  return (
    <>
      <header className=' w-full h-20 fixed flex z-50 justify-center'>
        <nav className='max-w-[1000px] w-full justify-between items-center flex'>
          <img
            className='w-16'
            src='./src/assets/logoMaleluchi.png'
            alt='Logo de Maleluchi'
          />
          <ul className='flex gap-8 fredoka '>
            <li className=''>
              <a
                href='#nosotros'
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                SOBRE NOSOTROS
              </a>
            </li>
            <li className=''>
              <a
                href='#juegos'
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                JUEGOS
              </a>
            </li>
            <li className=''>
              <a
                href='#preguntas'
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                PREGUNTAS FRECUENTES
              </a>
            </li>
            <li className=''>
              <a
                href='#contacto'
                className='text-white hover:text-[#F5B501] transition-colors duration-200'
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
