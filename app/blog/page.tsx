import { getBlogPosts } from '@/lib/blog'
import { BackButton } from '@/components/back-button'
import { BlogPostCard } from '@/components/blog-post-card'
import { AnimatedHeader } from '@/components/animated-header'
import { CustomCursor } from '@/components/custom-cursor'
import Image from 'next/image'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen py-24 px-6 bg-[#B5CAD0] dark:bg-[#2D3C54] cursor-none">
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A4B7C9]/5 dark:via-[#3D4E6C]/5 to-[#8B9DAF]/10 dark:to-[#4A5C7B]/10" />
        
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-24 h-24">
          <Image
            src="/butterfly.png"
            alt="Butterfly"
            width={96}
            height={96}
            className="w-full h-full object-contain opacity-30"
          />
        </div>
        <div className="absolute top-1/4 right-12 w-20 h-20">
          <Image
            src="/cat-smile.png"
            alt="Cat"
            width={80}
            height={80}
            className="w-full h-full object-contain opacity-25"
          />
        </div>
        <div className="absolute bottom-32 left-16 w-28 h-28">
          <Image
            src="/tororo-cute.png"
            alt="Totoro"
            width={112}
            height={112}
            className="w-full h-full object-contain opacity-20"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="mb-16">
          <BackButton />
        </div>

        <AnimatedHeader 
          title="Blog"
          subtitle="Thoughts, stories, and ideas."
        />

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12 relative">
            <p className="text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60">No blog posts yet.</p>
            <div className="absolute left-1/2 -translate-x-1/2 mt-8 w-32 h-32">
              <Image
                src="/forestspirit.png"
                alt="Forest Spirit"
                width={128}
                height={128}
                className="w-full h-full object-contain opacity-30"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

