'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import PostCard from '@/components/PostCard'
import type { PostMeta } from '@/lib/posts'

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  const [activeTag, setActiveTag] = useState<string>('all')

  const filtered = activeTag === 'all'
    ? posts
    : posts.filter((p) => p.tags.includes(activeTag))

  const tags = ['all', 'ai', 'finance']

  return (
    <section style={{ padding: '6rem 0 5rem' }}>
      <div className="content-container">
        <ScrollReveal>
          <div className="section-label">Writing</div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
            Writing
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            On AI, finance, and the changing shape of banking.
          </p>
        </ScrollReveal>

        {/* Tag filter */}
        <ScrollReveal>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '0.4rem 0.85rem',
                  border: '1px solid',
                  borderColor: activeTag === tag ? 'var(--accent)' : 'var(--border)',
                  background: activeTag === tag ? 'var(--accent)' : 'transparent',
                  color: activeTag === tag ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  borderRadius: '1px',
                  transition: 'all 0.2s ease',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Post list */}
        <div>
          {filtered.map((post) => (
            <ScrollReveal key={post.slug}>
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
