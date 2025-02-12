"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'
import type { ReactNode } from 'react'

interface BlogPostContentProps {
  post: BlogPost
  children: ReactNode
}

export function BlogPostContent({ post, children }: BlogPostContentProps) {
  return (
    <div className="relative">
      <motion.article 
        className="max-w-3xl mx-auto relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#2c4a3c] hover:text-[#1a332b] dark:text-[#c1d3fe] dark:hover:text-white transition-colors group relative"
          >
            <motion.span
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e5ebe7]/80 dark:bg-black/20 backdrop-blur-sm border border-[#c5d6cc]/20 dark:border-white/10"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            <span className="relative">
              Back to Blog
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c4a3c] dark:bg-white/80"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </Link>
        </motion.div>

        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-[#1a332b] dark:text-[#be95c4] mb-4">
            {post.title}
          </h1>
          <motion.time 
            className="text-[#2c4a3c]/60 dark:text-[#c1d3fe]/60 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </motion.time>
          {post.tags && post.tags.length > 0 && (
            <motion.div 
              className="flex gap-2 mt-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {post.tags.map((tag, index) => (
                <motion.span 
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-[#e5ebe7] dark:bg-black/20 text-[#2c4a3c] dark:text-[#c1d3fe] backdrop-blur-sm border border-[#c5d6cc]/20 dark:border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.header>

        <motion.div 
          className="prose max-w-none prose-headings:font-light prose-headings:text-[#1a332b] dark:prose-headings:text-[#be95c4] prose-p:text-[#2c4a3c] dark:prose-p:text-[#c1d3fe]/80 prose-a:text-[#2c4a3c] dark:prose-a:text-[#c1d3fe] prose-a:no-underline hover:prose-a:text-[#1a332b] dark:hover:prose-a:text-white prose-strong:text-[#1a332b] dark:prose-strong:text-[#be95c4] prose-code:text-[#2c4a3c] dark:prose-code:text-[#c1d3fe] prose-pre:bg-[#e5ebe7] dark:prose-pre:bg-black/20 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-[#c5d6cc]/20 dark:prose-pre:border-white/10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {children}
        </motion.div>
      </motion.article>
    </div>
  )
} 