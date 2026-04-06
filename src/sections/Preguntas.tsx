import { PreguntaAcordeon } from '../components/PreguntaAcordeon'
import { useAccordion } from '../hooks/useAccordion'

export function Preguntas() {
  const { open, openHandler } = useAccordion()

  const preguntas = [
    {
      id: 1,
      pregunta: '¿Qué sucede en caso de lluvia?',
      respuesta:
        'Si el evento se realiza en un lugar techado no hay problema. Si por el contrario, se realiza al aire libre, la entrega no puede realizarse. Nos mantenemos en contacto hasta un día antes para confirmar la cancelación o reprogramación.',
    },
    {
      id: 2,
      pregunta: '¿Cómo es el pago?',
      respuesta:
        'Aceptamos efectivo o transferencia, se abona al momento de la entrega. No hace falta seña.',
    },
    {
      id: 3,
      pregunta: '¿Cuanto tiempo dura el alquiler?',
      respuesta: 'Lo que dure el evento en el transcurso del día!',
    },
    {
      id: 4,
      pregunta: '¿Con cuánta anticipación tengo que reservar?',
      respuesta:
        'Recomendamos reservar con al menos dos semanas de anticipación para asegurarte la disponibilidad de la fecha.',
    },
  ]

  return (
    <section className='flex  flex-col w-full gap-8 sm:gap-10'>
      <div className='flex flex-col items-center text-center'>
        <h3
          data-text='PREGUNTAS FRECUENTES'
          className='fredoka text-orange reborde relative mb-3.5'
        >
          PREGUNTAS FRECUENTES
        </h3>
        <p className='text-center max-w-92 text-lg'>
          Si tenes alguna pregunta que no se encuentra en la lista, no dudes en
          consultarnos!
        </p>
      </div>

      <div className='flex flex-col w-full items-center gap-4 sm:gap-6 '>
        {preguntas.map(({ id, pregunta, respuesta }) => {
          return (
            <PreguntaAcordeon
              id={id}
              key={id}
              isOpen={open === id}
              openHandler={openHandler}
              pregunta={pregunta}
              respuesta={respuesta}
            />
          )
        })}
      </div>
    </section>
  )
}
