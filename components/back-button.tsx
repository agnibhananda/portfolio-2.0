"use client"

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#3D4E6C] dark:text-[#C5D1DC] hover:text-[#2D3C54] dark:hover:text-white transition-colors group relative"
      >
        <motion.span
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A4B7C9]/50 dark:bg-[#3D4E6C]/50 backdrop-blur-sm border border-[#C5D1DC]/30 dark:border-white/10"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.span>
        <span className="relative">
          Back to Home
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2D3C54] dark:bg-white/80 group-hover:w-full transition-all duration-300"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
          />
        </span>
      </Link>
    </motion.div>
  )
} 