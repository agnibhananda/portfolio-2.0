import { getBlogPosts } from '@/lib/blog'
import { BackButton } from '@/components/back-button'
import { BlogPostCard } from '@/components/blog-post-card'
import { AnimatedHeader } from '@/components/animated-header'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#e9f5f9] via-[#f0f4f8] to-[#f7e8f6]">
      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Back button */}
        <div className="mb-16">
          <BackButton />
        </div>

        {/* Header */}
        <AnimatedHeader 
          title="Blog"
          subtitle="Thoughts, stories, and ideas."
        />

        {/* Blog posts grid */}
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#4a6fa5]/60">No blog posts yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}

