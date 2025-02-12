'use client'

import { motion } from 'framer-motion'
import { BackButton } from '@/components/back-button'
import { BlogPostCard } from '@/components/blog-post-card'
import { AnimatedHeader } from '@/components/animated-header'
import { CustomCursor } from '@/components/custom-cursor'
import { MouseGradient } from '@/components/mouse-gradient'
import type { BlogPost } from '@/lib/blog'

interface BlogContentProps {
  posts: BlogPost[]
}

export function BlogContent({ posts }: BlogContentProps) {
  return (
    <main className="min-h-screen py-24 px-6 bg-[#B5CAD0] dark:bg-[#2D3C54] cursor-none">
      <CustomCursor />
      <MouseGradient />
      
      {/* Simple background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A4B7C9]/5 dark:via-[#3D4E6C]/5 to-[#8B9DAF]/10 dark:to-[#4A5C7B]/10" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedHeader 
            title="Blog"
            subtitle="Thoughts, stories, and ideas."
          />
        </motion.div>

        <motion.div 
          className="grid gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </motion.div>

        {posts.length === 0 && (
          <motion.div 
            className="text-center py-12 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              No blog posts yet.
            </motion.p>
          </motion.div>
        )}
      </div>
    </main>
  )
} 