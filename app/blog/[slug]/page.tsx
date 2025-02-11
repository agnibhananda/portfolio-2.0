import { getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogPostContent } from '@/components/blog-post-content'
import { CustomCursor } from '@/components/custom-cursor'

export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-24 px-6 relative overflow-hidden cursor-none">
      <CustomCursor />
      <BlogPostContent post={post}>
        <MDXRemote source={post.content} />
      </BlogPostContent>
    </main>
  )
}

