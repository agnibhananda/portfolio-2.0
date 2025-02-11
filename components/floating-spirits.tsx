"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const spirits = [
  { src: "/black.png", alt: "Spirit 1" },
  { src: "/firespirit.png", alt: "Spirit 2" },
  { src: "/castle.png", alt: "Spirit 3" },
  { src: "/scarecrow.png", alt: "Spirit 4" },
  { src: "/tororo-cute.png", alt: "Spirit 5" },
  { src: "/fly.png", alt: "Spirit 6" },
  { src: "/kiki.png", alt: "Spirit 7" },
  { src: "/blackball.png", alt: "Spirit 8" },
]

const generateRandomPositions = () => {
  return {
    x: [
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
    ],
    y: [
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
    ],
  }
}

export function FloatingSpirits() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {spirits.slice(0, 4).map((spirit, index) => {
        const positions = generateRandomPositions()
        return (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            initial={{
              x: `${Math.random() * 80 + 10}vw`,
              y: `${Math.random() * 80 + 10}vh`,
            }}
            animate={{
              x: positions.x,
              y: positions.y,
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                scale: 2,
                opacity: 1,
              }}
              style={{
                pointerEvents: "auto",
              }}
            >
              <Image
                src={spirit.src}
                alt={spirit.alt}
                width={40}
                height={40}
                className="w-auto h-auto max-w-[40px] mix-blend-screen transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        )
      })}
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

