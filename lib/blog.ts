import path from 'path'
import fs from 'node:fs'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
  tags?: string[]
}

// This function should only be called from server components
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Ensure the directory exists
  if (!fs.existsSync(POSTS_PATH)) {
    return []
  }

  const posts = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = fs.readFileSync(
        path.join(POSTS_PATH, fileName),
        'utf8'
      )
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data, content } = matter(source)

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString(),
        content,
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// This function should only be called from server components
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      content,
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
    }
  } catch {
    return null
  }
}

