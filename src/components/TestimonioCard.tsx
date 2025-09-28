import { QuoteIcon, StarIcon } from './Icons'

export function TestimonioCard({ id }: { id: number }) {
  return (
    <article
      key={id}
      className='flex flex-col text-center items-center justify-between bg-[#FFF5DB] h-[400px] w-[280px] px-4 pb-8 pt-11 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative'
    >
      <QuoteIcon />
      <p>
        Excelente servicio!Fue muy simple la coordinación del alquiler, no hace
        falta reservar, confirmación de buena fe y eso habla muy bien de ellos.
        Llegaron en el horario pactado, muy respetuosos en el senado y los
        juegos muy buenos . Muy buena experiencia!!
      </p>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex gap-3'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p
          data-text='Celina Blanche'
          className='text-lg reborde-sm fredoka text-orange w-max'
        >
          Celina Blanche
        </p>
      </div>
    </article>
  )
}
