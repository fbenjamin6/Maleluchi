import { useForm } from '../hooks/useForm'

export function Form() {
  const {
    handleEmail,
    message,
    status,
    btnState,
    honeyPot,
    setHoneyPot,
    nameValue,
    setNameValue,
    telValue,
    setTelValue,
    emailValue,
    setEmailValue,
    localidadValue,
    setLocalidadValue,
    consultaValue,
    setConsultaValue,
  } = useForm()

  return (
    <>
      <div
        className={`fixed bottom-1 left-3 md:left-1/2 md:-translate-x-1/2 px-4 py-2.5 rounded-lg shadow-lg text-white transition-all duration-300 transform w-max
        ${status ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
        ${status === 'success' ? 'bg-green-600/60' : ''}
        ${status === 'error' ? 'bg-red-600/60' : ''}`}
      >
        {message}
      </div>

      <form
        onSubmit={handleEmail}
        action=''
        className='flex flex-col max-md:flex-col gap-3.5'
      >
        <div className='flex max-md:flex-col max-md:gap-3.5 justify-between'>
          <div className='flex flex-col gap-3 sm:gap-4 md:w-[49.5%]'>
            <input
              onChange={(e) => setHoneyPot(e.target.value)}
              value={honeyPot}
              type='text'
              name='company'
              style={{ display: 'none' }}
            />
            <input
              onChange={(e) => setNameValue(e.target.value)}
              value={nameValue}
              type='text'
              name=''
              id=''
              placeholder='Nombre'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              required
            />
            <input
              onChange={(e) => setLocalidadValue(e.target.value)}
              value={localidadValue}
              type='text'
              name=''
              id=''
              placeholder='Localidad'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              required
            />
            <input
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              type='email'
              name=''
              id=''
              placeholder='Email'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              required
            />
            <input
              onChange={(e) => setTelValue(e.target.value)}
              value={telValue}
              type='tel'
              name=''
              id=''
              placeholder='Número de celular'
              className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 px-3 rounded-xl bg-white text-lg'
              required
            />
          </div>
          <textarea
            onChange={(e) => setConsultaValue(e.target.value)}
            value={consultaValue}
            name=''
            id=''
            placeholder='Consulta'
            className='border-2 border-neutral-950/60 shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-1.5 px-3 rounded-xl bg-white md:w-[49.5%] text-lg max-md:h-32'
            required
          ></textarea>
        </div>

        <div className='flex  items-center  justify-between'>
          <div
            className='cf-turnstile'
            data-sitekey='0x4AAAAAADI8cE3D8_nTumJb'
            data-callback='onTurnstileSuccess'
          ></div>

          <button
            type='submit'
            className={`py-1 px-4 bg-orange border-2 border-black rounded-lg ${btnState ? 'cursor-pointer ' : 'pointer-events-none grayscale-50 opacity-80'}  transition-all duration-300`}
          >
            <p
              data-text='ENVIAR'
              className='fredoka text-orange w-max reborde-sm relative text-xl'
            >
              ENVIAR
            </p>
          </button>
        </div>
      </form>
    </>
  )
}
