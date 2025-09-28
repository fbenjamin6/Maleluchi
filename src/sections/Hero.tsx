import { useEffect, useRef, useState } from 'react'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export function Hero() {
  return (
    <>
      {/* <img
        src='./src/assets/nubesHeroMaleluchi.webp'
        alt=''
        className='absolute z-0 '
      /> */}

      <section className='flex items-center justify-center h-[960px] bg-lightSkyBlue overflow-hidden relative pb-[110px]'>
        {/* <Parallax>
          <ParallaxLayer></ParallaxLayer>
        </Parallax> */}
        <div className='absolute  z-0 w-full h-full bg-[url(./src/assets/nubesHeroMaleluchiDobles.webp)] bg-top-right bg-no-repeat duration-100 transition-all'></div>
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
