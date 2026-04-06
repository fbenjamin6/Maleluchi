import { ParallaxLayer } from '@react-spring/parallax'

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
          src='./src/assets/nubesHero5.svg'
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
          src='./src/assets/nubesHero4.svg'
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
          src='./src/assets/nubesHero3.svg'
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
          src='./src/assets/nubesHero2.svg'
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
          src='./src/assets/nubesHero1.svg'
          alt=''
          className=' lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
    </div>
  )
}
