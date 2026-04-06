import { ParallaxLayer } from '@react-spring/parallax'
import estrellasGrandesMedia from '../assets/estrellasGrandesMedia.svg'
import estrellasChicasMedia from '../assets/estrellasChicasMedia.svg'
import estrellasChicasAlta from '../assets/estrellasChicasAlta.svg'
import estrellasGrandesAlta from '../assets/estrellasGrandesAlta.svg'

export function Estrellas({
  calculateOffset,
}: {
  calculateOffset: (section: number) => number
}) {
  return (
    <>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.05}>
        <img
          src={estrellasGrandesMedia}
          alt=''
          className='opacity-10 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src={estrellasGrandesMedia}
          alt=''
          className='opacity-30 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.14}>
        <img
          src={estrellasChicasMedia}
          alt=''
          className='opacity-20 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src={estrellasChicasMedia}
          alt=''
          className='opacity-40 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(5) + 0.2} speed={-0.05}>
        <img
          src={estrellasGrandesMedia}
          alt=''
          className='opacity-60 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src={estrellasGrandesMedia}
          alt=''
          className='opacity-70 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(5) + 0.2} speed={-0.14}>
        <img
          src={estrellasChicasMedia}
          alt=''
          className='opacity-60 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src={estrellasChicasMedia}
          alt=''
          className='opacity-70 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={calculateOffset(6)} speed={-0.14}>
        <img
          src={estrellasChicasAlta}
          alt=''
          className='opacity-100 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(6)} speed={-0.14}>
        <img
          src={estrellasGrandesAlta}
          alt=''
          className='opacity-100 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
    </>
  )
}
