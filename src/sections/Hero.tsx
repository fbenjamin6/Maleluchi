import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export function Hero() {
  return (
    <>
      {/* <img
        src='./src/assets/nubesHeroMaleluchi.webp'
        alt=''
        className='absolute z-0 '
      /> */}

      <section
        className='flex items-center justify-center h-[960px] bg-lightSkyBlue overflow-hidden relative pb-[110px]'
        style={{ height: '100vh' }}
      >
        {/* <Parallax
          pages={2}
          className=''
          style={{ top: '0', left: '0', height: '100%' }}
        >
          <ParallaxLayer speed={1} offset={0}>
            <img src='./src/assets/nubesHero5.svg' alt='' className='w-full' />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={0}>
            <img src='./src/assets/nubesHero4.svg' alt='' className='w-full' />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={0}>
            <img src='./src/assets/nubesHero3.svg' alt='' className='w-full' />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={0}>
            <img src='./src/assets/nubesHero2.svg' alt='' className='w-full' />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={0}>
            <img src='./src/assets/nubesHero1.svg' alt='' className='w-full' />
          </ParallaxLayer>
        </Parallax> */}
        {/* <div className='absolute  z-0 w-full h-full bg-[url(./src/assets/nubesHeroMaleluchiDobles.webp)] bg-top-right bg-no-repeat duration-100 transition-all'></div> */}
        <div className='z-10'>
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
