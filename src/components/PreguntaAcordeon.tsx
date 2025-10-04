import { ChevronArrowUpIcon } from './Icons'
import { useAccordion } from '../hooks/useAccordion'

export function PreguntaAcordeon({
  id,
  isOpen,
  openHandler,
}: {
  id: number
  isOpen: boolean
  openHandler: ({ id }: { id: number }) => void
}) {
  const { pHeight, pRef } = useAccordion()

  return (
    <div
      className={`flex flex-col rounded-2xl w-full p-5 gap-2.5 transition-all duration-400 cursor-pointer border-2 border-black/15 shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden h-[var(--h)]  ${
        isOpen ? 'bg-[#FDE4A0]' : 'bg-[#FFFCF2]'
      }`}
      style={{ ['--h' as any]: isOpen ? `${pHeight + 74 + 5}px` : '74px' }}
      onClick={() => openHandler({ id })}
    >
      <div className='flex justify-between'>
        <h4
          data-text='¿Cuánto tiempo dura el alquiler?'
          className='fredoka reborde-sm text-orange text-xl '
        >
          ¿Cuánto tiempo dura el alquiler?
        </h4>
        <ChevronArrowUpIcon
          classes={`transition-transform duration-400  ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`transition-all relative duration-400  rotate ${
          isOpen ? 'opacity-100 top-0' : 'opacity-0 -top-6.5'
        }`}
        ref={pRef}
      >
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of.Letraset
        </p>
      </div>
    </div>
  )
}
