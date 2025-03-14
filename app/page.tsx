"use client"
import Link from "next/link"
import { Star, Github, ExternalLink, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import Image from "next/image"
import { useState } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatePresence } from "framer-motion"

interface EducationEntry {
  institution: string
  degree: string
  period: string
  logo: string
  achievements?: string[]
}

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with Next.js, Framer Motion, and TailwindCSS. Features dark mode, smooth animations, and responsive design.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/agnibhananda/portfolio-2.0",
    live: "https://agnibha-nanda.vercel.app/",
  },
  {
    title: "Verdant",
    description: "Verdant is a comprehensive web application that helps users track, understand, and reduce their carbon footprint through personalized challenges, real-time monitoring, and community engagement.",
    tech: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/agnibhananda/verdant",
    live: "https://verdant-murex.vercel.app",
  },
  {
    title: "AI/ML Hub",
    description: "A Website for the AI/ML Hub of Jaypee Institute of Information Technology",
    tech: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/agnibhananda/ai-ml-hub-website",
    live: "https://ai-ml-hub.vercel.app/",
  }
]

const education: EducationEntry[] = [
  {
    institution: "Indian Institute of Technology, Madras",
    degree: "BS in Data Science",
    period: "2024 - 2028",
    logo: "/iitm.png",
  },
  {
    institution: "Jaypee Institute of Information Technology",
    degree: "B Tech in Computer Science and Engineering",
    period: "2024 - 2028",
    logo: "/jiit.png",
  },

]

// Reduce animation complexity by using simpler variants
const simpleAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [activeTab, setActiveTab] = useState('education')
  const [showThankYou, setShowThankYou] = useState(false)

  // Enhanced parallax effects
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 400])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const bgScale = useTransform(scrollY, [0, 500], [1, 1.2])
  const fadeOpacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0])
  const textY = useTransform(scrollY, [0, 300], [0, 100])
  const blur = useTransform(scrollY, [0, 300], [0, 10])

  // Easter egg handler
  const handleNameClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1
      if (newCount === 5) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 3000)
        return 0
      }
      return newCount
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch('https://formsubmit.co/agnibhananda@gmail.com', {
        method: 'POST',
        body: formData,
      })
      setShowThankYou(true)
      form.reset()
      setTimeout(() => setShowThankYou(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden cursor-none">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Simplified background for mobile */}
      <div className="md:hidden fixed inset-0">
        <div className="absolute inset-0 bg-warm-cream dark:bg-deep-teal opacity-95" />
        <div className="absolute inset-0 bg-[url('/totoro-pattern.png')] bg-repeat opacity-[0.03]" />
      </div>

      <nav className="fixed w-full p-4 md:p-6 flex justify-between items-center z-30 bg-gradient-to-b from-black/20 to-transparent">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={simpleAnimation}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-xl md:text-2xl font-medium text-white/90 hover:text-white transition-colors">
            Agnibha
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={simpleAnimation}
        >
          {["Blog", "About", "Projects"].map((item, i) => (
            <motion.div
              key={item}
              className="transition-colors hover:text-dusty-rose"
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
        </motion.div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            className="text-white/80 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 md:hidden"
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={simpleAnimation}
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["Blog", "About", "Projects"].map((item, i) => (
              <motion.div
                key={item}
                className="transition-colors hover:text-dusty-rose"
              >
                <Link 
                  href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
                  className="text-2xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              className="flex gap-6 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/agnibhananda", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/agnibhananda", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/agnibhananda", label: "X (Twitter)" },
                { icon: Instagram, href: "https://instagram.com/agnibha.nanda", label: "Instagram" }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors relative group"
                >
                  <span className="sr-only">{item.label}</span>
                  <item.icon className="w-6 h-6 relative z-10" />
                  <motion.div
                    className="absolute -inset-3 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`hover-${item.label}`}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </nav>

      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={simpleAnimation}
      >
        {/* Background layers with parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/bg.jpg")',
            y: y1,
            scale: bgScale,
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          style={{ y: y2 }}
        />
        
        {/* Interactive particles with mouse follow */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            filter: `blur(${blur}px)`,
            opacity: fadeOpacity
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                filter: [
                  'brightness(1) blur(0px)',
                  'brightness(1.2) blur(2px)',
                  'brightness(1) blur(0px)'
                ],
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

        {/* Content with enhanced animations */}
        <motion.div 
          className="relative z-10 text-center space-y-8 max-w-3xl mx-auto px-4"
          style={{ y: textY }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={simpleAnimation}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText 
              text="Agnibha Nanda" 
              className="text-4xl md:text-6xl lg:text-8xl font-light text-white drop-shadow-lg" 
            />
            <motion.p
              className="mt-6 text-xl text-white/70 font-light"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block hover:text-white hover:transform hover:translate-y-[-2px] transition-all duration-300">Living</span>{' '}
              <span className="inline-block hover:text-white hover:transform hover:translate-y-[-2px] transition-all duration-300">to</span>{' '}
              <span className="inline-block hover:text-white hover:transform hover:translate-y-[-2px] transition-all duration-300">tell</span>{' '}
              <span className="inline-block hover:text-white hover:transform hover:translate-y-[-2px] transition-all duration-300">stories</span>
            </motion.p>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            className="flex justify-center gap-6"
            initial="hidden"
            animate="visible"
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
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                <span className="sr-only">{item.label}</span>
                <item.icon className="w-6 h-6 relative z-10" />
                <motion.div
                  className="absolute -inset-3 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  layoutId={`hover-${item.label}`}
                />
                <motion.div
                  className="absolute -inset-3 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2 z-10"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        >
          <span className="text-xs md:text-sm font-light tracking-wider">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 md:w-6 md:h-10 border border-white/80 rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/90 rounded-full absolute top-1.5"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-teal-dark" />

      <motion.section
        id="about"
        className="py-16 md:py-32 px-4 md:px-6 relative z-20 bg-teal-dark backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        variants={simpleAnimation}
      >
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-96 h-96 bg-teal-light/30 rounded-full blur-[100px]"
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
            className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-accent-blue/30 rounded-full blur-[120px]"
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
          
          {/* Interactive sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl mb-16 text-center text-soft-white font-normal font-serif relative group"
          >
            About Me
            <motion.span
              className="absolute -right-8 -top-8 text-6xl opacity-20 group-hover:opacity-40 transition-opacity"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </motion.h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              <motion.div 
                className="space-y-6 md:col-span-2 max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={simpleAnimation}
      >
                <motion.div
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto group"
                >
                  <Image
                    src="/photo.jpg"
                    alt="Agnibha Nanda"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                <motion.div 
                  className="bg-teal-light/60 rounded-2xl p-8 backdrop-blur-sm border border-teal-light/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <p className="text-lg leading-relaxed text-soft-white font-normal font-sans relative pl-12 flex items-center">
                    <motion.div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Image
                        src="/fire.png"
                        alt="fire"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain opacity-90"
                      />
                    </motion.div>
                    <motion.span 
                      className="inline-block"
                    >
                      i sometimes like to build cool stuff.
                    </motion.span>
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Work and Education Tabs */}
            <div className="mt-16">
              <div className="flex justify-center gap-4 mb-8">
                <motion.button
                  className={`px-8 py-3 rounded-xl text-soft-white font-medium relative group transition-all duration-300 ${activeTab === 'education' ? 'bg-teal-light/70 shadow-lg' : 'hover:bg-teal-light/40'}`}
                  onClick={() => setActiveTab('education')}
                >
                  <span className="relative z-10">Education</span>
                  {activeTab === 'education' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-teal-light/70 -z-10"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
                <motion.button
                  className={`px-8 py-3 rounded-xl text-soft-white font-medium relative group transition-all duration-300 ${activeTab === 'work' ? 'bg-teal-light/70 shadow-lg' : 'hover:bg-teal-light/40'}`}
                  onClick={() => setActiveTab('work')}
                >
                  <span className="relative z-10">Work</span>
                  {activeTab === 'work' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-teal-light/70 -z-10"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'education' ? (
                  <motion.div
                    key="education"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {education.map((entry, index) => (
                      <motion.div
                        key={index}
                        className="bg-teal-light/60 rounded-xl p-6 backdrop-blur-sm border-2 border-teal-light/30 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-teal-dark flex items-center justify-center shadow-inner">
                            <Image
                              src={entry.logo}
                              alt={entry.institution}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl text-teal-light font-medium mb-1 truncate">{entry.institution}</h3>
                            <p className="text-teal-light text-sm">{entry.degree} • {entry.period}</p>
                          </div>
                        </div>
                        {entry.achievements && entry.achievements.length > 0 && (
                          <ul className="mt-4 space-y-2 text-teal-light font-normal font-sans ml-4">
                            {entry.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-light opacity-60" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="bg-teal-light/60 rounded-xl p-6 backdrop-blur-sm border-2 border-teal-light/30 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-teal-dark flex items-center justify-center shadow-inner">
                          <Image
                            src="/iitm.png"
                            alt="Work"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl text-teal-light font-medium mb-1">Software Engineer</h3>
                          <p className="text-teal-light text-sm">Company Name • 2023 - Present</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 text-teal-light font-normal font-sans ml-4">
                        <li className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-light opacity-60" />
                          <span className="text-sm">Led development of key features</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-light opacity-60" />
                          <span className="text-sm">Collaborated with cross-functional teams</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-light opacity-60" />
                          <span className="text-sm">Improved application performance</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-teal-dark" />

      <motion.section
        id="projects"
        className="py-16 md:py-32 px-4 md:px-6 relative z-20 bg-teal-dark backdrop-blur-sm -mt-24"
        initial="hidden"
        animate="visible"
        variants={simpleAnimation}
      >
        {/* Enhanced background effects */}
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <motion.div 
            className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-50, 50, -50],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Interactive sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl mb-16 text-center text-teal-light font-light tracking-tight relative group"
          >
            Projects
            <motion.span
              className="absolute -left-8 -top-8 text-6xl opacity-20 group-hover:opacity-40 transition-opacity"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative bg-teal-light/60 rounded-xl border-2 border-teal-light/30 backdrop-blur-sm overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={simpleAnimation}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#99b080]/0 via-[#99b080]/10 to-[#99b080]/0 opacity-0 group-hover:opacity-100 rounded-xl -z-10 blur-xl"
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative">
                  <motion.h3 
                    className="text-2xl mb-3 text-teal-light font-normal font-serif group-hover:text-sunshine transition-colors flex items-center gap-2"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-teal-light mb-4 font-normal font-sans"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-sm rounded-full bg-teal-dark text-teal-light border border-teal-light/30 font-medium font-sans relative group/tech"
                      >
                        {tech}
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity"
                          layoutId={`tech-hover-${tech}`}
                        />
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4"
                  >
                    {[
                      { icon: Github, href: project.github, label: "GitHub" },
                      { icon: ExternalLink, href: project.live, label: "Live Site" }
                    ].map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-light hover:text-sunshine transition-colors relative group/link"
                      >
                        <link.icon className="w-5 h-5" />
                        <motion.span
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover/link:opacity-100 transition-opacity"
                        >
                          {link.label}
                        </motion.span>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mouse follow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
            e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
          }}
        />
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-teal-dark" />

      <motion.section
        id="contact"
        className="py-16 md:py-32 px-4 md:px-6 relative z-20 bg-teal-dark backdrop-blur-sm -mt-24"
        initial="hidden"
        animate="visible"
        variants={simpleAnimation}
      >
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
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
            className="text-4xl mb-16 text-center text-teal-light font-normal font-serif relative"
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
            onSubmit={handleSubmit}
            action="https://formsubmit.co/agnibhananda@gmail.com" 
            method="POST"
            className="space-y-8"
          >
            {/* FormSubmit.co configuration fields */}
            <input type="hidden" name="_subject" value="New Portfolio Contact!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                className="space-y-2"
              >
                <label className="block text-teal-light font-medium font-sans">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-teal-dark border border-teal-light/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-light text-teal-light placeholder-teal-light font-normal font-sans"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
              >
                <label className="block text-teal-light font-medium font-sans">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-teal-dark border border-teal-light/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-light text-teal-light placeholder-teal-light font-normal font-sans"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>
            <motion.div
              className="space-y-2"
            >
              <label className="block text-teal-light font-medium font-sans">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-teal-dark border border-teal-light/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-light text-teal-light placeholder-teal-light resize-none font-normal font-sans"
                placeholder="Your message..."
              />
            </motion.div>
            <motion.div
              className="flex justify-center"
            >
              <motion.button
                type="submit"
                className="px-8 py-3 rounded-lg bg-teal-light text-teal-dark font-normal font-sans text-lg hover:bg-teal-dark transition-colors relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
            e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
          }}
        />
      </motion.section>

      {/* Seamless transition element */}
      <div className="h-24 relative z-20 bg-teal-dark" />

      <footer className="py-16 px-6 text-center relative z-20 bg-teal-dark backdrop-blur-sm -mt-24">
        <motion.div
          className="flex justify-center gap-3 mb-6"
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
          className="text-teal-light/80 font-normal font-sans"
        >
          © {new Date().getFullYear()} Agnibha Nanda
        </motion.p>
      </footer>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-8 right-8 z-50 bg-teal-light text-teal-dark px-6 py-4 rounded-lg shadow-lg border border-teal-light/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <p className="font-medium">Thanks for reaching out! I'll get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

