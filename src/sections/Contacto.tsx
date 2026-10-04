import { Form } from '../components/Form'

export function Contacto() {
  //   const body = encodeURIComponent(`
  // Nombre: ${nameValue},
  // Localidad: ${localidadValue},
  // Email: ${emailValue},
  // Teléfono: ${telValue},

  // ${consultaValue}
  // `)
  //   const mailto = `mailto:maleluchi@hotmail.com?subject=Consulta%20Maleluchi%20Web&body=${body}`

  return (
    <>
      <section className='flex gap-5 sm:gap-10 items-center flex-col  '>
        <div className='flex flex-col gap-2 sm:gap-4 items-center '>
          <h3
            data-text='CONTACTO'
            className='fredoka text-orange reborde relative '
          >
            CONTACTO
          </h3>
          <p className='text-lg xl:text-xl font-medium text-center max-sm:max-w-92'>
            Consultanos y llevá diversión a tu próximo evento
          </p>
        </div>

        <div className='flex gap-4 flex-col pb-3.5 py-3 sm:py-6 px-3 sm:px-8 shadow-[0_1px_4px_rgba(0,0,0,0.25)] rounded-[18px] w-full sm:w-6/8 backdrop-blur-xs'>
          <Form />
        </div>
      </section>
    </>
  )
}
