import { juegos } from '../utils/juegos'

export function Juegos() {
  return (
    <section className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-3 items-center'>
        <h2
          data-text='NUESTROS JUEGOS'
          className='fredoka text-4xl text-orange reborde relative'
        >
          NUESTROS JUEGOS
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>
      <div className='cardsGrid '>
        {juegos.map(({ id, nombre, dimensiones, image }) => {
          return (
            <article
              key={id}
              className={`w-full bg-[url(${image})] bg-cover text-white aspect-square rounded-xl border-4 border-[#FFC625] overflow-hidden flex group drop-shadow-[0px_2px_4px_rgba(0,0,0,0.60)]`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className='bg-black/60 flex flex-col  px-4 pt-1.5 pb-4  transition-all duration-400 group-hover:h-full h-[40px] w-full self-end group-hover:pt-24'>
                <h4 className='text-lg font-medium '>{nombre}</h4>
                <div className='flex flex-col gap-1.5 -mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <p className='text-gray-300/90 text-sm font-light max-w-20 leading-none'>
                    {dimensiones}
                  </p>
                  <button className='w-min rounded-md bg-[#FFC625] text-xs px-2 py-1 fredoka '>
                    <a href='#contacto'>CONSULTAR</a>
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
