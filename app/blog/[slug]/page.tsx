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
    <main className="min-h-screen py-24 px-6 bg-[#B5CAD0] dark:bg-[#2D3C54] relative overflow-hidden cursor-none">
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A4B7C9]/5 dark:via-[#3D4E6C]/5 to-[#8B9DAF]/10 dark:to-[#4A5C7B]/10" />
      </div>
      <BlogPostContent post={post}>
        <MDXRemote source={post.content} />
      </BlogPostContent>
    </main>
  )
}

