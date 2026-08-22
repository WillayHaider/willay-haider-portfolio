import { createFileRoute, Link, notFound } from '@tanstack/react-router'
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
        { title: `${loaderData.title} | Willay Haider` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://www.willayhaider.pro/blog/${loaderData.slug}` },
      ],
      links: [
        { rel: "canonical", href: `https://www.willayhaider.pro/blog/${loaderData.slug}` },
      ],
    }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/blog" className="text-sm text-primary mb-8 inline-block">
        ← Back to Resources
      </Link>
      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </div>
  )
}
