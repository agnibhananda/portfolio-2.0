"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#8B9DAF] dark:bg-[#2D3C54] opacity-95" />

      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#B5CAD0] dark:bg-[#4A5C7B] rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#8B9DAF] dark:bg-[#2D3C54] rounded-full blur-[160px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/3 w-[750px] h-[750px] bg-[#D4D5D1] dark:bg-[#5C6F8A] rounded-full blur-[170px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#A4B7C9] dark:bg-[#3D4E6C] rounded-full blur-[140px] opacity-30 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/3 w-[650px] h-[650px] bg-[#C5D1DC] dark:bg-[#4A5C7B] rounded-full blur-[150px] opacity-30 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-1/3 left-2/3 w-[550px] h-[550px] bg-[#8B9DAF] dark:bg-[#2D3C54] rounded-full blur-[130px] opacity-30 mix-blend-multiply dark:mix-blend-screen" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.05]" />
      </motion.div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#B5CAD0] dark:bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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