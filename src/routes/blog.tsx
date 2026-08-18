import { createFileRoute } from '@tanstack/react-router'

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

      <div className="border border-border rounded-lg p-8 text-center text-muted-foreground">
        <p>New articles are on the way. Check back soon.</p>
      </div>
    </div>
  )
}
