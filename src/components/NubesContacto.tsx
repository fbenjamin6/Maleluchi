import { ParallaxLayer } from '@react-spring/parallax'
import nubesContacto2 from '../assets/nubesContacto2.svg'
import nubesContacto1 from '../assets/nubesContacto1.svg'

export function NubesContacto({ offset }: { offset: number }) {
  return (
    <>
      <ParallaxLayer style={{ top: '0.9%' }} speed={0.07} offset={offset}>
        <img
          src='./src/assets/nubesContacto3.svg'
          alt=''
          className='lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ top: '1%', zIndex: 2 }}
        speed={0.15}
        offset={offset}
      >
        <img
          src={nubesContacto2}
          alt=''
          className='lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ top: '1.2%', zIndex: 3 }}
        speed={0.25}
        offset={offset}
      >
        <img
          src={nubesContacto1}
          alt=''
          className='lg:w-[120%] xl:w-full imgParallax'
          style={{ zIndex: 3 }}
        />
      </ParallaxLayer>
    </>
  )
}
