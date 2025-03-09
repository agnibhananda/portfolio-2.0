"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-warm-cream dark:bg-deep-teal opacity-95" />
      <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.05]" />
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-sky-blue dark:bg-sky-blue rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-sage-green dark:bg-sage-green rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-dusty-rose dark:bg-dusty-rose rounded-full blur-[180px] opacity-20 mix-blend-multiply dark:mix-blend-screen" />
      </div>
      
      {/* Clouds */}
      <Clouds />
      
      {/* Floating elements */}
      <FloatingElements />
      
      {/* Stars */}
      <Stars />
    </div>
  );
}

function Stars() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-sky-blue dark:bg-warm-cream rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + star.delay,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

function FloatingElements() {
  const elements = [
    { emoji: "🌱", size: "text-2xl", delay: 0 },
    { emoji: "🍃", size: "text-3xl", delay: 1 },
    { emoji: "🌿", size: "text-2xl", delay: 2 },
    { emoji: "🌸", size: "text-3xl", delay: 3 },
    { emoji: "🐰", size: "text-4xl", delay: 4 },
    { emoji: "🐱", size: "text-3xl", delay: 5 },
    { emoji: "🌟", size: "text-2xl", delay: 6 },
    { emoji: "🍄", size: "text-3xl", delay: 7 },
    { emoji: "🦊", size: "text-4xl", delay: 8 },
    { emoji: "🌼", size: "text-2xl", delay: 9 },
    { emoji: "🐭", size: "text-3xl", delay: 10 },
    { emoji: "🦉", size: "text-2xl", delay: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute ${element.size} opacity-70`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + element.delay,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
}

function Clouds() {
  const clouds = [
    { width: 200, height: 100, top: '10%', left: '5%', delay: 0 },
    { width: 300, height: 120, top: '15%', left: '30%', delay: 2 },
    { width: 250, height: 90, top: '8%', left: '70%', delay: 4 },
    { width: 180, height: 80, top: '25%', left: '85%', delay: 1 },
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute bg-white opacity-30 rounded-full"
          style={{
            width: cloud.width,
            height: cloud.height,
            top: cloud.top,
            left: cloud.left,
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
          animate={{
            x: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 30 + cloud.delay * 5,
            ease: "linear",
            delay: cloud.delay,
          }}
        />
      ))}
    </div>
  );
} 