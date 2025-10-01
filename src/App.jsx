import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Juegos } from './sections/Juegos'
import { Nosotros } from './sections/Nosotros'
import { Preguntas } from './sections/Preguntas'
import { Testimonios } from './sections/Testimonios'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <>
      <Header />
      <main className=' h-max'>
        <Hero />
        <div
          id='gradient'
          className='bg-lightSkyBlue flex items-center flex-col'
        >
          <Nosotros />
          <Juegos />
          <Testimonios />
          <Preguntas />
        </div>
      </main>
    </>
  )
}

export default App

//bg-linear-to-b from-[#D1E8F8] to-[#827BC9]
