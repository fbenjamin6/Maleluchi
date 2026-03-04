import { IParallax } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'

export function useParallax() {
  const parallaxRef = useRef<IParallax>(null)
  const [totalPages, setTotalPages] = useState(0)
  const pagesFactor = [0.8, 0.45, 0.95, 0.9, 0.85, 1.3, 0.7, 0.6]

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
