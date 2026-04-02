import { IParallax } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'

export function useParallax() {
  const parallaxRef = useRef<IParallax>(null)
  const [totalPages, setTotalPages] = useState(0)
  const pagesFactor = [0.8, 1.05, 1.2, 1.15, 0.75, 0.5, 0.9, 0.5]
  // hero, eligieron, juegos, testimonios, preguntas, nsotros, contacto, footer
  useEffect(() => {
    let newTotalPages = 0
    pagesFactor.forEach((n) => (newTotalPages += n))
    setTotalPages(newTotalPages)
  }, [])

  function parallaxScroll(n: number) {
    const target = calculateOffset(n)
    parallaxRef.current?.scrollTo(target)
    console.dir(parallaxRef)
  }

  function calculateOffset(section: number) {
    let newOffset = 0
    pagesFactor.forEach((n, i) => {
      if (section <= i) return
      newOffset += n
    })
    return newOffset
  }

  return {
    parallaxRef,
    totalPages,
    parallaxScroll,
    calculateOffset,
    pagesFactor,
  }
}
