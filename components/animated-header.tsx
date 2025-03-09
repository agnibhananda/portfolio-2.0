"use client"

import { motion } from 'framer-motion'

interface AnimatedHeaderProps {
  title: string
  subtitle?: string
}

export function AnimatedHeader({ title, subtitle }: AnimatedHeaderProps) {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-light text-teal-light mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p
          className="text-teal-light/60 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
} 