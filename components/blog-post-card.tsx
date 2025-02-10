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
        <article className="relative p-8 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/60">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0b1cb]/0 via-[#e0b1cb]/5 to-[#e0b1cb]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <h2 className="text-2xl font-light text-[#2d5a88] group-hover:text-[#9b6b9e] transition-colors mb-2">
              {post.title}
            </h2>
            <time className="text-sm text-[#4a6fa5]/60 mb-4 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <p className="text-[#4a6fa5]/80 line-clamp-2">
              {post.excerpt}
            </p>
            
            {/* Tags */}
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
          </div>
        </article>
      </Link>
    </motion.div>
  )
} 