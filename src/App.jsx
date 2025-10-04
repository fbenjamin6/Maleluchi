import { Estrellas } from './components/Estrellas'
import { NubesHero } from './components/NubesHero'
import { useParallax } from './hooks/useParallax'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Juegos } from './sections/Juegos'
import { Nosotros } from './sections/Nosotros'
import { Preguntas } from './sections/Preguntas'
import { Testimonios } from './sections/Testimonios'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const {
    parallaxRef,
    totalPages,
    parallaxScroll,
    calculateOffset,
    pagesFactor,
  } = useParallax()

  return (
    <>
      <Header
        parallaxScroll={parallaxScroll}
        calculateOffset={calculateOffset}
      />
      <main className='min-h-[900px] h-dvh relative'>
        <Parallax
          ref={parallaxRef}
          pages={totalPages}
          className=''
          style={{ top: '0', left: '0', minHeight: '800px' }}
          key={totalPages}
        >
          <ParallaxLayer offset={1} factor={4} speed={0}>
            <div className='bg-linear-to-b from-[#D1E8F8] to-[#827BC9] h-full w-full -z-50 relative'></div>
          </ParallaxLayer>

          <Estrellas calculateOffset={calculateOffset} />

          <NubesHero />

          <ParallaxLayer
            offset={0}
            factor={pagesFactor[0]}
            speed={0.1}
            className='z-20'
          >
            <Hero />
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(1)}
            factor={pagesFactor[1]}
            speed={0}
          >
            <Nosotros />
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(2)}
            factor={pagesFactor[2]}
            speed={0}
          >
            <Juegos />
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(3)}
            factor={pagesFactor[3]}
            speed={0}
          >
            <Testimonios />
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(4)}
            factor={pagesFactor[4]}
            speed={0}
          >
            <Preguntas />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  )
}

export default App

//bg-linear-to-b from-[#D1E8F8] to-[#827BC9]
