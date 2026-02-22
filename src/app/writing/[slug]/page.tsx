import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'
import PostHeader from './PostHeader'
import Branch2030Article from '@/components/Branch2030Article'
import ConsumerDutyArticle from '@/components/ConsumerDutyArticle'
import AIToolsArticle from '@/components/AIToolsArticle'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

/* Rich article components — each is a standalone immersive page */
const RICH_ARTICLES: Record<string, React.ComponentType> = {
  'branch-2030': Branch2030Article,
  'consumer-duty-branch-strategy': ConsumerDutyArticle,
  'ai-tools-paying-attention': AIToolsArticle,
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const RichArticle = RICH_ARTICLES[slug]

  /* If it's a rich article, render it standalone (full-page immersive) */
  if (RichArticle) {
    return <RichArticle />
  }

  /* Otherwise fall back to standard MDX layout */
  return (
    <section style={{ padding: '6rem 0 0' }}>
      <div className="content-container">
        <Link
          href="/writing"
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '2.5rem',
          }}
        >
          &larr; Writing
        </Link>

        <PostHeader post={post} />

        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </section>
  )
}
