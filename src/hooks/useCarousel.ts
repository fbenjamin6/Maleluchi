import { useRef, useState, useEffect } from 'react'

export function useCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [itemsToShow, setItemsToShow] = useState(3)
  const [firstSlide, setFirstSlide] = useState(true)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [dots, setDots] = useState(0)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth
      const newItemsToShow = width >= 1280 ? 3 : width >= 768 ? 2 : 1
      const newCardWidth = carouselRef.current
        ? carouselRef.current.scrollWidth / 9
        : 0
      setCardWidth(newCardWidth)

      if (width >= 1280) {
        setItemsToShow(newItemsToShow)
        setScrollDistance(newCardWidth * newItemsToShow)
        setDots(Math.round(9 / newItemsToShow))
      } else if (width >= 768) {
        setItemsToShow(newItemsToShow)
        setScrollDistance(newCardWidth * newItemsToShow)
        setDots(Math.round(9 / newItemsToShow))
      } else {
        setItemsToShow(newItemsToShow)
        setScrollDistance(newCardWidth * newItemsToShow)
        setDots(Math.round(9 / newItemsToShow))
      }
    }

    updateSlides()

    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  function handleScroll(e: React.MouseEvent<HTMLButtonElement>) {
    if (!carouselRef.current) return
    const carousel = carouselRef.current
    const totalWidth = carousel.scrollWidth
    const direction = e.currentTarget.getAttribute('aria-label')

    if (direction === 'right') {
      if (carousel.scrollLeft + scrollDistance >= totalWidth) {
        carousel.scrollLeft = 0
        setFirstSlide(true)
        return
      }
      setFirstSlide(false)
      carousel.scrollLeft += scrollDistance
    } else if (direction === 'left') {
      carousel.scrollLeft -= scrollDistance
      if (
        carousel.scrollLeft - scrollDistance <=
        scrollDistance / itemsToShow
      ) {
        setFirstSlide(true)
        return
      }
      setFirstSlide(false)
    }
  }

  function dotSlide({ id }: { id: number }) {
    if (!carouselRef.current) return
    const carousel = carouselRef.current
    setActiveDot(id)
    carousel.scrollLeft = id * scrollDistance
  }

  return {
    carouselRef,
    handleScroll,
    firstSlide,
    itemsToShow,
    cardWidth,
    dots,
    dotSlide,
    activeDot,
  }
}
