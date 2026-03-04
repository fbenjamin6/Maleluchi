import { useEffect, useRef, useState } from 'react'
import { ChevronArrowRightIcon } from '../components/Icons'
import { TestimonioCard } from '../components/TestimonioCard'
import { testimonios } from '../utils/testimonios'
import { useCarousel } from '../hooks/useCarousel'

export function Testimonios() {
  const { carouselRef, handleScroll, firstSlide, itemsToShow, cardWidth } =
    useCarousel()
  console.log(cardWidth, itemsToShow)
  return (
    <section id='testimonios' className='flex flex-col gap-10'>
      <div className='flex flex-col items-center'>
        <h2
          data-text='TESTIMONIOS'
          className='fredoka text-2xl sm:text-3xl xl:text-4xl text-orange reborde relative mb-3.5'
        >
          TESTIMONIOS
        </h2>
        <div className='text-center'>
          <p>Lo que los clientes dicen de nosotros.</p>
          <p>Sus opiniones son fundamentales para ayudarnos a hacerlo bien.</p>
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
          <ChevronArrowRightIcon classes='rotate-y-180 absolute top-1/2 -translate-y-[50%] -left-16' />
        </button>
        <div
          ref={carouselRef}
          className='overflow-x-scroll scroll-smooth snap-x snap-mandatory flex gap-6 pb-1.5 pt-8'
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
          <ChevronArrowRightIcon classes='absolute top-1/2 -translate-y-[50%] -right-16' />
        </button>
      </div>
    </section>
  )
}
