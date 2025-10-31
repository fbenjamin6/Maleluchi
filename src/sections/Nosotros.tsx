export function Nosotros() {
  return (
    <section
      id='nosotros'
      className='flex gap-10 items-center flex-col  relative'
    >
      <div className='absolute left-0 '>
        <div className='rounded-full h-[21px] w-[21px] bg-[#AADAF8] -translate-x-[508%]' />
        <div className='rounded-full h-[30px] w-[30px] bg-[#AADAF8] -translate-x-[315%]' />
        <div className='rounded-full h-[41px] w-[41px] bg-[#AADAF8] -translate-x-[160%]' />
      </div>
      <h2
        data-text='¿QUIÉNES SOMOS?'
        className='fredoka text-4xl text-orange reborde relative'
      >
        ¿QUIÉNES SOMOS?
      </h2>
      <div className='flex gap-4 flex-col'>
        <p>
          Lorem Ipsum is simply <b>dummy</b> text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown <b>printer</b> took a
          galley of type and scrambled it to make a type specimen book.
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
