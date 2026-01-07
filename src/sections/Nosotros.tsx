export function Nosotros() {
  return (
    <section
      id='nosotros'
      className='flex gap-7 md:gap-10 items-center flex-col  relative'
    >
      <div className='absolute left-0 '>
        <div className='rounded-full h-[21px] w-[21px] bg-[#AADAF8] -translate-x-[508%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#AADAF8] -translate-x-[315%]' />
        <div className='rounded-full h-[41px] w-[41px] bg-[#AADAF8] -translate-x-[160%]' />
      </div>
      <h2
        data-text='¿QUIÉNES SOMOS?'
        className='fredoka text-2xl sm:text-3xl xl:text-4xl text-orange reborde relative'
      >
        ¿QUIÉNES SOMOS?
      </h2>
      <div className='flex gap-4 flex-col '>
        <p>
          Somos una empresa familiar dedicada al alquiler de juegos. Tenemos más
          de <b>14 años de trayectoria</b> creando experiencias inolvidables con
          nuestros juegos. Nos destacamos por el excelente estado de nuestros
          juegos y una atención personalizada.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It{' '}
          <b>was popularised</b> in the 1960s with the release of.Letraset
          sheets containing Lorem Ipsum passages, and <b>more recently</b> with
          desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
      </div>
      <div className='absolute right-0 bottom-0 '>
        <div className='rounded-full h-[41px] w-[41px] bg-[#AADAF8] translate-x-[160%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#AADAF8] translate-x-[315%]' />
        <div className='rounded-full h-[21px] w-[21px] bg-[#AADAF8] translate-x-[508%]' />
      </div>
    </section>
  )
}
