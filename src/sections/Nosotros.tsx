export function Nosotros() {
  return (
    <section
      id='nosotros'
      className='flex gap-7 md:gap-10 items-center flex-col  relative '
    >
      <h3
        data-text='¿QUIÉNES SOMOS?'
        className='fredoka  text-orange reborde relative'
      >
        ¿QUIÉNES SOMOS?
      </h3>
      <div className='flex gap-4 flex-col  w-4/5'>
        <p className=' text-xl! max-md:text-2xl'>
          Somos una empresa familiar dedicada al alquiler de juegos para
          cumpleaños, fiestas y todo tipo de eventos. Maleluchi nació hace más
          de <b>14 años</b> con el objetivo de resolver una necesidad: llevar
          diversión, alegría y entretenimiento a cada celebración.
        </p>

        <p className='text-xl! max-md:text-2xl'>
          Para nosotros, cada evento es un <b>compromiso</b>, y nos lo tomamos
          con seriedad y responsabilidad. Por eso nos destacamos por el
          excelente estado de nuestros juegos y por una{' '}
          <b>atención personalizada</b>, garantizando siempre la seguridad y la
          diversión de todos los invitados.
        </p>
      </div>
    </section>
  )
}

// Somos una empresa familiar dedicada al alquiler de juegos. Tenemos más
//           de <b>14 años de trayectoria</b> creando experiencias inolvidables con
//           nuestros juegos. Nos destacamos por el excelente estado de nuestros
//           juegos y una atención personalizada.
