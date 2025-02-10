import { getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft } from 'lucide-react'

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
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#e9f5f9] via-[#f0f4f8] to-[#f7e8f6]">
      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />
      </div>

      <article className="max-w-3xl mx-auto relative">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4a6fa5] hover:text-[#9b6b9e] transition-colors group relative"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-white/20 group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </span>
            <span className="relative">
              Back to Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9b6b9e] group-hover:w-full transition-all duration-300" />
            </span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#2d5a88] mb-4">
            {post.title}
          </h1>
          <time className="text-[#4a6fa5]/60">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mt-4">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-[#e0b1cb]/10 text-[#9b6b9e]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-slate max-w-none prose-headings:font-light prose-headings:text-[#2d5a88] prose-p:text-[#4a6fa5]/80 prose-a:text-[#9b6b9e] prose-a:no-underline hover:prose-a:text-[#2d5a88] prose-strong:text-[#2d5a88] prose-code:text-[#9b6b9e] prose-pre:bg-white/50 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-white/20">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  )
}

