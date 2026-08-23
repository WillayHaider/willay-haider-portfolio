import { createFileRoute, notFound } from '@tanstack/react-router'
import { useState, useEffect, lazy, Suspense } from 'react'
import { ArrowLeft, Clock, Calendar, ArrowRight, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-posts'
import heroPortrait from '@/assets/willay-portrait-final-nobg.webp'

const LazyLeadCaptureModal = lazy(() =>
  import('@/components/LeadCaptureModal').then((m) => ({ default: m.LeadCaptureModal }))
);

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
        { title: loaderData.metaTitle || `${loaderData.title} | Willay Haider` },
        { name: "description", content: loaderData.metaDescription || loaderData.excerpt },
        { name: "keywords", content: loaderData.keywords || "cold calling, B2B appointment setting, lead generation, SDR BDR" },
        { name: "author", content: "Willay Haider" },
        { property: "og:title", content: loaderData.metaTitle || loaderData.title },
        { property: "og:description", content: loaderData.metaDescription || loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://willayhaider.pro/blog/${loaderData.slug}` },
        { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle || loaderData.title },
        { name: "twitter:description", content: loaderData.metaDescription || loaderData.excerpt },
        { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      ],
      links: [
        { rel: "canonical", href: `https://willayhaider.pro/blog/${loaderData.slug}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.date,
            dateModified: "2026-08-24",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://willayhaider.pro/blog/${loaderData.slug}`,
            },
            url: `https://willayhaider.pro/blog/${loaderData.slug}`,
            author: {
              "@type": "Person",
              name: "Willay Haider",
              url: "https://willayhaider.pro/about",
              jobTitle: "Senior Business Development Representative",
            },
            publisher: {
              "@type": "Person",
              name: "Willay Haider",
              url: "https://willayhaider.pro",
            },
            keywords: loaderData.keywords,
          }),
        },
      ],
    }
  },
  component: BlogPostPage,
})

function formatInline(text: string): React.ReactNode {
  // Replace any AI em dashes or en dashes with standard hyphen
  const cleaned = text.replace(/[\u2014\u2013]/g, " - ");
  
  // Regex to match bold, italic, links, and code
  const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`.*?`)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(cleaned)) !== null) {
    if (match.index > lastIndex) {
      parts.push(cleaned.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(<strong key={match.index} className="font-bold text-foreground">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*") && token.length > 2) {
      parts.push(<em key={match.index} className="italic text-foreground/90">{token.slice(1, -1)}</em>);
    } else if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code key={match.index} className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-primary">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("[") && token.includes("](")) {
      const linkText = token.substring(1, token.indexOf("]("));
      const linkUrl = token.substring(token.indexOf("](") + 2, token.length - 1);
      parts.push(
        <a key={match.index} href={linkUrl} className="text-primary font-semibold hover:underline">
          {linkText}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < cleaned.length) {
    parts.push(cleaned.substring(lastIndex));
  }

  return parts.length > 0 ? parts : cleaned;
}

type ParsedBlock =
  | { type: 'hr' }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'blockquote'; lines: string[] }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'image'; alt: string; src: string }
  | { type: 'p'; text: string };

function parseMarkdown(content: string): ParsedBlock[] {
  const sanitized = content.replace(/[\u2014\u2013]/g, " - ").replace(/\r\n/g, "\n");
  const lines = sanitized.split("\n");
  const blocks: ParsedBlock[] = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed === "---") {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    if (trimmed.startsWith("![") && trimmed.includes("](") && trimmed.endsWith(")")) {
      const alt = trimmed.substring(2, trimmed.indexOf("]("));
      const src = trimmed.substring(trimmed.indexOf("](") + 2, trimmed.length - 1);
      blocks.push({ type: 'image', alt, src });
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: 'h2', text: trimmed.replace(/^##\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: 'h3', text: trimmed.replace(/^###\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].trim().startsWith("#") &&
        !lines[i].trim().startsWith("- ") &&
        !lines[i].trim().startsWith("* ") &&
        !/^\d+\.\s+/.test(lines[i].trim()) &&
        lines[i].trim() !== "---"
      ) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Paragraph
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      lines[i].trim() !== "---"
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    if (pLines.length > 0) {
      blocks.push({ type: 'p', text: pLines.join(" ") });
    }
  }

  return blocks;
}

function RenderContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content);

  return (
    <article className="space-y-4 text-foreground">
      {blocks.map((block, idx) => {
        if (block.type === "hr") {
          return <hr key={idx} className="my-6 border-border" />;
        }

        if (block.type === "image") {
          return (
            <div key={idx} className="my-6 flex justify-center">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm max-w-xl w-full">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          );
        }

        if (block.type === "h2") {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3">
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 key={idx} className="text-base sm:text-lg font-bold tracking-tight text-foreground mt-5 mb-2">
              {block.text}
            </h3>
          );
        }

        if (block.type === "blockquote") {
          return (
            <blockquote
              key={idx}
              className="border-l-2 border-border/80 bg-secondary/30 rounded-r-lg p-3.5 sm:p-4 my-3 text-sm sm:text-base leading-relaxed text-foreground italic space-y-1"
            >
              {block.lines.map((qLine, qIdx) => {
                const unquoted = qLine.replace(/^["“”']+|["“”']+$/g, "").trim();
                return <p key={qIdx}>{formatInline(unquoted)}</p>;
              })}
            </blockquote>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={idx} className="my-3 space-y-1.5 list-disc list-inside text-sm sm:text-base leading-relaxed text-foreground">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {formatInline(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={idx} className="my-3 space-y-1.5 list-decimal list-inside text-sm sm:text-base leading-relaxed text-foreground">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {formatInline(item)}
                </li>
              ))}
            </ol>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="text-sm sm:text-base leading-relaxed text-foreground font-normal">
            {formatInline(block.text)}
          </p>
        );
      })}
    </article>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData()
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`feedback_${post.slug}`);
      if (saved === 'yes' || saved === 'no') {
        setFeedback(saved);
      }
    } catch {}
  }, [post.slug]);

  const handleFeedback = (type: 'yes' | 'no') => {
    setFeedback(type);
    try {
      localStorage.setItem(`feedback_${post.slug}`, type);
    } catch {}
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Header with 50% transparency */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
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
            href="/blog"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            Articles
          </a>
        </div>

        {/* Dropdown panel */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/98 p-4 pt-10 pb-5 backdrop-blur-2xl shadow-xl animate-fade-in flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center sm:grid-cols-4 max-w-2xl mx-auto w-full">
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
              <a href="/about" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                About Me
              </a>
              <a href="/#certifications" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb / Back to Blog */}
          <div className="mb-6 flex items-center justify-between">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all articles</span>
            </a>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <RenderContent content={post.content} />

          {/* Interactive Helpfulness Feedback Widget */}
          <div className="mt-10 rounded-2xl border border-border/80 bg-secondary/30 p-5 text-center backdrop-blur-sm">
            <h4 className="text-sm font-bold text-foreground">Was this playbook helpful to your sales process?</h4>
            <p className="text-xs text-muted-foreground mt-1">Your feedback directly shapes future actionable deep-dives.</p>
            {feedback ? (
              <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-semibold text-emerald-500 animate-fade-in">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Thank you! Your feedback has been recorded.
              </div>
            ) : (
              <div className="mt-3.5 flex items-center justify-center gap-3">
                <button
                  onClick={() => handleFeedback('yes')}
                  className="btn-click-effect inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary hover:text-primary transition-all active:scale-95"
                >
                  <ThumbsUp className="h-3.5 w-3.5 text-primary" /> Yes, very helpful
                </button>
                <button
                  onClick={() => handleFeedback('no')}
                  className="btn-click-effect inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-all active:scale-95"
                >
                  <ThumbsDown className="h-3.5 w-3.5" /> Needs improvement
                </button>
              </div>
            )}
          </div>

          {/* Sleek Author Bio Box (E-E-A-T) */}
          <div className="mt-8 rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-3">
                <img
                  src={heroPortrait}
                  alt="Willay Haider - Senior BDR"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-cover border border-border bg-secondary/40 shrink-0"
                  loading="lazy"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Article Author</span>
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">Willay Haider</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">Senior BDR &amp; Outbound Specialist</p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end mt-1 sm:mt-0">
                <a
                  href="/"
                  className="btn-click-effect flex-1 sm:flex-initial text-center rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  View Profile
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-click-effect flex-1 sm:flex-initial text-center rounded-full px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-90 transition-all cursor-pointer"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Hire Willay
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-foreground/80 font-normal">
              Outbound specialist with 57,000+ live cold dials and $3.5M+ pipeline generated across SaaS, healthcare, and enterprise tech.
            </p>

            {/* Verified Credentials Badges */}
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
              <span className="rounded-md bg-secondary/80 px-2 py-0.5 border border-border/50">57k+ Dials</span>
              <span className="rounded-md bg-secondary/80 px-2 py-0.5 border border-border/50">$3.5M+ Pipeline</span>
              <span className="rounded-md bg-secondary/80 px-2 py-0.5 border border-border/50">Google Analytics Certified</span>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-foreground">Related Sales Playbooks</h3>
                <a href="/blog" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  Explore all articles <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((rPost) => (
                  <a
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="group block rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <p className="text-[10px] text-muted-foreground mb-1">{rPost.date} • {rPost.readTime}</p>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5 leading-relaxed">
                      {rPost.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
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
            defaultService="B2B Appointment Setting"
            directConnect={false}
          />
        </Suspense>
      )}
    </div>
  )
}
