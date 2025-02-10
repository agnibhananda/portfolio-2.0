"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <Link 
        href={`/blog/${post.slug}`}
        className="block group"
      >
        <article className="relative p-8 rounded-xl bg-[#A4B7C9]/50 dark:bg-[#3D4E6C]/50 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#A4B7C9]/60 dark:hover:bg-[#3D4E6C]/60">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B5CAD0]/0 via-[#B5CAD0]/5 dark:via-[#4A5C7B]/5 to-[#B5CAD0]/0 dark:to-[#4A5C7B]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <h2 className="text-2xl font-light text-[#3D4E6C] dark:text-[#C5D1DC] group-hover:text-[#2D3C54] dark:group-hover:text-white transition-colors mb-2">
              {post.title}
            </h2>
            <time className="text-sm text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60 mb-4 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <p className="text-[#3D4E6C]/80 dark:text-[#C5D1DC]/80 line-clamp-2">
              {post.excerpt}
            </p>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-[#B5CAD0]/30 dark:bg-[#4A5C7B]/30 text-[#3D4E6C] dark:text-[#C5D1DC] border border-[#C5D1DC]/30 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  )
} 