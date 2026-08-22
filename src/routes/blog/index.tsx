import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: "Cold Calling & B2B Lead Generation Blog: Willay Haider" },
      {
        name: "description",
        content:
          "Cold calling tips, B2B lead generation strategies, and outbound sales advice from real campaigns. Practical guides for SDRs, founders, and anyone doing outreach.",
      },
      { property: "og:title", content: "Cold Calling & B2B Lead Generation Blog: Willay Haider" },
      {
        property: "og:description",
        content:
          "Cold calling tips, B2B lead generation strategies, and outbound sales advice from real campaigns.",
      },
      { property: "og:url", content: "https://willayhaider.pro/blog" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/blog" }],
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
          Outbound Sales & Lead Gen <span className="text-primary">Articles</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Cold calling frameworks, B2B appointment setting strategies, and outbound advice derived from over 57,000+ dials and $3.5M+ in closed revenue.
        </p>
        {BLOG_POSTS.length === 0 ? (
          <div className="border border-border rounded-xl p-8 text-center text-muted-foreground bg-card">
            <p>New articles are on the way. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="text-base sm:text-lg font-bold text-foreground mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{post.excerpt}</p>
                </div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline"
                >
                  <span>Read article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
