import { IParallax } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'

export function useParallax() {
  const parallaxRef = useRef<IParallax>(null)
  const [totalPages, setTotalPages] = useState(0)
  const pagesFactor = [0.8, 0.5, 1, 1, 1]

  useEffect(() => {
    let newTotalPages = 0
    pagesFactor.forEach((n) => (newTotalPages += n))
    setTotalPages(newTotalPages)
  }, [])

  function parallaxScroll(n: number) {
    parallaxRef.current?.scrollTo(n)
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
