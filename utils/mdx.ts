import fs from "fs"
import path from "path"
import matter from "gray-matter"

// This file should only be imported in server components or API routes
export const getBlogPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      content,
      ...data,
    }
  })

  return posts
} 