"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(Math.round(latest * 100))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B5CAD0] via-[#8B9DAF] to-[#4A5C7B] origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center z-50"
        style={{
          scale: useSpring(useTransform(scrollYProgress, [0, 0.1], [0, 1]), {
            stiffness: 100,
            damping: 30
          })
        }}
      >
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="6"
            strokeDasharray="283"
            style={{
              pathLength,
              rotate: -90,
              transformOrigin: "50% 50%"
            }}
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          style={{
            opacity: useSpring(scrollYProgress, {
              stiffness: 100,
              damping: 30
            })
          }}
        >
          <motion.span>
            {progress}%
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  )
} 