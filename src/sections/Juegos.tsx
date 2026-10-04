import { useScroll } from '@react-spring/web'
import { juegos } from '../utils/juegos'
import { act, useState } from 'react'

export function Juegos({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  const [activeCard, setActiveCard] = useState<number>(0)

  function handleCardState({ id }: { id: number }) {
    if (id === activeCard) return setActiveCard(0)
    setActiveCard(id)
  }

  return (
    <section className='flex flex-col items-center gap-6 sm:gap-10'>
      <div className='flex flex-col gap-2 sm:gap-3 items-center'>
        <h3
          data-text='NUESTROS JUEGOS'
          className='fredoka  text-orange reborde relative text-center'
        >
          NUESTROS JUEGOS
        </h3>
        <p className='text-lg xl:text-xl text-center max-sm:max-w-92'>
          Opciones ideales para que todos se diviertan
        </p>
      </div>
      <div className='cardsGrid w-full'>
        {juegos.map(({ id, nombre, dimensiones, image }) => {
          return (
            <article
              key={id}
              className={`w-full bg-[url(${image})] bg-cover text-white aspect-square rounded-xl border-3 sm:border-4 border-[#FFC625] overflow-hidden flex group drop-shadow-[0px_1px_2px_rgba(0,0,0,0.60)] md:drop-shadow-[0px_2px_4px_rgba(0,0,0,0.60)]`}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleCardState({ id })}
            >
              <div
                className={`bg-black/60 flex flex-col px-1.5 sm:px-4 pt-2 pb-4  transition-all duration-400  md:group-hover:h-full h-[46px] w-full self-end md:group-hover:pt-16 xl:group-hover:pt-36 ${activeCard === id ? 'max-md:h-full max-sm:pt-2 max-md:pt-8' : 'max-md:h-[46px]'}`}
              >
                <h4 className=' text-xl sm:text-2xl font-medium mb-1 '>
                  {nombre}
                </h4>
                <div
                  className={`flex flex-col gap-1.5 -mt-0.5 opacity-0  md:group-hover:opacity-100 transition-opacity h-full justify-between duration-300
                    ${activeCard === id ? 'max-md:opacity-100' : 'max-md:opacity-0'}`}
                >
                  <p className='text-gray-300 text-base font-light max-w-32 leading-none min-h-8'>
                    {dimensiones}
                  </p>
                  <button
                    onClick={() => parallaxScroll(6)}
                    className='w-min border-2 border-[#f5b501] rounded-lg bg-[#ffdc7a]/90 text-base px-3 py-1 fredoka mt-2 cursor-pointer '
                  >
                    <p
                      data-text='CONSULTAR'
                      className='fredoka text-orange w-max reborde-sm relative text-lg'
                    >
                      CONSULTAR
                    </p>
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
