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
  //   slug: "how-b2b-cold-calling-actually-works",
  //   title: "How B2B Cold Calling Actually Works (No, It's Not Just Reading a Script",
  //   excerpt: "People assume it's dialing a number and reading a pitch until someone says yes. Here's what actually happens on a call that goes somewhere.",
  //   date: "2026-08-19",
  //   content: `People assume cold calling is just dialing a number and reading a pitch off a screen until someone says yes. I wish it were that simple. It would've saved me a lot of awkward first months.

Here's what actually happens on a call that goes somewhere.

You already know something before you dial

If I'm calling someone cold, "cold" is a bit of a misnomer. I've usually looked at the company, figured out roughly what they do, and have a guess at why they might care about what I'm offering. Not a deep dossier, just enough that when I say "the reason I'm calling" I actually have a reason, not a made-up one. Prospects can tell the difference in the first ten seconds. If it sounds like a script that could be read to literally anyone, they check out.

The first fifteen seconds are the whole game

Nobody decides to buy anything in the first fifteen seconds of a cold call. What they decide is whether to keep listening. That's it. So the opener isn't a pitch, it's a reason not to hang up. Something specific, something short, and then I get out of the way and let them respond.

Most of the call is listening, not talking

This surprises people. A good discovery call is maybe 30 percent me talking and 70 percent them talking, or close to it. My job early on is to find out what's actually going on for them, not to convince them of anything yet. If someone tells me their current process is "fine," I don't argue. I ask what "fine" means to them and what they'd change if they could wave a wand. Usually that's where the real problem surfaces.

Objections aren't rejections

"We're not interested" thirty seconds into a call almost never means what it sounds like. It usually means "I don't yet understand why this matters to me" or "I'm on autopilot saying no to cold calls." Neither of those is a wall. I ask one more question, genuinely curious, not pushy, and more often than not the conversation continues.

Sometimes it really is no. That's fine too. Chasing a genuine no wastes everyone's time and burns the relationship for later, when timing might actually be right.

The real goal isn't the sale, it's the next step

On a first call, I'm almost never trying to close anything. I'm trying to earn a legitimate next conversation, ideally with the right person and a real reason for them to show up. A booked meeting that no-shows because the prospect wasn't actually interested isn't a win, it just moves the disappointment down the calendar. Better to under-promise on the call and get a meeting that sticks.

Why this matters if you're hiring for it

If you're a founder or sales manager evaluating outbound talent, the thing to watch for isn't confidence on the phone, plenty of people have that. It's whether the person is actually listening to what the prospect says, or just waiting for their turn to talk. That's the difference between someone who books meetings and someone who books meetings that don't show up.

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
