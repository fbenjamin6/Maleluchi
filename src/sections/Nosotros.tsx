export function Nosotros() {
  return (
    <section
      id='nosotros'
      className='flex gap-7 md:gap-10 items-center flex-col  relative'
    >
      <div className='absolute left-0 '>
        <div className='rounded-full h-[21px] w-[21px] bg-[#6d71c9] -translate-x-[508%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#6d71c9] -translate-x-[315%]' />
        <div className='rounded-full h-[41px] w-[41px] bg-[#6d71c9] -translate-x-[160%]' />
      </div>
      <h2
        data-text='¿QUIÉNES SOMOS?'
        className='fredoka text-2xl sm:text-3xl xl:text-5xl text-orange reborde relative'
      >
        ¿QUIÉNES SOMOS?
      </h2>
      <div className='flex gap-4 flex-col text-xl '>
        <p>
          Somos una empresa familiar dedicada al alquiler de juegos para
          cumpleaños, fiestas y todo tipo de eventos. Maleluchi nació hace más
          de <b>14 años</b> con el objetivo de resolver una necesidad: llevar
          diversión, alegría y entretenimiento a cada celebración.
        </p>

        <p>
          Para nosotros, cada evento es un <b>compromiso</b>, y nos lo tomamos
          con seriedad y responsabilidad. Por eso nos destacamos por el
          excelente estado de nuestros juegos y por una{' '}
          <b>atención personalizada</b>, garantizando siempre la seguridad y la
          diversión de todos los invitados.
        </p>
      </div>
      <div className='absolute right-0 bottom-0 '>
        <div className='rounded-full h-[41px] w-[41px] bg-[#6d71c9] translate-x-[160%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#6d71c9] translate-x-[315%]' />
        <div className='rounded-full h-[21px] w-[21px] bg-[#6d71c9] translate-x-[508%]' />
      </div>
    </section>
  )
}

// Somos una empresa familiar dedicada al alquiler de juegos. Tenemos más
//           de <b>14 años de trayectoria</b> creando experiencias inolvidables con
//           nuestros juegos. Nos destacamos por el excelente estado de nuestros
//           juegos y una atención personalizada.
