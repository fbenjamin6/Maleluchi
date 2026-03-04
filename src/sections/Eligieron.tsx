import { act } from 'react'
import { useCarousel } from '../hooks/useCarousel'

export function Eligieron() {
  const { carouselRef, cardWidth, itemsToShow, dots, dotSlide, activeDot } =
    useCarousel()
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const arrDots = Array.from(Array(dots).keys())
  console.log(Array.from(Array(dots).keys()), arr)
  return (
    <section className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-3 items-center '>
        <h2
          data-text='ELLOS NOS ELIGIERON'
          className='fredoka text-2xl sm:text-3xl xl:text-4xl text-orange reborde relative '
        >
          ELLOS NOS ELIGIERON
        </h2>
        <p className='text-center max-sm:max-w-92'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>

      <div
        className='relative '
        style={{
          width: `${cardWidth === 0 ? '100%' : cardWidth * itemsToShow + 'px'}`,
        }}
      >
        <img
          src='./src/assets/nubeEligieron.webp'
          alt=''
          className='absolute w-[115%] -z-10 max-w-[130%] left-1/2 -translate-x-[50%] top-1/2 -translate-y-1/2 '
        />
        <div
          ref={carouselRef}
          className='flex w-full h-[500px] items-center gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory mb-6'
          style={{ scrollbarWidth: 'none' }}
        >
          {Array.from(Array(9).keys()).map((id) => {
            return (
              <article className='flex flex-col text-center items-center pb-8 pt-11  relative snap-start w-[240px] h-full aspect-[3/4] justify-center '>
                <img
                  key={id}
                  src={`./src/assets/carousel/carousel${id + 1}.webp `}
                  className='w-full rounded-3xl aspect-[3/4] border-2 border-[#004794]/28'
                ></img>
              </article>
            )
          })}
        </div>
        <div className='flex gap-6 absolute left-1/2 -translate-x-[50%] bottom-1/8'>
          {arrDots.map((id) => {
            return (
              <button
                id={id.toString()}
                key={id}
                className={`w-4 h-4 rounded-full cursor-pointer ${activeDot === id ? 'bg-[#5BA9FD]' : 'bg-[#BCBCBC]/90'} transition-colors duration-300`}
                onClick={() => dotSlide({ id })}
              ></button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
