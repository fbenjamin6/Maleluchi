import { BotonWpp } from './components/BotonWpp'
import { Estrellas } from './components/Estrellas'
import { NubesContacto } from './components/nubesContacto'
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
  } = useParallax()

  function testFactorPages() {
    let total = 0
    pagesFactor.forEach((n, i) => {
      if (i === 0 || i === 7) return
      total += n
    })

    return total
  }

  return (
    <>
      <Header parallaxScroll={parallaxScroll} />
      <main className='min-h-[900px]  h-dvh relative'>
        <Parallax
          ref={parallaxRef}
          pages={totalPages}
          className=''
          style={{ top: '0', left: '0', minHeight: '800px' }}
          key={totalPages}
        >
          <ParallaxLayer
            offset={0.8}
            factor={calculateOffset(5) - 0.295}
            speed={0}
          >
            <div
              aria-label='gradient'
              className='bg-linear-to-b from-[#D1E8F8] to-[#827BC9] h-full w-full -z-50 relative'
            ></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={calculateOffset(6)}
            factor={pagesFactor[6]}
            speed={0}
          >
            <div className=' bg-[#827BC9] h-full w-full -z-50 relative'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={calculateOffset(6)} factor={1.2} speed={0.5}>
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
            factor={() => testFactorPages()}
          >
            <Eligieron />
            <Juegos />
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

//bg-linear-to-b from-[#D1E8F8] to-[#827BC9]
