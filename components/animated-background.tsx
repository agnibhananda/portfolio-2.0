"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#8B9DAF] dark:bg-[#2D3C54] opacity-95" />

      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#B5CAD0] dark:bg-[#4A5C7B] rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#8B9DAF] dark:bg-[#2D3C54] rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
      </motion.div>

      <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.05]" />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B5CAD0] dark:bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
} 