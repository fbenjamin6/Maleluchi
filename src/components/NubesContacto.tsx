import { ParallaxLayer } from '@react-spring/parallax'

export function NubesContacto({ offset }: { offset: number }) {
  return (
    <>
      {/* <div className=' h-[90dvh] relative z-10 overflow-hidden'> */}
      <ParallaxLayer style={{ top: '1%' }} speed={0.07} offset={offset}>
        <img src='./src/assets/nubesContacto3.svg' alt='' className='w-full' />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ top: '2%', zIndex: 2 }}
        speed={0.15}
        offset={offset}
      >
        <img src='./src/assets/nubesContacto2.svg' alt='' className='w-full' />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ top: '3%', zIndex: 3 }}
        speed={0.25}
        offset={offset}
      >
        <img
          src='./src/assets/nubesContacto1.svg'
          alt=''
          className='w-full'
          style={{ zIndex: 3 }}
        />
      </ParallaxLayer>
      {/* </div> */}
    </>
  )
}
