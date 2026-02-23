'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import DGLogo from './DGLogo'

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
      <Link href="/" className="nav-name" aria-label="Dall Gharra — Home">
        <span className="nav-logo-icon">
          <DGLogo size={26} />
        </span>
        <span className="nav-logo-text">DG</span>
      </Link>
      <ul className="nav-links">
        <li><a href="/#about">About</a></li>
        <li><Link href="/writing">Writing</Link></li>
        <li><a href="/#connect">Connect</a></li>
      </ul>
    </nav>
  )
}
