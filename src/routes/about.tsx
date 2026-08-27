import { createFileRoute } from "@tanstack/react-router";
import { useState, lazy, Suspense } from "react";
import { ArrowRight, PhoneCall, TrendingUp, CheckCircle2 } from "lucide-react";

const LazyLeadCaptureModal = lazy(() =>
  import("@/components/LeadCaptureModal").then((m) => ({ default: m.LeadCaptureModal }))
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider | Senior BDR & Outbound Sales Strategist" },
      {
        name: "description",
        content:
          "BDR and Outbound Sales Strategist partnering with US, UK, and European B2B organizations to implement full-fledged outbound systems. $3.5M+ closed revenue generated.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, About Willay Haider, B2B Outbound Sales Philosophy, Cold Calling, BDR Strategy, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "About Willay Haider | Senior BDR & Outbound Sales Strategist" },
      {
        property: "og:description",
        content:
          "BDR and Outbound Sales Strategist partnering with US, UK, and European B2B organizations to implement full-fledged outbound systems.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://willayhaider.pro/about" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Willay Haider | Senior BDR & Outbound Sales Strategist" },
      {
        name: "twitter:description",
        content:
          "BDR and Outbound Sales Strategist partnering with US, UK, and European B2B organizations to implement full-fledged outbound systems.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/about" }],
  }),
});

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="relative z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 p-1 text-foreground transition-opacity hover:opacity-75 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          <a
            href="/"
            className="text-xs sm:text-sm font-bold tracking-tight text-foreground/80 hover:text-primary transition-colors"
          >
            Willay Haider
          </a>
        </div>

        {/* Dropdown panel */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/98 p-4 pt-10 pb-5 backdrop-blur-2xl shadow-xl animate-fade-in flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-center sm:grid-cols-4 max-w-2xl mx-auto w-full">
              <a href="/" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Home
              </a>
              <a href="/#services" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Services
              </a>
              <a href="/#results" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href="/#pricing" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/#reviews" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="/#faq" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="/about" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-primary bg-primary/10 transition-colors">
                About Me
              </a>
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Hire In-House
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 sm:pt-32 sm:pb-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 animate-fade-in">
          {/* Top Intro Section */}
          <div className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
            <div className="mb-9 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                About Willay Haider
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
                BDR and Outbound Sales Strategist partnering with US, UK, and European B2B organizations to implement full-fledged outbound systems. Over the past 1.5+ years, I have dialed 57,000+ cold calls and generated $3.5M+ in verified closed revenue.
              </p>

              <p>
                Cold calling is not just about following a script, it's about building high-trust conversations to find their real business pain points.
              </p>
            </div>
          </div>

          <hr className="border-border/60 my-8 sm:my-10" />

          {/* Core Story Headline */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="block text-foreground">
                Why I Threw Away the Sales Script
              </span>
              <span className="block mt-1 sm:mt-2 text-primary">
                And Built a $3.5M+ Pipeline Instead
              </span>
            </h1>
          </header>

          {/* Story Body */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
            <p className="text-base font-medium text-foreground leading-relaxed">
              Let’s be honest: nobody likes getting a robotic cold call.
            </p>

            <p>
              Years ago, I realized why most outbound campaigns fail: reps sound like bots reading a page, and prospects hang up.
            </p>

            <p>
              So, I did something different. I threw away the rigid scripts, started having real, human conversations, and built a system around it.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Fast forward to today:
              </p>

              {/* Single row layout exactly like homepage hero */}
              <div className="grid grid-cols-3 gap-3 border-y border-border/80 py-5 my-4 sm:flex sm:flex-wrap sm:gap-10 sm:py-6">
                <div>
                  <p className="text-xl font-extrabold text-[var(--emerald-accent)] sm:text-3xl">
                    $3.5M+
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                    Revenue Closed
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-foreground sm:text-3xl">
                    57,500+
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                    Outbound Calls
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-primary sm:text-3xl">
                    72%
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                    Avg Show-up Rate
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-foreground">
                <span className="block">The bottom line?</span>
                <span className="block mt-1 font-semibold text-foreground/90">
                  You show up to close. I handle everything else.
                </span>
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-click-effect inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:opacity-90 active:scale-95"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span>Request a Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>

      {/* Modal (Lazy loaded) */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <LazyLeadCaptureModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
