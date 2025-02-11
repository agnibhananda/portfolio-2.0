"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState, useEffect } from "react"

export function CustomCursor() {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, input, textarea, [role="button"]') !== null
      if (isHovering !== isHoverable) {
        setIsHovering(isHoverable)
      }
    }

    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    window.addEventListener('mouseover', updateHoverState, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateHoverState)
    }
  }, [cursorX, cursorY, isHovering])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white/90 mix-blend-difference pointer-events-none z-50 will-change-transform shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            damping: 25,
            stiffness: 300,
          },
        }}
      />
      {/* Enhanced trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div
          className="w-8 h-8 -ml-2 -mt-2 rounded-full border border-white/30 backdrop-blur-[1px]"
          style={{
            scale: isHovering ? 1.5 : 1,
            opacity: 0.5,
          }}
          transition={{
            scale: {
              type: "spring",
              damping: 25,
              stiffness: 300,
            },
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5"
          animate={{
            opacity: [0.3, 0.15, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </>
  )
} 