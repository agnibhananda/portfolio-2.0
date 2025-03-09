"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Don't continue with scroll progress setup if it's a mobile device
    if (isMobile) return
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Update less frequently to reduce performance impact
      if (Math.abs(latest * 100 - progress) > 2) {
        setProgress(Math.round(latest * 100))
      }
    })
    
    return () => {
      unsubscribe()
      window.removeEventListener('resize', checkMobile)
    }
  }, [scrollYProgress, progress, isMobile])
  
  // Simplified spring config for better performance
  const springConfig = {
    stiffness: 80,
    damping: 20,
    restDelta: 0.01
  }
  
  const scaleX = useSpring(scrollYProgress, springConfig)

  // Don't render on mobile
  if (isMobile) return null

  return (
    <>
      {/* Simplified progress bar - just the top bar without the circle */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-green via-sky-blue to-deep-teal origin-left z-50"
        style={{ scaleX }}
      />
    </>
  )
} 