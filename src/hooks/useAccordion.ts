import { useState, useRef, useEffect } from 'react'

export function useAccordion() {
  const [open, isOpen] = useState<number>()
  const [pHeight, setPHeight] = useState<number>(0)
  const [qHeight, setQHeight] = useState<number>(0)
  const pRef = useRef<HTMLDivElement>(null)
  const qRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPHeight(pRef.current?.scrollHeight as number)
    setQHeight(qRef.current?.scrollHeight as number)
  }, [])

  function openHandler({ id }: { id: number }) {
    isOpen((prevOpen) => (prevOpen === id ? 0 : id))
  }

  return { openHandler, open, pHeight, pRef, qRef, qHeight }
}
