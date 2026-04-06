import { ParallaxLayer } from '@react-spring/parallax'
import nubesHero5 from '../assets/nubesHero5.svg'
import nubesHero4 from '../assets/nubesHero4.svg'
import nubesHero3 from '../assets/nubesHero3.svg'
import nubesHero2 from '../assets/nubesHero2.svg'
import nubesHero1 from '../assets/nubesHero1.svg'

export function NubesHero() {
  return (
    <div className=' h-[90dvh] relative z-0 overflow-hidden'>
      <ParallaxLayer
        style={{ zIndex: 1 }}
        speed={0.01}
        offset={0}
        className='top-[0%]! md:top-[0%]'
      >
        <img
          src={nubesHero5}
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ zIndex: 2 }}
        speed={0.15}
        offset={0}
        className='top-[12%]! md:top-[10%]!'
      >
        <img
          src={nubesHero4}
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ zIndex: 3 }}
        speed={0.25}
        offset={0}
        className='top-[30%]! md:top-[30%]!'
      >
        <img
          src={nubesHero3}
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
          style={{ zIndex: 3 }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ zIndex: 4 }}
        speed={0.35}
        offset={0}
        className='top-[50%]! md:top-[50%]!'
      >
        <img
          src={nubesHero2}
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ zIndex: 5 }}
        speed={0.4}
        offset={0}
        className='top-[70%]! md:top-[70%]!'
      >
        <img
          src={nubesHero1}
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
    </div>
  )
}
