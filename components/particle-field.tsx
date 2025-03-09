"use client"

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if it's a mobile device or small screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Don't continue with particle setup if it's a mobile device
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      if (typeof window === 'undefined') return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particlesRef.current = []
      // Reduce number of particles for better performance
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Slower movement
          vy: (Math.random() - 0.5) * 0.3, // Slower movement
          size: Math.random() * 1.5 + 0.5, // Smaller particles
          color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})` // More transparent
        })
      }
    }

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Simplified mouse interaction - only apply to particles close to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 80) { // Reduced interaction radius
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * 0.1 // Reduced effect
          particle.vy -= Math.sin(angle) * 0.1 // Reduced effect
        }

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections less frequently - only between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i]
        
        // Only check every other particle to reduce calculations
        for (let j = i + 1; j < particlesRef.current.length; j += 2) {
          const otherParticle = particlesRef.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) { // Reduced connection distance
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 80)})` // More transparent
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(updateParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeCanvas)
      canvas.addEventListener('mousemove', handleMouseMove)
    }

    resizeCanvas()
    createParticles()
    updateParticles()

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeCanvas)
        window.removeEventListener('resize', checkMobile)
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  )
} 