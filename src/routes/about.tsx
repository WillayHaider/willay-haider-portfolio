import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, lazy, Suspense } from "react";
import { Play, Pause, ArrowRight, Sparkles, CheckCircle2, PhoneCall, TrendingUp, Compass, Brain, Target, ShieldCheck } from "lucide-react";
import introAudioUrl from "@/assets/willay-intro.ogg";

const LazyLeadCaptureModal = lazy(() =>
  import("@/components/LeadCaptureModal").then((m) => ({ default: m.LeadCaptureModal }))
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Willay Haider | Turning Cold Prospects Into High-Ticket Closed Revenue" },
      {
        name: "description",
        content:
          "The outbound philosophies, buyer psychology, and scaling frameworks of Willay Haider: Senior BDR with 57,000+ dials and $3.5M+ pipeline closed across global B2B markets.",
      },
      {
        name: "keywords",
        content:
          "Willay Haider, About Willay Haider, B2B Outbound Sales Philosophy, Cold Calling Psychology, Enterprise Sales Framework, BDR Strategy, willayhaider.pro",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "About Willay Haider | Turning Cold Prospects Into High-Ticket Closed Revenue" },
      {
        property: "og:description",
        content:
          "A deep dive into modern B2B sales psychology, outbound systems, and the mental models behind scaling pipeline across US, European, and global markets.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://willayhaider.pro/about" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Willay Haider | Turning Cold Prospects Into High-Ticket Closed Revenue" },
      {
        name: "twitter:description",
        content:
          "A deep dive into modern B2B sales psychology, outbound systems, and the mental models behind scaling pipeline across US, European, and global markets.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/about" }],
  }),
});

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDirectConnect, setIsDirectConnect] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(introAudioUrl);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Header without distraction buttons */}
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

      {/* Main Blog-Format Article */}
      <main className="pt-24 pb-20 sm:pt-32 sm:pb-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Header & Main Heading */}
          <header className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
              <span>About Willay Haider</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="block text-foreground">
                Turning Cold Prospects Into
              </span>
              <span className="block mt-1 sm:mt-2 text-primary">
                High-Ticket Closed Revenue
              </span>
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground border-b border-border/60 pb-6">
              <span>By Willay Haider</span>
              <span>•</span>
              <span>Senior Outbound Sales Strategist & BDR</span>
              <span>•</span>
              <span>Global B2B Markets</span>
            </div>

            {/* Quick Audio Intro & Resume Toolbar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={toggleAudio}
                className={`btn-click-effect inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                  isPlaying
                    ? "border-primary bg-primary text-primary-foreground shadow-xs"
                    : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary shadow-xs"
                }`}
                aria-label="Listen to voice intro"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-primary" />}
                <span>{isPlaying ? "Pause Intro" : "Play Intro"}</span>
              </button>

              <a
                href="/Mr%20Haider-BDR-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mr Haider-BDR-Resume.pdf"
                className="btn-click-effect inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:border-primary shadow-xs"
              >
                Download CV (PDF)
              </a>
            </div>
          </header>

          {/* Article Prose Content */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
            {/* Opening Intro */}
            <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
              If you have ever been on the receiving end of a generic cold call, you know how painful it feels: an over-enthusiastic rep reading a rigid script, talking over your questions, pushing for 15 minutes before they even understand what you do.
            </p>

            <p>
              I spent the last 1.5+ years dialing over <strong>57,000+ live phone calls</strong> into corporate boardrooms, procurement departments, and founders across the United States, the United Kingdom, and Europe. Those calls yielded over <strong>$3.5M+ in verified closed revenue</strong> and hundreds of qualified demos across SaaS, enterprise infrastructure, healthcare procurement, and legal marketing.
            </p>

            <p>
              Along the way, I threw out every cliché in the traditional sales handbook. Here is the unvarnished reality of how modern outbound actually works, the psychology behind why prospects buy, and the mental models I use to scale pipeline for businesses in any industry worldwide.
            </p>

            {/* Section 1: The Human Reality */}
            <hr className="border-border/60 my-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Brain className="h-4 w-4" />
                <span>The Core Psychology</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                1. Why Scripts Fail and Conversational Status Wins
              </h2>

              <p>
                Decision-makers in 2026 are overwhelmed. A CEO or VP of Sales in London or New York gets bombarded with dozens of AI-generated emails and robotic pitch calls every single week. Their instinctive defense mechanism is immediate rejection.
              </p>

              <p>
                The amateur salesperson attempts to overcome this by speaking faster, pitching louder, and repeating scripted rebuttals. But this only reinforces the prospect’s suspicion: <em>"This person wants something from me, and they do not care about my business."</em>
              </p>

              <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-5 my-6">
                <p className="italic text-foreground/90 text-xs sm:text-sm font-medium leading-relaxed">
                  "The goal of the first 30 seconds of an outbound call is never to sell your product. It is to earn the intellectual permission to ask one deep, diagnostic question."
                </p>
              </div>

              <p>
                When I speak to a prospect, I operate from <strong>peer-level equality</strong>. I do not act like a vendor begging for time; I act like a diagnostic specialist uncovering an operational bottleneck. When prospects sense that you respect their time and know their industry nuances better than their internal team, defensive resistance instantly evaporates into genuine dialogue.
              </p>
            </div>

            {/* Section 2: Universal Framework */}
            <hr className="border-border/60 my-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>The Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                2. The 4-Pillar Pipeline Architecture
              </h2>

              <p>
                Whether selling $200k industrial battery procurement systems or a $1,500/month B2B SaaS platform, the foundational physics of revenue generation remain constant across every market:
              </p>

              <div className="space-y-5 my-6">
                <div className="glass-card rounded-xl border border-border p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">The Sharp Pain Hypothesis</h3>
                      <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        Never dial a list without a specific hypothesis about what is costing that specific company money today. Demographics alone are useless without understanding operational friction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl border border-border p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Multi-Touch Rhythm (Phone + Email + Social)</h3>
                      <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        Cold calling is the tip of the spear, but true pipeline velocity comes when cold calls are synchronized with customized LinkedIn touchpoints and tailored email sequences that reference previous interactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl border border-border p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Strict Qualification & AE Handoff Discipline</h3>
                      <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        Booking meetings is easy; booking meetings that actually close is rare. Every meeting I schedule comes with verified budget authority, urgent timeline confirmation, and detailed discovery notes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl border border-border p-5">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">CRM Hygiene & RevOps Data Integrity</h3>
                      <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        A sales pipeline is only as good as its data. Strict disposition tagging, accurate contact enrichment in HubSpot or Salesforce, and daily conversion auditing prevent leaks in your sales funnel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Universal Scaling Mental Model */}
            <hr className="border-border/60 my-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <TrendingUp className="h-4 w-4" />
                <span>Business Scaling Mental Model</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                3. Outbound Is the Purest Market Feedback Loop
              </h2>

              <p>
                Many founders believe outbound sales is merely a channel for customer acquisition. In reality, outbound is the fastest, most brutal, and most honest market research tool ever invented.
              </p>

              <p>
                When you put a skilled caller on the phones for 200 conversations a week, you do not just generate pipeline: you instantly discover what messaging resonates, which competitors are failing to deliver, and where your product creates genuine, quantifiable ROI.
              </p>

              <p>
                If a business cannot scale via cold outreach, the problem is rarely the phone—it is almost always the clarity of the value proposition or the targeting accuracy of the Ideal Customer Profile (ICP). Fixing those two variables unlocks growth in virtually any vertical.
              </p>
            </div>

            {/* Section 4: Who I Am & My Track Record */}
            <hr className="border-border/60 my-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Target className="h-4 w-4" />
                <span>The Track Record</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                4. Background, Systems & Global Execution
              </h2>

              <p>
                Over the course of my career, I have driven outbound revenue across diverse, complex industries:
              </p>

              <ul className="space-y-2.5 my-4">
                <li className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Million Dials Pvt Ltd:</strong> Architected dynamic cold call tracks, multi-channel discovery, and qualification frameworks across competitive B2B SaaS markets.</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Vizocom ICT LLC:</strong> Spearheaded enterprise outreach targeting hospital procurement executives and industrial hardware, generating 320+ MQLs and 77+ closed POs.</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>OMC Group LLC:</strong> Executed high-precision outreach to North American attorneys and law firms, sustaining a 75% calling block connect rate.</span>
                </li>
              </ul>

              <p>
                My technical stack includes daily execution across <strong>HubSpot, Salesforce, Apollo.io, ZoomInfo, Close CRM, LinkedIn Sales Navigator</strong>, backed by verified credentials from <strong>Google (Analytics), Deloitte (Data Analytics), AWS (AI Workflows)</strong>, and the <strong>ADBI Institute (Cybersecurity & Privacy)</strong>.
              </p>
            </div>

            {/* Section 5: Conclusion & Invitation */}
            <hr className="border-border/60 my-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Looking Ahead</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                5. Let's Build Predictable Pipeline Together
              </h2>

              <p>
                Whether you are an international founder seeking a dedicated remote BDR to penetrate US/European accounts, an agency leader wanting to audit your outbound architecture, or a sales professional refining your cold calling craft through my blog articles, I am always open to high-impact conversations.
              </p>

              <p>
                Sales is not about pressure; it is about precision, clarity, and trust. When those three elements align, revenue inevitably follows.
              </p>

              {/* Final CTA Box inside the article */}
              <div className="mt-8 rounded-2xl border border-border bg-gradient-to-r from-secondary/40 via-card to-secondary/40 p-6 sm:p-8 text-center shadow-xs">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Interested in Exploring an Outbound Partnership?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/80 font-medium max-w-xl mx-auto">
                  Reach out to discuss your target market, outbound pipeline goals, or remote sales execution.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsDirectConnect(false);
                      setModalService(undefined);
                      setIsModalOpen(true);
                    }}
                    className="btn-click-effect inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 active:scale-95"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <span>Connect / Request Consultation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href="/contact"
                    className="btn-click-effect inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full border border-border bg-card px-5 py-2 text-xs sm:text-sm font-semibold text-foreground hover:border-primary transition-colors shadow-xs"
                  >
                    Direct Contact Details
                  </a>
                </div>
              </div>
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
            defaultService={modalService}
            directConnect={isDirectConnect}
          />
        </Suspense>
      )}
    </div>
  );
}
