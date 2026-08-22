import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    return {
      meta: [
        { title: `${loaderData.title}: Willay Haider` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: `${loaderData.title}: Willay Haider` },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://willayhaider.pro/blog/${loaderData.slug}` },
      ],
      links: [
        { rel: "canonical", href: `https://willayhaider.pro/blog/${loaderData.slug}` },
      ],
    }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Link>
        <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="text-foreground/90 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
          {post.content}
        </div>
      </div>
    </div>
  )
}
