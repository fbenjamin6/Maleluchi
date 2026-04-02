import { QuoteIcon, StarIcon } from './Icons'

export function TestimonioCard({
  id,
  nombre,
  data,
}: {
  id: number
  nombre: string
  data: string
}) {
  return (
    <article
      key={id}
      className='flex flex-col text-center items-center justify-between bg-[#FFF5DB] h-[450px] w-[310px] mx-0.5 px-4 pb-8 pt-11 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative aspect-[4/3] whitespace-break-spaces snap-start'
    >
      <QuoteIcon />
      <p className='text-[17px]'>{data}</p>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex gap-3'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p
          data-text={nombre}
          className='text-lg reborde-sm fredoka text-orange w-max'
        >
          {nombre}
        </p>
      </div>
    </article>
  )
}

// 280px el width
