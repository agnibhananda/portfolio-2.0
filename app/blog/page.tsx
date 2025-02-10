"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { FloatingSpirits } from "@/components/floating-spirits"
import { getAllPosts } from "@/lib/blog"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <FloatingSpirits />

      <nav className="p-6 flex justify-between items-center relative z-20">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-medium">
            Agnibha
          </Link>
        </motion.div>
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="text-gold">
            Blog
          </Link>
          <Link href="/#about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-gold transition-colors">
            Projects
          </Link>
        </motion.div>
      </nav>

      <section className="py-16 px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl text-center mb-12 decorative-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog
          </motion.h1>
          <div className="space-y-12">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                className="border-b border-slate/10 pb-12 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-slate/60">
                    <time>{post.date}</time>
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-2xl hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate/80 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-gold hover:text-slate transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center relative z-20">
        <motion.div
          className="flex justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Star className="w-4 h-4 fill-gold text-gold" />
          <Star className="w-4 h-4 fill-gold text-gold" />
          <Star className="w-4 h-4 fill-gold text-gold" />
        </motion.div>
        <p className="text-slate/60">© {new Date().getFullYear()} Agnibha Nanda</p>
      </footer>
    </main>
  )
}

