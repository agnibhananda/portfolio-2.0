"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { GhibliElements } from '@/components/ghibli-elements'
import { AnimatedBackground } from '@/components/animated-background'
import type { BlogPost } from '@/lib/blog'
import type { ReactNode } from 'react'

interface BlogPostContentProps {
  post: BlogPost
  children: ReactNode
}

export function BlogPostContent({ post, children }: BlogPostContentProps) {
  return (
    <>
      <AnimatedBackground />
      <GhibliElements />

      <motion.article 
        className="max-w-3xl mx-auto relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4a6fa5] hover:text-[#9b6b9e] transition-colors group relative"
          >
            <motion.span
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-white/20"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            <span className="relative">
              Back to Blog
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9b6b9e]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-[#2d5a88] mb-4">
            {post.title}
          </h1>
          <motion.time 
            className="text-[#4a6fa5]/60 block"
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
                  className="px-2 py-1 text-xs rounded-full bg-[#e0b1cb]/10 text-[#9b6b9e] backdrop-blur-sm border border-[#9b6b9e]/10"
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

        {/* Content */}
        <motion.div 
          className="prose prose-slate max-w-none prose-headings:font-light prose-headings:text-[#2d5a88] prose-p:text-[#4a6fa5]/80 prose-a:text-[#9b6b9e] prose-a:no-underline hover:prose-a:text-[#2d5a88] prose-strong:text-[#2d5a88] prose-code:text-[#9b6b9e] prose-pre:bg-white/50 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-white/20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -left-20 top-1/4 w-12 h-12 opacity-20">
            <motion.img
              src="/totoro-leaf.png"
              alt="Decorative leaf"
              className="w-full h-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <div className="absolute -right-16 top-1/3 w-10 h-10 opacity-20">
            <motion.img
              src="/acorn.png"
              alt="Decorative acorn"
              className="w-full h-full"
              animate={{
                y: [0, -10, 0],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          {children}
        </motion.div>
      </motion.article>
    </>
  )
} 