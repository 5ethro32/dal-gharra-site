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
        dg
      </Link>
      <ul className="nav-links">
        <li><a href="/#about">About</a></li>
        <li><Link href="/writing">Writing</Link></li>
        <li><a href="/#connect">Connect</a></li>
      </ul>
    </nav>
  )
}
