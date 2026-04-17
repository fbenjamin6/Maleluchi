import { IParallax } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'

const base = [0.8, 1, 1.1, 1.25, 0.75, 0.6, 0.9, 0.5]
const baseMobile = [0.7, 0.7, 1, 1.2, 0.7, 0.63, 0.9, 0.4]
// hero, eligieron, juegos, testimonios, preguntas, nsotros, contacto, footer

export function useParallax() {
  const parallaxRef = useRef<IParallax>(null)
  const [totalPages, setTotalPages] = useState(0)
  const [pagesFactor, setPagesFactor] = useState(base)

  useEffect(() => {
    const height = window.innerHeight
    const width = window.innerWidth
    let newPagesFactor = base

    function factorHandle() {
      const baseFactors = width <= 639 ? baseMobile : base

      const scale = 950 / height

      newPagesFactor = baseFactors.map((f) => {
        if (f === 5) return 0.5
        return Number((f * scale).toFixed(2))
      })
    }

    factorHandle()

    function adjustPageFactor() {
      if (width >= 500) {
        factorHandle()
      }

      setPagesFactor(newPagesFactor)

      let newTotalPages = 0
      newPagesFactor.forEach((n) => (newTotalPages += n))
      setTotalPages(newTotalPages)
    }

    adjustPageFactor()

    window.addEventListener('resize', adjustPageFactor)
    return () => window.removeEventListener('resize', adjustPageFactor)
  }, [])

  function parallaxScroll(n: number) {
    const target = calculateOffset(n)
    parallaxRef.current?.scrollTo(target)
  }

  function calculateOffset(section: number) {
    let newOffset = 0
    pagesFactor.forEach((n, i) => {
      if (section <= i) return
      newOffset += n
    })
    return newOffset
  }

  function contentFactorPages() {
    let total = 0
    pagesFactor.forEach((n, i) => {
      if (i === 0 || i === 7) return
      total += n
    })

    return total
  }

  return {
    parallaxRef,
    totalPages,
    parallaxScroll,
    calculateOffset,
    pagesFactor,
    contentFactorPages,
  }
}
