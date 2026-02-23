'use client'

/**
 * DG Monogram — Devanagari-inspired logo
 *
 * A stylized "DG" with a shirorekha (the continuous headline bar
 * that runs across the top of Devanagari script). The bar extends
 * beyond the letterforms, giving it that distinctive Sanskrit feel.
 *
 * The small vertical stems dropping from the bar echo how Devanagari
 * characters hang from the line rather than sitting on a baseline.
 */

interface DGLogoProps {
  size?: number
  className?: string
  color?: string
}

export default function DGLogo({ size = 28, className = '', color = 'currentColor' }: DGLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="DG — Dall Gharra"
      role="img"
    >
      {/* Shirorekha — the Devanagari headline bar */}
      <line
        x1="4"
        y1="12"
        x2="44"
        y2="12"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Small decorative endcap — left */}
      <line
        x1="4"
        y1="12"
        x2="4"
        y2="16"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* D letterform — hanging from the bar */}
      <path
        d="M12 12 L12 36 M12 12 C22 12, 26 16, 26 24 C26 32, 22 36, 12 36"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* G letterform — hanging from the bar */}
      <path
        d="M42 16 C40 12, 34 11, 31 13 C28 15, 28 20, 28 24 C28 30, 30 35, 35 36 C39 36, 42 34, 42 30 L42 24 L36 24"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Small decorative endcap — right */}
      <line
        x1="44"
        y1="12"
        x2="44"
        y2="16"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
