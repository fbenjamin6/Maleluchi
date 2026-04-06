import { BotonWpp } from './components/BotonWpp'
import { Estrellas } from './components/Estrellas'
import { NubesContacto } from './components/NubesContacto'
import { NubesHero } from './components/NubesHero'
import { useParallax } from './hooks/useParallax'
import { Contacto } from './sections/Contacto'
import { Eligieron } from './sections/Eligieron'
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
    contentFactorPages,
  } = useParallax()

  return (
    <>
      <Header parallaxScroll={parallaxScroll} />
      <main className='  h-screen overflow-hidden relative'>
        <Parallax
          ref={parallaxRef}
          pages={totalPages}
          className=''
          style={{ top: '0', left: '0' }}
          key={totalPages}
        >
          <ParallaxLayer offset={0.8} factor={calculateOffset(7)} speed={0}>
            <div
              aria-label='gradient'
              className='bg-linear-to-b from-[#D1E8F8] from-5% to-75% to-[#827BC9] h-full w-full -z-50 relative'
            ></div>
          </ParallaxLayer>

          {/* <ParallaxLayer
            offset={calculateOffset(6)}
            factor={pagesFactor[6]}
            speed={0}
          >
            <div className=' bg-[#827BC9] h-full w-full -z-50 relative'></div>
          </ParallaxLayer> */}

          <ParallaxLayer
            offset={calculateOffset(6)}
            factor={pagesFactor[6] + pagesFactor[7] + 0.2}
            speed={0.5}
          >
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
            <Hero parallaxScroll={parallaxScroll} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(1)}
            factor={() => contentFactorPages()}
          >
            <Eligieron />
            <Juegos parallaxScroll={parallaxScroll} />
            <Testimonios />
            <Preguntas />
            <Nosotros />
            <Contacto />
          </ParallaxLayer>

          <NubesContacto offset={calculateOffset(7) - pagesFactor[7] * 0.6} />

          <ParallaxLayer
            offset={calculateOffset(7)}
            factor={pagesFactor[7]}
            speed={0}
            style={{ zIndex: 10 }}
          >
            <Footer parallaxScroll={parallaxScroll} />
          </ParallaxLayer>
        </Parallax>
        <BotonWpp />
      </main>
    </>
  )
}

export default App
