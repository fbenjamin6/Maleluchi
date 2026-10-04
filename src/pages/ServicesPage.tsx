import {
  ConfettiSVG,
  CorazonSVG,
  EstrellaSVG,
  MaletinSVG,
  TortaSVG,
} from '../components/Icons'
import { Header } from '../sections/Header'
import { serviciosSociales } from '../utils/servicios'

export function ServiciosPage() {
  return (
    <>
      <Header />

      <main className='bg-[#DEE8FF] w-full h-full'>
        <div className='flex flex-col gap-2 sm:gap-4 items-center '>
          <h3
            data-text='NUESTROS SERVICIOS'
            className='fredoka  text-orange reborde relative mt-10 text-center'
          >
            NUESTROS SERVICIOS
          </h3>
          <p className='text-lg xl:text-xl text-center max-sm:max-w-92 max-w-[600px]'>
            Contamos con juegos y propuestas para todas las edades, ideales para
            cumpleaños, eventos corporativos, casamientos y todo tipo de
            celebraciones.
          </p>
        </div>

        <section className='flex flex-col w-full gap-4'>
          <div className='flex gap-4 items-center justify-center'>
            <div className='p-2.5 rounded-xl bg-[#BEEAFF]'>
              <ConfettiSVG />
            </div>

            <h4 className='text-[#15B3FF] font-semibold'>Eventos Sociales</h4>
          </div>

          <div className='flex gap-3.5'>
            {serviciosSociales.map(({ serv, desc, id }) => {
              return (
                <article
                  key={id}
                  className='flex flex-col bg-[#F3F3F3] px-6 py-7 gap-4 rounded-3xl'
                >
                  {serv == 'Cumpleaños' ? (
                    <TortaSVG />
                  ) : serv == 'Casamientos' ? (
                    <CorazonSVG />
                  ) : (
                    <EstrellaSVG />
                  )}
                  <h5 className='font-semibold text-2xl '>{serv}</h5>
                  <p>{desc}</p>
                  <img src='' alt='' />
                </article>
              )
            })}
          </div>
        </section>

        <section className='flex flex-col w-full gap-4'>
          <div className='flex gap-4 items-center justify-center'>
            <div className='p-2.5 rounded-xl bg-[#FEEDBE]'>
              <MaletinSVG />
            </div>

            <h4 className='text-[#F5B501] font-semibold'>
              Eventos Corporativos
            </h4>
          </div>

          <div className='flex flex-col bg-[#F3F3F3] px-6 py-7 gap-4 rounded-3xl'></div>
        </section>

        <section className='flex flex-col w-full gap-4'>
          <div className='flex gap-4 items-center justify-center'>
            <div className='p-2.5 rounded-xl bg-[#FEEDBE]'>
              <MaletinSVG />
            </div>

            <h4 className='text-[#F5B501] font-semibold'>
              Eventos Corporativos
            </h4>
          </div>

          <div className='flex gap-3.5'>
            {serviciosSociales.map(({ serv, desc, id }) => {
              return (
                <article className='flex flex-col bg-[#F3F3F3] px-6 py-7 gap-4 rounded-3xl'>
                  <img src='' alt='' />
                  <h5 className='font-semibold text-2xl '>{serv}</h5>
                  <p>{desc}</p>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
