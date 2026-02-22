'use client'

import { useEffect, useRef, ReactNode } from 'react'

export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const t = Math.min(window.scrollY / (window.innerHeight * 0.6), 1)
      el.style.opacity = `${1 - t * 0.8}`
      el.style.transform = `translateY(${-t * 30}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  )
}
