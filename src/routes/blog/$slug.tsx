import { createFileRoute, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-posts'

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
            dateModified: "2026-08-23",
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

function formatText(text: string) {
  // Simple markdown inline parser for bold and links
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(<strong key={match.index} className="font-bold text-foreground">{token.slice(2, -2)}</strong>);
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

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function RenderContent({ content }: { content: string }) {
  const blocks = content.split("\n\n");

  return (
    <article className="prose prose-invert max-w-none space-y-4">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (trimmed === "---") {
          return <hr key={idx} className="my-8 border-border" />;
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-bold tracking-tight text-foreground mt-6 mb-2">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={idx} className="border-l-2 border-primary bg-secondary/30 p-3.5 rounded-r-lg my-3 italic text-foreground/90 text-sm sm:text-base">
              {formatText(trimmed.replace(/^>\s*/gm, ""))}
            </blockquote>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
          return (
            <ul key={idx} className="space-y-1.5 list-disc list-inside my-3 text-foreground/85 text-sm sm:text-base font-medium">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {formatText(item.replace(/^[-*]\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split("\n").filter((l) => /^\d+\.\s+/.test(l.trim()));
          return (
            <ol key={idx} className="space-y-1.5 list-decimal list-inside my-3 text-foreground/85 text-sm sm:text-base font-medium">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {formatText(item.replace(/^\d+\.\s+/, ""))}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={idx} className="text-foreground/90 text-sm sm:text-base leading-relaxed font-medium">
            {formatText(trimmed)}
          </p>
        );
      })}
    </article>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData()
  const [menuOpen, setMenuOpen] = useState(false);

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
            href="/#contact"
            className="btn-click-effect rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-transform hover:opacity-90 active:scale-95 sm:px-4 sm:py-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request Proposal
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <RenderContent content={post.content} />

          {/* Author Bio Card */}
          <div className="mt-12 rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Written by Willay Haider</p>
                <h3 className="text-base font-bold text-foreground mt-0.5">Senior BDR & Outbound Sales Specialist</h3>
                <p className="text-xs text-foreground/80 font-medium mt-1 max-w-lg">
                  Specializing in unscripted cold calling, appointment setting, and CRM RevOps for US, UK, and European B2B companies.
                </p>
              </div>
              <a
                href="/about"
                className="btn-click-effect shrink-0 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-xs font-medium text-muted-foreground">
        © 2026 All rights are reserved by Mr Haider.
      </footer>
    </div>
  )
}

