import { TestimonioCard } from '../components/TestimonioCard'

export function Testimonios() {
  return (
    <section id='testimonios' className='flex flex-col gap-10'>
      <div className='flex flex-col items-center'>
        <h2
          data-text='TESTIMONIOS'
          className='fredoka text-4xl text-orange reborde relative mb-3.5'
        >
          TESTIMONIOS
        </h2>
        <p>Lo que los clientes dicen de nosotros.</p>
        <p>Sus opiniones son fundamentales para ayudarnos a hacerlo bien.</p>
      </div>
      <div className='sliderWrapper'>
        <div className='slider flex gap-6 '>
          {[1, 2, 3].map((n) => {
            return <TestimonioCard id={n} key={n} />
          })}
        </div>
      </div>
    </section>
  )
}
