"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const spirits = [
  { src: "/black.png", alt: "Spirit 1" },
  { src: "/firespirit.png", alt: "Spirit 2" },
  { src: "/castle.png", alt: "Spirit 3" },
  { src: "/firespirit.png", alt: "Spirit 4" },
  { src: "/castle.png", alt: "Spirit 5" },
  { src: "/scarecrow.png", alt: "Spirit 6" },
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
      {spirits.map((spirit, index) => {
        const positions = generateRandomPositions()
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: `${Math.random() * 80 + 10}vw`,
              y: `${Math.random() * 80 + 10}vh`,
            }}
            animate={{
              x: positions.x,
              y: positions.y,
            }}
            transition={{
              duration: 90 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1],
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={spirit.src}
                alt={spirit.alt}
                width={40}
                height={40}
                className="w-auto h-auto max-w-[40px] mix-blend-screen"
              />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

