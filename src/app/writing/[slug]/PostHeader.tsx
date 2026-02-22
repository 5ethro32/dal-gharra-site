'use client'

import ScrollReveal from '@/components/ScrollReveal'
import type { PostMeta } from '@/lib/posts'

export default function PostHeader({ post }: { post: PostMeta }) {
  return (
    <>
      <ScrollReveal>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
          {post.title}
        </h1>
        <time
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '3rem',
          }}
        >
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </ScrollReveal>
    </>
  )
}
