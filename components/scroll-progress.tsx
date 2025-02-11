"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B5CAD0] via-[#8B9DAF] to-[#4A5C7B] origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 text-sm z-50"
        style={{
          scale: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
          })
        }}
      >
        <motion.div
          style={{
            rotate: useSpring(
              useTransform(scrollYProgress, [0, 1], [0, 360]),
              { stiffness: 100, damping: 30 }
            )
          }}
          className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/80"
        />
        <motion.span
          style={{
            opacity: useSpring(scrollYProgress, {
              stiffness: 100,
              damping: 30
            })
          }}
        >
          {Math.round(useTransform(scrollYProgress, [0, 1], [0, 100]).get())}%
        </motion.span>
      </motion.div>
    </>
  )
} 