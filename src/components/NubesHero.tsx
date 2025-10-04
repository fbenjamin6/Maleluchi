import { ParallaxLayer } from '@react-spring/parallax'

export function NubesHero() {
  return (
    <div className=' h-[90dvh] relative z-10 overflow-hidden'>
      <ParallaxLayer style={{ top: '0%', zIndex: 1 }} speed={0.01} offset={0}>
        <img src='./src/assets/nubesHero5.svg' alt='' className='w-full' />
      </ParallaxLayer>
      <ParallaxLayer style={{ top: '10%', zIndex: 2 }} speed={0.15} offset={0}>
        <img src='./src/assets/nubesHero4.svg' alt='' className='w-full' />
      </ParallaxLayer>
      <ParallaxLayer style={{ top: '30%', zIndex: 3 }} speed={0.25} offset={0}>
        <img
          src='./src/assets/nubesHero3.svg'
          alt=''
          className='w-full'
          style={{ zIndex: 3 }}
        />
      </ParallaxLayer>
      <ParallaxLayer style={{ top: '50%', zIndex: 4 }} speed={0.35} offset={0}>
        <img src='./src/assets/nubesHero2.svg' alt='' className='w-full' />
      </ParallaxLayer>
      <ParallaxLayer style={{ top: '70%', zIndex: 5 }} speed={0.4} offset={0}>
        <img src='./src/assets/nubesHero1.svg' alt='' className='w-full' />
      </ParallaxLayer>
    </div>
  )
}
