import { Estrellas } from './components/Estrellas'
import { NubesContacto } from './components/nubesContacto'
import { NubesHero } from './components/NubesHero'
import { useParallax } from './hooks/useParallax'
import { Contacto } from './sections/Contacto'
import { Footer } from './sections/Footer'
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
      <main className='min-h-[900px]  h-dvh relative'>
        <Parallax
          ref={parallaxRef}
          pages={totalPages}
          className=''
          style={{ top: '0', left: '0', minHeight: '800px' }}
          key={totalPages}
        >
          <ParallaxLayer
            offset={0.85}
            factor={calculateOffset(4) + 0.1}
            speed={0}
          >
            <div className='bg-linear-to-b from-[#D1E8F8] to-[#827BC9] h-full w-full -z-50 relative'></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(5)}
            factor={pagesFactor[5]}
            speed={0}
          >
            <div className=' bg-[#827BC9] h-full w-full -z-50 relative'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={calculateOffset(5)} factor={1} speed={0.5}>
            <div className='bg-linear-to-t from-[#2F4090] to-transparent h-full w-full -z-50 relative'></div>
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
            className='h-[300px]'
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

          <ParallaxLayer
            offset={calculateOffset(5)}
            factor={pagesFactor[5]}
            speed={0}
          >
            <Contacto />
          </ParallaxLayer>

          <NubesContacto offset={calculateOffset(6) - pagesFactor[6] * 1.5} />

          <ParallaxLayer
            offset={calculateOffset(6)}
            factor={pagesFactor[6]}
            speed={0}
            style={{ zIndex: 10 }}
          >
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  )
}

export default App

//bg-linear-to-b from-[#D1E8F8] to-[#827BC9]
