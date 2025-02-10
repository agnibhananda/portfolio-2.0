"use client"

import { motion } from 'framer-motion'

interface AnimatedHeaderProps {
  title: string
  subtitle?: string
}

export function AnimatedHeader({ title, subtitle }: AnimatedHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.h1 
        className="text-4xl md:text-5xl font-light text-[#2d5a88] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-[#4a6fa5]/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
} 