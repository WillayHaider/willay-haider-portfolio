import { createFileRoute, Link } from '@tanstack/react-router'
import { BLOG_POSTS } from '../blog-posts'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: "Cold Calling & B2B Lead Generation Blog | Willay Haider" },
      {
        name: "description",
        content:
          "Cold calling tips, B2B lead generation strategies, and outbound sales advice from real campaigns. Practical guides for SDRs, founders, and anyone doing outreach.",
      },
      { property: "og:title", content: "Cold Calling & B2B Lead Generation Blog | Willay Haider" },
      {
        property: "og:description",
        content:
          "Cold calling tips, B2B lead generation strategies, and outbound sales advice from real campaigns.",
      },
      { property: "og:url", content: "https://www.willayhaider.pro/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.willayhaider.pro/blog" }],
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="text-primary">Blog</span>
      </h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Cold calling tips, B2B lead generation strategies, and outbound
        sales advice from real campaigns. Practical guides for SDRs, BDRs,
        founders, and anyone doing outreach.
      </p>
      {BLOG_POSTS.length === 0 ? (
        <div className="border border-border rounded-lg p-8 text-center text-muted-foreground">
          <p>New articles are on the way. Check back soon.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="text-primary text-sm font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
