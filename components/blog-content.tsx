'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { BackButton } from '@/components/back-button'
import { BlogPostCard } from '@/components/blog-post-card'
import { AnimatedHeader } from '@/components/animated-header'
import { CustomCursor } from '@/components/custom-cursor'
import { MouseGradient } from '@/components/mouse-gradient'
import { BlogControls } from '@/components/blog-controls'
import type { BlogPost } from '@/lib/blog'

interface BlogContentProps {
  posts: BlogPost[]
}

export function BlogContent({ posts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedTag, setSelectedTag] = useState('')

  // Get all unique tags from posts
  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        const matchesSearch = 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        
        const matchesTag = !selectedTag || post.tags?.includes(selectedTag)
        
        return matchesSearch && matchesTag
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
      })
  }, [posts, searchQuery, selectedTag, sortOrder])

  return (
    <main className="min-h-screen py-16 md:py-24 px-4 sm:px-6 bg-[#B5CAD0] dark:bg-[#2D3C54] cursor-none">
      <CustomCursor />
      <MouseGradient />
      
      {/* Simple background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A4B7C9]/5 dark:via-[#3D4E6C]/5 to-[#8B9DAF]/10 dark:to-[#4A5C7B]/10" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="mb-8 md:mb-16"
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
          className="mb-8 md:mb-12"
        >
          <AnimatedHeader 
            title="Blog"
            subtitle="Thoughts, stories, and ideas."
          />
        </motion.div>

        <BlogControls
          onSearch={setSearchQuery}
          onSort={setSortOrder}
          onFilterByTag={setSelectedTag}
          availableTags={availableTags}
        />

        <motion.div 
          className="grid gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filteredPosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-8 md:py-12 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm md:text-base text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {searchQuery || selectedTag ? 'No matching posts found.' : 'No blog posts yet.'}
            </motion.p>
          </motion.div>
        )}
      </div>
    </main>
  )
} 