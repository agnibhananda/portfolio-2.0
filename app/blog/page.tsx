import { getBlogPosts } from '@/lib/blog'
import { BackButton } from '@/components/back-button'
import { BlogPostCard } from '@/components/blog-post-card'
import { AnimatedHeader } from '@/components/animated-header'
import { CustomCursor } from '@/components/custom-cursor'
import { MouseGradient } from '@/components/mouse-gradient'
import { BlogContent } from '@/components/blog-content'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return <BlogContent posts={posts} />
}

