import { PreguntaAcordeon } from '../components/PreguntaAcordeon'
import { useAccordion } from '../hooks/useAccordion'

export function Preguntas() {
  const { open, openHandler } = useAccordion()

  return (
    <section className='flex  flex-col w-full gap-10'>
      <div className='flex flex-col items-center'>
        <h2
          data-text='PREGUNTAS FRECUENTES'
          className='fredoka text-2xl sm:text-3xl xl:text-4xl text-orange reborde relative mb-3.5'
        >
          PREGUNTAS FRECUENTES
        </h2>
        <p>
          Si tenes alguna pregunta que no se encuentra en la lista, no dudes en
          consultarnos!
        </p>
      </div>
      <div className='flex  flex-col  w-full gap-6 '>
        {[1, 2, 3, 4, 5].map((n) => {
          return (
            <PreguntaAcordeon
              id={n}
              key={n}
              isOpen={open === n}
              openHandler={openHandler}
            />
          )
        })}
      </div>
    </section>
  )
}
