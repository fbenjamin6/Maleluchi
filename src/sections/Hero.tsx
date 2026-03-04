import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { NubesHero } from '../components/NubesHero'
import { PhoneIcon, WhatsAppIcon } from '../components/Icons'

export function Hero({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  return (
    <>
      <section
        id='hero'
        className='flex items-center justify-center h-full  overflow-hidden relative pb-[110px] z-20'
      >
        <div className='z-20 relative flex flex-col gap-10 items-center'>
          <img
            src='./src/assets/maleluchiHero.webp'
            alt=''
            className='xl:w-[640px] sm:w-[420px] w-[300px]'
          />
          <div className='flex gap-4 sm:gap-6 lg:gap-8  justify-evenly'>
            <button
              onClick={() => parallaxScroll(2)}
              className='px-5 border-3 border-transparent  cursor-pointer transition-transform hover:scale-105 duration-300'
            >
              <p
                data-text='CATÁLOGO'
                className='fredoka text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka'
              >
                CATÁLOGO
              </p>
            </button>

            <button
              onClick={() => parallaxScroll(5)}
              className='flex items-center gap-1 md:gap-2 py-1 px-3 md:px-4 bg-[#2C8BD3]/50 border-2 md:border-3 border-white rounded-[18px] cursor-pointer transition-transform hover:scale-105 duration-300 group'
            >
              <p className=' text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka  group-hover:scale-105 transition-transform duration-300'>
                CONTACTO
              </p>
              <PhoneIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

{
  /* <button
              onClick={() => parallaxScroll(2)}
              className='px-5 border-3 border-transparent  cursor-pointer transition-transform hover:scale-105 duration-300'
            >
              <p
                data-text='CATÁLOGO'
                className='fredoka text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka'
              >
                CATÁLOGO
              </p>
            </button>

            <button
              onClick={() => parallaxScroll(5)}
              className='flex items-center gap-1 md:gap-2 py-1 px-3 md:px-4 bg-[#2C8BD3]/50 border-2 md:border-3 border-white rounded-[18px] cursor-pointer transition-transform hover:scale-105 duration-300 group'
            >
              <p className=' text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka  group-hover:scale-105 transition-transform duration-300'>
                CONTACTO
              </p>
              <PhoneIcon />
            </button> */
}
