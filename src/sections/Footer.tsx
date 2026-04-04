import { InstagramIcon, WhatsAppIcon } from '../components/Icons'

export function Footer({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  return (
    <>
      <footer className='max-w-[1200px] m-auto h-full pb-12 px-5  content-end text-white text-[17px]'>
        <div className='flex flex-col gap-7'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2.5 max-md:hidden'>
              <h4 className='fredoka'>MENU</h4>
              <ul className='flex flex-col gap-2'>
                <li>
                  <button
                    onClick={() => parallaxScroll(1)}
                    className=' cursor-pointer hover:text-[#F5B501] transition-colors duration-300'
                  >
                    SOBRE NOSOTROS
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => parallaxScroll(2)}
                    className=' cursor-pointer hover:text-[#F5B501] transition-colors duration-300'
                  >
                    NUESTROS JUEGOS
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => parallaxScroll(4)}
                    className=' cursor-pointer hover:text-[#F5B501] transition-colors duration-300'
                  >
                    PREGUNTAS FRECUENTES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => parallaxScroll(5)}
                    className=' cursor-pointer hover:text-[#F5B501] transition-colors duration-300'
                  >
                    CONTACTO
                  </button>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <h4 className='fredoka'>CONTACTANOS</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className=''>
                  <a
                    target='_blank'
                    href='https://www.instagram.com/maleluchi_juegos'
                    className='flex gap-1.5 items-center hover:text-[#F5B501] transition-colors duration-300'
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                </li>
                <li className='flex gap-1.5 items-center'>
                  <a
                    target='_blank'
                    href='https://wa.me/1154170743?text=Hola!%20Vi%20la%20p%C3%A1gina%20de%20Maleluchi%20Juegos%20y%20quisiera%20consultar%20por%20el%20alquiler%20de%20juegos%20para%20un%20evento.%20%C2%BFPodr%C3%ADan%20enviarme%20informaci%C3%B3n%20y%20precios%3F'
                    className='flex gap-1.5 items-center hover:text-[#F5B501] transition-colors duration-300'
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <img
              src='./src/assets/logoMaleluchi.svg'
              className='max-md:w-1/5 max-sm:w-1/4'
              alt=''
            />
          </div>

          <div className='w-[700px] m-auto border-b border-gray-300/15'></div>

          <div className='flex justify-between'>
            <h5>© 2025 Maleluchi</h5>

            <h5>
              Desarrollado por: <span>Federico Benjamín</span>
            </h5>
          </div>
        </div>
      </footer>
    </>
  )
}
