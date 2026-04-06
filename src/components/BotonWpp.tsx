import { WhatsappSVG } from './Icons'

export function BotonWpp() {
  return (
    <div className='absolute z-50 bottom-2 sm:bottom-6 right-2 sm:right-12'>
      <button className='wppButton bg-[#25d366] cursor-pointer rounded-full p-3 max-sm:scale-75'>
        <a
          href='https://wa.me/541154170743?text=Hola!%20Vi%20la%20p%C3%A1gina%20de%20Maleluchi%20Juegos%20y%20quisiera%20consultar%20por%20el%20alquiler%20de%20juegos%20para%20un%20evento.%20%C2%BFPodr%C3%ADan%20enviarme%20informaci%C3%B3n%20y%20precios%3F'
          target='#blank'
        >
          <WhatsappSVG />
        </a>
      </button>
    </div>
  )
}
