import { PhoneIcon } from '../components/Icons'
import heroImg from '../assets/maleluchiHero.webp'

export function Hero({
  parallaxScroll,
}: {
  parallaxScroll: (n: number) => void
}) {
  return (
    <>
      <section
        id='hero'
        className='flex items-center justify-center h-full  overflow-hidden relative pb-[110px] z-20'
      >
        <div className='z-20 relative flex flex-col gap-7 items-center'>
          <img
            src={heroImg}
            alt=''
            className='xl:w-[760px] sm:w-[620px] w-[300px]'
          />

          <h2
            id='textHero'
            data-text='CUMPLEAÑOS, CASAMIENTOS, ANIVERSARIOS, COMUNIONES Y MÁS!'
            className=' font-semibold sm:text-xl xl:text-2xl text-white tracking-widest  max-w-[640px] reborde-sm fredoka text-center'
          >
            CUMPLEAÑOS, CASAMIENTOS, ANIVERSARIOS, COMUNIONES Y MÁS!
          </h2>

          <div className='flex gap-4 sm:gap-6 lg:gap-8  justify-evenly'>
            <button
              onClick={() => parallaxScroll(2)}
              className=' border-3 border-transparent  cursor-pointer transition-transform hover:scale-105 duration-300 bg-[#55a4df]/50  py-1.5 px-3 md:px-4.5 rounded-[18px]'
            >
              <p
                data-text='CATÁLOGO'
                className='fredoka text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka '
              >
                CATÁLOGO
              </p>
            </button>

            <button
              onClick={() => parallaxScroll(6)}
              className='flex items-center gap-1 md:gap-2 py-1.5 px-3 md:px-4.5 bg-[#2C8BD3]/50 border-2 md:border-3 border-white rounded-[18px] cursor-pointer transition-transform hover:scale-105 duration-300 group'
            >
              <p className=' text-white w-max reborde-sm relative xl:text-2xl sm:text-xl  fredoka  group-hover:scale-105 transition-transform duration-300'>
                CONTACTO
              </p>
              <PhoneIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
