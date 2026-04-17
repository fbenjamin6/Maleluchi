import { ChevronArrowRightIcon } from '../components/Icons'
import { TestimonioCard } from '../components/TestimonioCard'
import { testimonios } from '../utils/testimonios'
import { useCarousel } from '../hooks/useCarousel'

export function Testimonios() {
  const { carouselRef, handleScroll, firstSlide, itemsToShow, cardWidth } =
    useCarousel({ totalItems: testimonios.length })
  return (
    <section
      id='testimonios'
      className='flex flex-col gap-5 sm:gap-10 items-center'
    >
      <div className='flex flex-col items-center gap-2 sm:gap-3'>
        <h3
          data-text='TESTIMONIOS'
          className='fredoka text-orange reborde relative '
        >
          TESTIMONIOS
        </h3>
        <div className='text-center text-lg xl:text-xl'>
          <p>La experiencia de nuestros clientes en cada evento</p>
        </div>
      </div>
      <div
        className=' relative '
        style={{
          width: `${cardWidth * itemsToShow}px`,
        }}
      >
        <button
          className={` ${firstSlide ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'} transition-opacity duration-300`}
          aria-label='left'
          onClick={(e) => handleScroll(e)}
        >
          <ChevronArrowRightIcon classes='rotate-y-180 absolute top-1/2 -translate-y-[50%] -left-11 sm:-left-16' />
        </button>
        <div
          ref={carouselRef}
          className='overflow-x-scroll scroll-smooth snap-x snap-mandatory flex gap-6 pb-1.5 pt-8 ml-3'
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonios.map(({ id, nombre, data }) => {
            return (
              <TestimonioCard id={id} key={id} nombre={nombre} data={data} />
            )
          })}
        </div>
        <button
          className='cursor-pointer'
          aria-label='right'
          onClick={(e) => handleScroll(e)}
        >
          <ChevronArrowRightIcon classes='absolute top-1/2 -translate-y-[50%] -right-11 sm:-right-16' />
        </button>
      </div>
    </section>
  )
}
