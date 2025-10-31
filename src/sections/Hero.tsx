import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { NubesHero } from '../components/NubesHero'
import { PhoneIcon, WhatsAppIcon } from '../components/Icons'

export function Hero() {
  return (
    <>
      <section
        id='hero'
        className='flex items-center justify-center h-full  overflow-hidden relative pb-[110px] z-20'
      >
        <div className='z-20 relative flex flex-col gap-10'>
          <img
            src='./src/assets/maleluchiHero.webp'
            alt=''
            className='w-[640px]'
          />
          <div className='flex gap-8  justify-evenly'>
            <button className=''>
              <p
                data-text='CATÁLOGO'
                className='fredoka text-white w-max reborde-sm relative text-2xl fredoka'
              >
                CATÁLOGO
              </p>
            </button>

            <button className='flex items-center gap-2 py-1 px-4 bg-[#2C8BD3]/50 border-3 border-white rounded-[18px]'>
              <p className=' text-white w-max reborde-sm relative text-2xl fredoka'>
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
