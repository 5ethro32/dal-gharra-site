'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // If a custom class is passed that handles its own animation (e.g. reveal-stagger-children),
  // use that instead of the default 'reveal' class
  const hasCustomReveal = className.includes('reveal-stagger')
  const classes = hasCustomReveal ? className : `reveal ${className}`.trim()

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
