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
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Link 
        href={`/blog/${post.slug}`}
        className="block group"
      >
        <article className="relative p-8 rounded-xl bg-[#A4B7C9]/50 dark:bg-[#3D4E6C]/50 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg">
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            transition={{ duration: 1 }}
          />
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#99b080]/0 via-[#99b080]/10 to-[#99b080]/0 opacity-0 group-hover:opacity-100 rounded-xl -z-10 blur-xl"
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative">
            <motion.h2 
              className="text-2xl font-light text-[#3D4E6C] dark:text-[#C5D1DC] group-hover:text-[#2D3C54] dark:group-hover:text-white transition-colors mb-2"
              layout
            >
              {post.title}
            </motion.h2>
            
            <motion.time 
              className="text-sm text-[#3D4E6C]/60 dark:text-[#C5D1DC]/60 mb-4 block"
              layout
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </motion.time>
            
            <motion.p 
              className="text-[#3D4E6C]/80 dark:text-[#C5D1DC]/80 line-clamp-2"
              layout
            >
              {post.excerpt}
            </motion.p>
            
            {post.tags && post.tags.length > 0 && (
              <motion.div 
                className="flex gap-2 mt-4 flex-wrap"
                layout
              >
                {post.tags.map(tag => (
                  <motion.span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-[#B5CAD0]/30 dark:bg-[#4A5C7B]/30 text-[#3D4E6C] dark:text-[#C5D1DC] border border-[#C5D1DC]/30 dark:border-white/10 relative group/tag"
                    whileHover={{ scale: 1.05 }}
                    layout
                  >
                    {tag}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity"
                      layoutId={`tag-hover-${tag}`}
                    />
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Read more indicator */}
            <motion.div
              className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6 text-[#3D4E6C] dark:text-[#C5D1DC]"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
} 