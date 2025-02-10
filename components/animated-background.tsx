"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9f5f9] via-[#f0f4f8] to-[#f7e8f6] opacity-95" />

      {/* Animated watercolor blobs */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main color blobs */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#e0b1cb] rounded-full blur-[180px] opacity-40 mix-blend-multiply" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#9f86c0] rounded-full blur-[160px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-1/4 left-1/3 w-[750px] h-[750px] bg-[#be95c4] rounded-full blur-[170px] opacity-40 mix-blend-multiply" />
        
        {/* Additional color layers */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#ffd6e0] rounded-full blur-[140px] opacity-30 mix-blend-multiply" />
        <div className="absolute bottom-1/3 right-1/3 w-[650px] h-[650px] bg-[#c1d3fe] rounded-full blur-[150px] opacity-30 mix-blend-multiply" />
        <div className="absolute top-1/3 left-2/3 w-[550px] h-[550px] bg-[#ffb3c6] rounded-full blur-[130px] opacity-30 mix-blend-multiply" />
      </motion.div>

      {/* Animated gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd6e0]/20 via-transparent to-[#c1d3fe]/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#e0b1cb]/20 via-transparent to-[#9f86c0]/20" />
      </motion.div>

      {/* Shimmer effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Sparkles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
} 