import { act } from 'react'
import { useCarousel } from '../hooks/useCarousel'
import { eligieron } from '../utils/eligieron'

export function Eligieron() {
  const { carouselRef, cardWidth, itemsToShow, dots, dotSlide, activeDot } =
    useCarousel({ totalItems: eligieron.length })
  const arrDots = Array.from(Array(dots).keys())

  return (
    <section className='flex flex-col items-center gap-10 relative '>
      <div className='absolute left-18 sm:left-28 xl:left-5 max-lg:scale-75 '>
        <div className='rounded-full h-[21px] w-[21px] bg-[#AADAF8] -translate-x-[508%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#9cd4f7] -translate-x-[315%]' />
        <div className='rounded-full h-[41px] w-[41px] bg-[#97d3f8] -translate-x-[160%]' />
      </div>
      <div className='absolute right-18 sm:right-28 xl:right-5 bottom-0 max-lg:scale-75 '>
        <div className='rounded-full h-[41px] w-[41px] bg-[#97d3f8]/80 translate-x-[160%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#9cd4f7]/60 translate-x-[315%]' />
        <div className='rounded-full h-[21px] w-[21px] bg-[#AADAF8]/50 translate-x-[508%]' />
      </div>
      <div className='flex flex-col gap-4 items-center '>
        <h3
          data-text='ELLOS NOS ELIGIERON'
          className='fredoka  text-orange reborde relative mt-10'
        >
          ELLOS NOS ELIGIERON
        </h3>
        <p className='text-lg text-center max-sm:max-w-92'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>

      <div
        className='relative '
        style={{
          width: `${cardWidth * itemsToShow}px`,
        }}
      >
        <div
          ref={carouselRef}
          className='flex w-full h-[500px] items-center gap-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory mb-12'
          style={{ scrollbarWidth: 'none' }}
        >
          {eligieron.map(({ id, title, url, urlEsquina }) => {
            return (
              <article
                key={id}
                className=' shrink-0  w-max  text-center relative snap-start z-10 border-4 border-[#004794]/28 rounded-3xl overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
              >
                <img
                  src={url}
                  className='shrink-0 w-[350px] aspect-[3/4] object-cover relative z-10 '
                />
                <img
                  src={urlEsquina}
                  alt=''
                  className='absolute top-0 right-0 z-20 w-[80px]'
                />

                <div className='absolute bottom-0 z-30 px-5 py-3 h-2/5 flex items-end w-full text-left bg-gradient-to-t from-[#0f0f0f] to-[#737373/0]'>
                  <p
                    data-text={title}
                    className='text-xl xl:text-2xl reborde-sm xl:reborde fredoka text-orange w-max '
                  >
                    {title}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
        <div className='flex gap-6 absolute left-1/2 -translate-x-[50%] bottom-4'>
          {arrDots.map((id) => {
            return (
              <button
                id={id.toString()}
                key={id}
                className={`w-4 h-4 rounded-full cursor-pointer ${activeDot === id ? 'bg-[#5BA9FD]' : 'bg-[#BCBCBC]/90'} transition-colors duration-300 shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
                onClick={() => dotSlide({ id })}
              ></button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
