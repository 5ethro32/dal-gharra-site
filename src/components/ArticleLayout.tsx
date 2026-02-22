'use client'

import { useEffect, useRef, ReactNode } from 'react'
import Link from 'next/link'

/* ── Theme config per article ── */
export interface ArticleTheme {
  accent: string
  accentDark: string
  accentLight: string
  border: string
  cream: string
  watermark: string
  watermarkSize?: string
}

export const THEMES = {
  green: {
    accent: '#00864F',
    accentDark: '#005C37',
    accentLight: 'rgba(0, 134, 79, 0.07)',
    border: '#e2e8e4',
    cream: '#F2F7F4',
    watermark: '\u2B21',           // hexagon
    watermarkSize: 'clamp(16rem, 50vw, 36rem)',
  },
  teal: {
    accent: '#1B4D5C',
    accentDark: '#133a47',
    accentLight: 'rgba(27, 77, 92, 0.07)',
    border: '#e2e6e8',
    cream: '#F0F4F5',
    watermark: '\u00A7',           // section sign
    watermarkSize: 'clamp(14rem, 45vw, 30rem)',
  },
  indigo: {
    accent: '#4338CA',
    accentDark: '#312e81',
    accentLight: 'rgba(67, 56, 202, 0.07)',
    border: '#e2e0ec',
    cream: '#F2F1F8',
    watermark: '\u25C7',           // diamond
    watermarkSize: 'clamp(14rem, 45vw, 30rem)',
  },
} satisfies Record<string, ArticleTheme>

/* ── Nav Item ── */
export interface NavItem {
  id: string
  label: string
}

/* ── Props ── */
interface ArticleLayoutProps {
  theme: ArticleTheme
  heroTag: string
  heroTitle: ReactNode
  heroSubtitle: string
  heroPrepared: string
  navItems: NavItem[]
  children: ReactNode
}

/* ── Component ── */
export default function ArticleLayout({
  theme,
  heroTag,
  heroTitle,
  heroSubtitle,
  heroPrepared,
  navItems,
  children,
}: ArticleLayoutProps) {
  const heroRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Apply theme CSS vars
    const root = document.documentElement
    root.style.setProperty('--a-accent', theme.accent)
    root.style.setProperty('--a-accent-dark', theme.accentDark)
    root.style.setProperty('--a-accent-light', theme.accentLight)
    root.style.setProperty('--a-border', theme.border)
    root.style.setProperty('--a-cream', theme.cream)

    return () => {
      root.style.removeProperty('--a-accent')
      root.style.removeProperty('--a-accent-dark')
      root.style.removeProperty('--a-accent-light')
      root.style.removeProperty('--a-border')
      root.style.removeProperty('--a-cream')
    }
  }, [theme])

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.a-reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let navVisible = false

    const handleScroll = () => {
      const hero = heroRef.current
      const nav = navRef.current
      const bar = progressRef.current
      if (!hero || !nav || !bar) return

      // Progress bar
      const scrollPct =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100
      bar.style.width = `${scrollPct}%`

      // Show/hide mini nav
      const hb = hero.getBoundingClientRect().bottom
      if (hb < 80 && !navVisible) {
        document.body.classList.add('nav-visible')
        navVisible = true
      } else if (hb >= 80 && navVisible) {
        document.body.classList.remove('nav-visible')
        navVisible = false
      }

      // Active nav link
      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = ''
      document.querySelectorAll<HTMLElement>('[id]').forEach((s) => {
        if (s.offsetTop <= scrollPos) current = s.id
      })
      nav.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
        link.classList.toggle(
          'active',
          link.getAttribute('data-section') === current
        )
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('nav-visible')
    }
  }, [])

  /* inline theme styles */
  const themeStyle = {
    '--a-accent': theme.accent,
    '--a-accent-dark': theme.accentDark,
    '--a-accent-light': theme.accentLight,
    '--a-border': theme.border,
    '--a-cream': theme.cream,
  } as React.CSSProperties

  return (
    <div className="article-page" style={themeStyle}>
      {/* Progress bar */}
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          background: theme.accent,
          zIndex: 100,
          width: '0%',
          transition: 'width 0.1s linear',
        }}
      />

      {/* Back to site */}
      <Link href="/writing" className="article-back-link" aria-label="Back to writing">
        <span className="article-back-arrow">&larr;</span>
        <span className="article-back-text">DG</span>
      </Link>

      {/* Mini nav */}
      <nav ref={navRef} className="article-mini-nav" aria-label="Jump navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} data-section={item.id}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="article-hero" id="hero">
        <div
          className="article-hero-watermark"
          style={{
            fontSize: theme.watermarkSize || 'clamp(16rem, 50vw, 36rem)',
            color: `${theme.accent}08`,
          }}
        >
          {theme.watermark}
        </div>
        <p className="article-hero-tag">{heroTag}</p>
        <h1 className="article-hero-title">{heroTitle}</h1>
        <p className="article-hero-subtitle">{heroSubtitle}</p>
        <p className="article-hero-prepared">{heroPrepared}</p>
        <span className="article-scroll-hint">
          scroll
          <span className="article-scroll-arrow" style={{ background: theme.accent }} />
        </span>
      </section>

      {/* Content */}
      {children}
    </div>
  )
}

/* ── Helper sub-components for article content ── */

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`a-section a-reveal ${className}`} id={id}>
      {children}
    </section>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="a-section-label">{children}</p>
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="a-section-title">{children}</h2>
}

export function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="a-divider-band a-reveal">
      <p className="a-quote">{children}</p>
    </div>
  )
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="a-highlight a-reveal">
      {children}
    </div>
  )
}

export function StatsRow({ children }: { children: ReactNode }) {
  return (
    <div className="a-stats a-reveal a-reveal-stagger">
      {children}
    </div>
  )
}

export function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="a-stat">
      <div className="a-stat-number">{number}</div>
      <div className="a-stat-label">{label}</div>
    </div>
  )
}

export function AIGrid({ children }: { children: ReactNode }) {
  return (
    <div className="a-ai-grid a-reveal a-reveal-stagger">
      {children}
    </div>
  )
}

export function AICell({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="a-ai-cell">
      <p className="a-ai-cell-label">{label}</p>
      {children}
    </div>
  )
}

export function FeatureList({ children }: { children: ReactNode }) {
  return <ul className="a-features a-reveal">{children}</ul>
}

export function Feature({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="a-feat-icon">&rarr;</span>
      <span>{children}</span>
    </li>
  )
}

export function PhaseTimeline({ children }: { children: ReactNode }) {
  return <div className="a-phase-timeline a-reveal">{children}</div>
}

export function PhaseItem({
  label,
  title,
  description,
  hollow = false,
  last = false,
}: {
  label: string
  title: string
  description: string
  hollow?: boolean
  last?: boolean
}) {
  return (
    <div className="a-phase-item">
      <div className="a-phase-marker">
        <div className={`a-phase-dot ${hollow ? 'hollow' : ''}`} />
        {!last && <div className="a-phase-line" />}
      </div>
      <div>
        <p className="a-phase-label">{label}</p>
        <p className="a-phase-title">{title}</p>
        <p className="a-phase-desc">{description}</p>
      </div>
    </div>
  )
}

export function CtaSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="a-cta-section">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </section>
  )
}
