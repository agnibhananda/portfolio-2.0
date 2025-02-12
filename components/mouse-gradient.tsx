"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x: `${x}%`, y: `${y}%` })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(255,255,255,0.1) 0%, transparent 50%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
} 