"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-teal-light hover:text-soft-white transition-colors group relative"
    >
      <motion.span
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-gray/30 backdrop-blur-sm border border-teal-light/30"
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowLeft className="w-4 h-4" />
      </motion.span>
      <span className="relative">
        Back to Home
        <motion.span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-light"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </Link>
  )
} 