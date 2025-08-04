'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface CarouselProps {
  children: ReactNode[]
  className?: string
}

export const Carousel = ({ children, className = '' }: CarouselProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      updateScrollButtons()

      const handleScroll = () => updateScrollButtons()
      container.addEventListener('scroll', handleScroll)

      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = 292 + 8
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = 292 + 8
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={cn('relative', className)}>
      {canScrollLeft && (
        <Button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
        </Button>
      )}

      {canScrollRight && (
        <Button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 z-10 hidden size-12 translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-5" />
        </Button>
      )}

      <div
        ref={containerRef}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth pr-4 md:pr-0"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 snap-start">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
