"use client"
import Link from "next/link"
import { Star, Github, ExternalLink, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { FloatingSpirits } from "@/components/floating-spirits"
import { InteractiveTree } from "@/components/interactive-tree"
import { AnimatedBackground } from "@/components/animated-background"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with Next.js, Framer Motion, and TailwindCSS. Features dark mode, smooth animations, and responsive design.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/",
    live: "https://google.com",

  },

]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <FloatingSpirits />
      
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/totoro-pattern.png')] bg-repeat opacity-5" />
      </motion.div>

      <nav className="fixed w-full p-6 flex justify-between items-center z-30 bg-gradient-to-b from-black/20 to-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
        >
          <Link href="/" className="text-2xl font-medium text-white/90 hover:text-white transition-colors">
            Agnibha
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center gap-8"
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
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%", boxShadow: "0 0 10px rgba(255,255,255,0.5)" }}
                />
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </motion.div>
      </nav>

      <motion.section style={{ opacity, scale }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-500"
          style={{ backgroundImage: 'url("/bg.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        
        <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4">
          <AnimatedText text="Agnibha Nanda" className="text-6xl md:text-8xl font-light text-[#FFFFFF] drop-shadow-lg" 
          />
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/agnibhananda", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/agnibhananda", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/agnibhananda", label: "X (Twitter)" },
              { icon: Instagram, href: "https://instagram.com/agnibha.nanda", label: "Instagram" }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="sr-only">{item.label}</span>
                <item.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-[#B5CAD0] dark:bg-[#2D3C54]" />

      <motion.section
        id="about"
        className="py-32 px-6 relative z-20 bg-[#B5CAD0] dark:bg-[#2D3C54] backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.div 
            className="absolute -top-20 -left-20 w-96 h-96 bg-[#99b080]/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#739072]/20 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-30, 0, -30],
              y: [30, 0, 30],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-[#86a789]/20 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          

          <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl mb-12 text-center text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-serif relative"
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
              <p className="text-lg leading-relaxed text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-sans relative pl-16">
                I'm a Computer Science student.
                I like to build cool stuff.
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16">
                  <Image
                    src="/black.png"
                    alt="Black cat"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </p>
              <p className="text-lg leading-relaxed text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-sans">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, nesciunt non enim distinctio odio cupiditate ea maiores dignissimos.
              </p>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#A4B7C9]/40 to-[#8B9DAF]/40 shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <InteractiveTree />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  background: [
                    "linear-gradient(to top, rgba(255,255,255,0.2), transparent)",
                    "linear-gradient(to top, rgba(164,183,201,0.2), transparent)",
                    "linear-gradient(to top, rgba(255,255,255,0.2), transparent)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Add floating leaves */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 bg-[url('/leaf.png')] bg-contain bg-no-repeat opacity-40"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100],
                    x: [0, Math.random() * 50 - 25],
                    rotate: [0, 360],
                    opacity: [0.4, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-[#B5CAD0] dark:bg-[#2D3C54]" />

      <motion.section
        id="projects"
        className="py-32 px-6 relative z-20 bg-[#8B9DAF] dark:bg-[#3D4E6C] backdrop-blur-sm -mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#bacdb0]/20 rounded-full blur-[160px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#a5c0a7]/20 rounded-full blur-[180px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [50, -50, 50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent"
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03] rotate-180" />
          
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl mb-16 text-center text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-serif relative"
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
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative bg-[#A4B7C9]/60 dark:bg-[#2D3C54]/50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-[#C5D1DC]/30 dark:border-white/10 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#99b080]/0 via-[#99b080]/5 to-[#99b080]/0"
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
                <div className="relative">
                  <h3 className="text-2xl mb-3 text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-serif group-hover:text-[#2D3C54] dark:group-hover:text-white transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#99b080]/0 via-[#99b080]/10 to-[#99b080]/0 opacity-0 group-hover:opacity-100 rounded-xl -z-10"
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <p className="text-[#3D4E6C] dark:text-[#C5D1DC] mb-4 font-normal font-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm rounded-full bg-[#B5CAD0]/30 dark:bg-white/5 text-[#3D4E6C] dark:text-[#C5D1DC] border border-[#C5D1DC]/30 dark:border-white/10 font-medium font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D4E6C] dark:text-[#C5D1DC] hover:text-[#2D3C54] dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D4E6C] dark:text-[#C5D1DC] hover:text-[#2D3C54] dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-[#8B9DAF] dark:bg-[#3D4E6C]" />

      <motion.section
        id="contact"
        className="py-32 px-6 relative z-20 bg-[#A4B7C9] dark:bg-[#4A5C7B] backdrop-blur-sm -mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#99b080]/20 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [30, -30, 30],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#739072]/20 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-30, 30, -30],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl mb-16 text-center text-[#3D4E6C] dark:text-[#C5D1DC] font-normal font-serif relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
            <div className="absolute -right-16 top-0 w-32 h-32">
              <Image
                src="/tororo-standing.png"
                alt="totoro"
                width={128}
                height={128}
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </motion.h2>

          <motion.form 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-[#3D4E6C] dark:text-[#C5D1DC] font-medium font-sans">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#B5CAD0]/20 dark:bg-black/20 border border-[#8B9DAF]/30 dark:border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#8B9DAF]/50 dark:focus:ring-[#C5D1DC]/50 text-[#3D4E6C] dark:text-[#C5D1DC] placeholder-[#3D4E6C]/50 dark:placeholder-[#C5D1DC]/50 font-normal font-sans"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-[#3D4E6C] dark:text-[#C5D1DC] font-medium font-sans">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#B5CAD0]/20 dark:bg-black/20 border border-[#8B9DAF]/30 dark:border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#8B9DAF]/50 dark:focus:ring-[#C5D1DC]/50 text-[#3D4E6C] dark:text-[#C5D1DC] placeholder-[#3D4E6C]/50 dark:placeholder-[#C5D1DC]/50 font-normal font-sans"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-[#3D4E6C] dark:text-[#C5D1DC] font-medium font-sans">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#B5CAD0]/20 dark:bg-black/20 border border-[#8B9DAF]/30 dark:border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#8B9DAF]/50 dark:focus:ring-[#C5D1DC]/50 text-[#3D4E6C] dark:text-[#C5D1DC] placeholder-[#3D4E6C]/50 dark:placeholder-[#C5D1DC]/50 resize-none font-normal font-sans"
                placeholder="Your message..."
              />
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                type="submit"
                className="px-8 py-3 rounded-lg bg-[#8B9DAF] dark:bg-[#5C6F8A] text-[#2D3C54] dark:text-white font-normal font-sans text-lg hover:bg-[#B5CAD0] dark:hover:bg-[#4A5C7B] transition-colors relative group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-[#A4B7C9] dark:bg-[#4A5C7B]" />

      <footer className="py-16 px-6 text-center relative z-20 bg-[#B5CAD0] dark:bg-[#2D3C54] backdrop-blur-sm -mt-24">
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
              <Star className={`w-5 h-5 fill-[${i === 0 ? '#8B9DAF' : i === 1 ? '#A4B7C9' : '#B5CAD0'}] text-[${i === 0 ? '#8B9DAF' : i === 1 ? '#A4B7C9' : '#B5CAD0'}] drop-shadow`} />
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-[#3D4E6C]/80 dark:text-[#C5D1DC]/80 font-normal font-sans"
          whileHover={{ scale: 1.05 }}
        >
          © {new Date().getFullYear()} Agnibha Nanda
        </motion.p>
      </footer>
    </main>
  )
}

