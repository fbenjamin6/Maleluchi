import { ParallaxLayer } from '@react-spring/parallax'

export function Estrellas({
  calculateOffset,
}: {
  calculateOffset: (section: number) => number
}) {
  return (
    <>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.05}>
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-10 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-30 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.14}>
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-20 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-40 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(5) + 0.2} speed={-0.05}>
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-60 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-70 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(5) + 0.2} speed={-0.14}>
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-60 lg:w-[120%] xl:w-full imgParallax'
        />
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-70 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={calculateOffset(6)} speed={-0.14}>
        <img
          src='./src/assets/estrellasChicasAlta.svg'
          alt=''
          className='opacity-100 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(6)} speed={-0.14}>
        <img
          src='./src/assets/estrellasGrandesAlta.svg'
          alt=''
          className='opacity-100 lg:w-[120%] xl:w-full imgParallax'
        />
      </ParallaxLayer>
    </>
  )
}
