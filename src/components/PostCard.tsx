import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/writing/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article className="card">
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
          fontWeight: 400,
          marginBottom: '0.5rem',
          color: 'var(--text)',
        }}>
          {post.title}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          marginBottom: '0.5rem',
          lineHeight: 1.5,
        }}>
          {post.description}
        </p>
        <time style={{
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </article>
    </Link>
  )
}
