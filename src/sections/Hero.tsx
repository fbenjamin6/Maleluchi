import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { NubesHero } from '../components/NubesHero'

export function Hero() {
  return (
    <>
      <section className='flex items-center justify-center h-full  overflow-hidden relative pb-[110px] z-20'>
        <div className='z-20 relative'>
          <img
            src='./src/assets/maleluchiHero.webp'
            alt=''
            className='w-[640px]'
          />
        </div>
      </section>
    </>
  )
}
