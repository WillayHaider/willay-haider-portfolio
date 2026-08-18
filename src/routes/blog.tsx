import { createFileRoute, Link } from '@tanstack/react-router'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
}

// Add new articles here — each one automatically gets a page at /blog/{slug}
export const BLOG_POSTS: BlogPost[] = [
  // Example (delete or edit when you add your first real post):
  // {
  //   slug: "cold-calling-vs-email-outreach",
  //   title: "Cold Calling vs Email Outreach for B2B",
  //   excerpt: "When to pick up the phone instead of hitting send, and why.",
  //   date: "2026-08-19",
  //   content: `Full article text goes here. You can use multiple paragraphs
  //   separated by blank lines.`,
  // },
]

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Resources & Insights
      </h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Practical breakdowns on B2B cold calling, lead generation, and
        appointment setting — from real outbound campaigns, not theory.
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
