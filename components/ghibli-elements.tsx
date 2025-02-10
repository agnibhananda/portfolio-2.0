"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const elements = [
  { src: '/sootsprite.png', alt: 'Soot Sprite', size: 30, variant: 'float' },
  { src: '/totoro-leaf.png', alt: 'Totoro Leaf', size: 40, variant: 'spin' },
  { src: '/acorn.png', alt: 'Acorn', size: 25, variant: 'bounce' },
  { src: '/small-totoro.png', alt: 'Small Totoro', size: 35, variant: 'float' },
  { src: '/butterfly.png', alt: 'Butterfly', size: 30, variant: 'flutter' },
  { src: '/flower.png', alt: 'Flower', size: 25, variant: 'spin' },
  { src: '/sootsprite.png', alt: 'Soot Sprite', size: 20, variant: 'float' },
  { src: '/totoro-leaf.png', alt: 'Totoro Leaf', size: 35, variant: 'spin' },
  { src: '/butterfly.png', alt: 'Butterfly', size: 25, variant: 'flutter' },
  { src: '/acorn.png', alt: 'Acorn', size: 20, variant: 'bounce' },
]

const getAnimationVariant = (variant: string, i: number) => {
  const baseTransition = {
    duration: 20 + Math.random() * 10,
    repeat: Infinity,
    ease: "easeInOut",
  }

  switch (variant) {
    case 'float':
      return {
        animate: {
          y: [0, -30, 0],
          x: [0, 30, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        },
        transition: {
          ...baseTransition,
          times: [0, 0.5, 1],
          rotate: {
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear"
          }
        }
      }
    case 'spin':
      return {
        animate: {
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        },
        transition: {
          ...baseTransition,
          duration: 15 + Math.random() * 5,
        }
      }
    case 'bounce':
      return {
        animate: {
          y: [0, -50, 0],
          rotate: [-10, 10, -10],
          scale: [1, 1.1, 1],
        },
        transition: {
          ...baseTransition,
          duration: 4 + Math.random() * 2,
        }
      }
    case 'flutter':
      return {
        animate: {
          x: [0, 30, -30, 0],
          y: [0, -20, -40, -20, 0],
          rotate: [-10, 10, -10, 15, -15, -10],
          scale: [1, 1.1, 0.9, 1],
        },
        transition: {
          ...baseTransition,
          duration: 8 + Math.random() * 4,
        }
      }
    default:
      return {
        animate: {
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.8, 0.4],
        },
        transition: baseTransition
      }
  }
}

export function GhibliElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {elements.map((element, i) => {
        const animation = getAnimationVariant(element.variant, i)
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              ...animation.animate,
            }}
            transition={animation.transition}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src={element.src}
                alt={element.alt}
                width={element.size}
                height={element.size}
                className="w-auto h-auto max-w-none mix-blend-screen drop-shadow-lg"
              />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Additional decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
} 