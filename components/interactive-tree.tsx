"use client"

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

export function InteractiveTree() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseXSpring = useSpring(0, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(0, { stiffness: 300, damping: 30 })

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    mouseXSpring.set(mousePosition.x)
    mouseYSpring.set(mousePosition.y)
  }, [mousePosition, mouseXSpring, mouseYSpring])

  const leaves = Array.from({ length: 12 }, (_, i) => {
    const x = useMotionValue(Math.random() * 100)
    const y = useMotionValue(Math.random() * 100)
    
    const rotateX = useTransform(
      mouseYSpring,
      [0, windowSize.height || 1],
      [10, -10]
    )
    const rotateY = useTransform(
      mouseXSpring,
      [0, windowSize.width || 1],
      [-10, 10]
    )

    return { x, y, rotateX, rotateY }
  })

  return (
    <div className="fixed bottom-0 right-0 w-[300px] h-[400px] pointer-events-none z-20">
      <motion.div
        className="relative w-full h-full"
        style={{
          perspective: 1000,
        }}
      >
        {leaves.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              x: leaf.x,
              y: leaf.y,
              rotateX: leaf.rotateX,
              rotateY: leaf.rotateY,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-8 h-8 bg-[url('/leaf.png')] bg-contain bg-no-repeat opacity-60"
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.7, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute bottom-0 right-0 w-[200px] h-[300px] bg-[url('/tree.png')] bg-contain bg-no-repeat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  )
}

