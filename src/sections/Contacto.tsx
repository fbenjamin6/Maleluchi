import { useState } from 'react'

export function Contacto() {
  const [nameValue, setNameValue] = useState('')
  const [localidadValue, setLocalidadValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [telValue, setTelValue] = useState('')
  const [consultaValue, setConsultaValue] = useState('')

  const body = encodeURIComponent(`
Nombre: ${nameValue}, 
Localidad: ${localidadValue},
Email: ${emailValue},
Teléfono: ${telValue},

${consultaValue}
`)
  const mailto = `mailto:maleluchi@hotmail.com?subject=Consulta%20Maleluchi%20Web&body=${body}`

  return (
    <>
      <section className='flex gap-5 sm:gap-10 items-center flex-col  '>
        <h3
          data-text='CONTACTO'
          className='fredoka text-orange reborde relative '
        >
          CONTACTO
        </h3>
        <div className='flex gap-4 flex-col py-3 sm:py-6 px-3 sm:px-8 shadow-[0_1px_4px_rgba(0,0,0,0.25)] rounded-[18px] w-full sm:w-6/8 backdrop-blur-xs'>
          <form action='' className='flex max-md:flex-col gap-3.5 pb-8'>
            <div className='flex flex-col gap-3 sm:gap-4 md:w-1/2'>
              <input
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
                type='text'
                name=''
                id=''
                placeholder='Nombre'
                className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              />
              <input
                onChange={(e) => setLocalidadValue(e.target.value)}
                value={localidadValue}
                type='text'
                name=''
                id=''
                placeholder='Localidad'
                className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              />
              <input
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                type='email'
                name=''
                id=''
                placeholder='Email'
                className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              />
              <input
                onChange={(e) => setTelValue(e.target.value)}
                value={telValue}
                type='tel'
                name=''
                id=''
                placeholder='Número de celular'
                className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              />
            </div>
            <textarea
              onChange={(e) => setConsultaValue(e.target.value)}
              value={consultaValue}
              name=''
              id=''
              placeholder='Consulta'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white md:w-1/2 text-lg max-md:h-32'
            ></textarea>
            {/* <button
              // type='submit'
              className='py-0.5 px-3.5 bg-orange border-2 border-black rounded-lg self-end cursor-pointer absolute right-8 bottom-3'
            > */}
            <a
              href={mailto}
              className='py-0.5 px-3.5 bg-orange border-2 border-black rounded-lg self-end cursor-pointer absolute right-8 bottom-3'
            >
              <p
                data-text='ENVIAR'
                className='fredoka text-orange w-max reborde-sm relative text-xl'
              >
                ENVIAR
              </p>
            </a>
            {/* </button> */}
          </form>
        </div>
      </section>
    </>
  )
}
