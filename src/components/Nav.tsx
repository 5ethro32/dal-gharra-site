'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-name">
        Dall Gharra
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/writing">Writing</Link></li>
        <li><a href="mailto:dgharra@hotmail.co.uk">Contact</a></li>
      </ul>
    </nav>
  )
}
