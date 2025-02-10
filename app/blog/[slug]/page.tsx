import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Star } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <nav className="p-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-medium">
          Agnibha
        </Link>
        <div className="flex gap-6">
          <Link href="/blog" className="text-gold">
            Blog
          </Link>
          <Link href="/#about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-gold transition-colors">
            Projects
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-slate/60">
            <time>{post.date}</time>
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl">{post.title}</h1>
        </div>
        <div className="prose prose-slate max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  )
}

