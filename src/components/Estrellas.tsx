import { ParallaxLayer } from '@react-spring/parallax'

export function Estrellas({
  calculateOffset,
}: {
  calculateOffset: (section: number) => number
}) {
  return (
    <>
      <ParallaxLayer offset={calculateOffset(3) + 0.2} speed={-0.05}>
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-10'
        />
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-30'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(3) + 0.2} speed={-0.14}>
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-20'
        />
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-40'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.05}>
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-60'
        />
        <img
          src='./src/assets/estrellasGrandesMedia.svg'
          alt=''
          className='opacity-70'
        />
      </ParallaxLayer>
      <ParallaxLayer offset={calculateOffset(4) + 0.2} speed={-0.14}>
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-60'
        />
        <img
          src='./src/assets/estrellasChicasMedia.svg'
          alt=''
          className='opacity-70'
        />
      </ParallaxLayer>
    </>
  )
}

{
  /* 
  <img src='./src/assets/estrellasGrandesMedia.svg' alt='' className='opacity-100' />
  <img src='./src/assets/estrellasChicasMedia.svg' alt='' className='opacity-100' />
 */
}
