"use client"
import Link from "next/link"
import { Star } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { FloatingSpirits } from "@/components/floating-spirits"
import { InteractiveTree } from "@/components/interactive-tree"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#e9f5f9] via-[#f0f4f8] to-[#f7e8f6]">
      <FloatingSpirits />
      
      {/* Decorative Elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/totoro-pattern.png')] bg-repeat opacity-5" />
      </motion.div>

      <nav className="fixed w-full p-6 flex justify-between items-center z-30 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="text-2xl font-medium text-[#2d5a88] hover:text-[#9b6b9e] transition-colors">
            Agnibha
          </Link>
        </motion.div>
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Blog", "About", "Projects"].map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
                className="text-[#4a6fa5] hover:text-[#9b6b9e] transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9b6b9e] group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      <motion.section style={{ opacity, scale }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-fixed bg-center opacity-70 transition-all duration-500 hover:opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9f5f9]/60 via-transparent to-[#f7e8f6]/70" />
        <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4">
          <AnimatedText text="Agnibha Nanda" className="text-6xl md:text-8xl font-light text-[#2d5a88] drop-shadow-lg" />
          <motion.p
            className="text-xl md:text-2xl text-[#4a6fa5] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Studying Computer Science
          </motion.p>
          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-5 h-5 fill-[#e0b1cb] text-[#e0b1cb] drop-shadow" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-32 px-6 relative z-20 bg-gradient-to-r from-[#f7e8f6] via-[#f8f9fc] to-[#e9f5f9]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-[#e0b1cb]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 -right-20 w-60 h-60 bg-[#9f86c0]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-20, 0, -20],
              y: [20, 0, 20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl mb-12 text-center text-[#2d5a88] font-light relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
            <motion.span
              className="absolute -right-8 -top-8 text-6xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed text-[#4a6fa5] relative">
                I'm a Computer Science student.
                I like to build cool stuff.
                <motion.span
                  className="absolute -left-6 top-0 text-2xl"
                  animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌱
                </motion.span>
              </p>
              <p className="text-lg leading-relaxed text-[#4a6fa5]/90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, nesciunt non enim distinctio odio cupiditate ea maiores dignissimos.
              </p>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#e9f5f9]/40 to-[#f7e8f6]/40 shadow-lg backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <InteractiveTree />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-32 px-6 bg-gradient-to-br from-[#f7e8f6] via-[#f8f9fc] to-[#e9f5f9] relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f7e8f6]/50 to-transparent pointer-events-none"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl mb-16 text-center text-[#2d5a88] font-light relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
            <motion.span
              className="absolute -left-8 -top-8 text-6xl opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white/50 to-[#e9f5f9]/30 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-white/20 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#e0b1cb]/0 via-[#e0b1cb]/5 to-[#e0b1cb]/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
                <h3 className="text-2xl mb-3 text-[#2d5a88] font-light group-hover:text-[#9b6b9e] transition-colors">
                  Project {i}
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </h3>
                <p className="text-[#4a6fa5]/90">Description</p>
                <motion.div
                  className="absolute bottom-2 right-2 text-lg opacity-10"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  🎨
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="py-16 px-6 text-center relative z-20 bg-gradient-to-t from-[#f7e8f6] to-[#f8f9fc]">
        <motion.div
          className="flex justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className={`w-5 h-5 fill-[${i === 0 ? '#e0b1cb' : i === 1 ? '#be95c4' : '#9f86c0'}] text-[${i === 0 ? '#e0b1cb' : i === 1 ? '#be95c4' : '#9f86c0'}] drop-shadow`} />
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-[#4a6fa5]/80 font-light"
          whileHover={{ scale: 1.05 }}
        >
          © {new Date().getFullYear()} Agnibha Nanda
        </motion.p>
      </footer>
    </main>
  )
}

