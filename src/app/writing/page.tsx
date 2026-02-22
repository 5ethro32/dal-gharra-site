import { getAllPosts } from '@/lib/posts'
import WritingList from './WritingList'

export const metadata = {
  title: 'Writing',
  description: 'Dal Gharra on AI, finance, and the changing shape of banking.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return <WritingList posts={posts} />
}
