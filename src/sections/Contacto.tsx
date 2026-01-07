export function Contacto() {
  return (
    <>
      <section className='flex gap-10 items-center flex-col  '>
        <h2
          data-text='CONTACTO'
          className='fredoka text-2xl sm:text-3xl xl:text-4xl text-orange reborde relative '
        >
          CONTACTO
        </h2>
        <div className='flex gap-4 flex-col py-6 px-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[18px] w-[400px] backdrop-blur-xs'>
          <form action='' className='flex flex-col gap-3.5'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Nombre'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white'
            />
            <input
              type='email'
              name=''
              id=''
              placeholder='Email'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white'
            />
            <input
              type='tel'
              name=''
              id=''
              placeholder='Número de celular'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white'
            />
            <textarea
              name=''
              id=''
              placeholder='Consulta'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white'
            ></textarea>
            <button
              type='submit'
              className='py-0.5 px-3 bg-orange border-2 border-black rounded-xl self-end cursor-pointer'
            >
              <p
                data-text='ENVIAR'
                className='fredoka text-orange w-max reborde-sm relative '
              >
                ENVIAR
              </p>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
