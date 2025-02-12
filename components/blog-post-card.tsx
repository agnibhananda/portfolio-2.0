"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      className="group relative bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 rounded-lg md:rounded-xl p-4 md:p-6 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 hover:bg-[#A4B7C9]/40 dark:hover:bg-[#3D4E6C]/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg md:rounded-xl"
        transition={{ duration: 1 }}
      />
      
      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-start gap-3 md:gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-light text-[#3D4E6C] dark:text-[#C5D1DC] mb-1 md:mb-2 group-hover:text-[#2D3C54] dark:group-hover:text-white transition-colors truncate">
                {post.title}
              </h2>
              <time className="text-xs md:text-sm text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <motion.div
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 flex-shrink-0"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#3D4E6C] dark:text-[#C5D1DC]" />
            </motion.div>
          </div>

          <p className="mt-3 md:mt-4 text-sm md:text-base text-[#3D4E6C]/80 dark:text-[#C5D1DC]/80 line-clamp-2">
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md md:rounded-lg bg-[#A4B7C9]/30 dark:bg-[#3D4E6C]/30 text-[#3D4E6C] dark:text-[#C5D1DC] backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </Link>
    </motion.article>
  )
} 