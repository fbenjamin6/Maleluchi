import { InstagramIcon, WhatsAppIcon } from '../components/Icons'

export function Footer() {
  return (
    <>
      <footer className='max-w-[950px] m-auto  text-white text-[17px]'>
        <div className='flex flex-col gap-7'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2.5'>
              <h4 className='fredoka'>MENU</h4>
              <ul className='flex flex-col gap-2'>
                <li>SOBRE NOSOTROS</li>
                <li>NUESTROS JUEGOS</li>
                <li>PREGUNTAS FRECUENTES</li>
                <li>CONTACTO</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <h4 className='fredoka'>CONTACTANOS</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='flex gap-1.5 items-center'>
                  <InstagramIcon />
                  Instagram
                </li>
                <li className='flex gap-1.5 items-center'>
                  <WhatsAppIcon />
                  WhatsApp
                </li>
              </ul>
            </div>

            <img src='./src/assets/logoMaleluchi.svg' className='' alt='' />
          </div>

          <div className='w-[700px] m-auto border-b border-gray-300/15'></div>

          <div className='flex justify-between'>
            <h5>© 2025 Maleluchi</h5>

            <h5>
              Diseño y desarrollo: <span>Federico Benjamín</span>
            </h5>
          </div>
        </div>
      </footer>
    </>
  )
}
