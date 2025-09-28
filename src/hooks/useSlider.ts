import { useState, useRef, useEffect } from 'react'

export function useSlider() {
  const [open, isOpen] = useState<number>()
  const [pHeight, setPHeight] = useState<number>(0)
  const pRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPHeight(pRef.current?.scrollHeight as number)
  }, [])

  function openHandler({ id }: { id: number }) {
    isOpen((prevOpen) => (prevOpen === id ? 0 : id))
  }

  return { openHandler, open, pHeight, pRef }
}
