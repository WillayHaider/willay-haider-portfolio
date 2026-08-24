import { createFileRoute, notFound } from '@tanstack/react-router'
import { useState, useEffect, lazy, Suspense } from 'react'
import { ArrowLeft, Clock, Calendar, ArrowRight, ThumbsUp, ThumbsDown, CheckCircle2, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_NOTIFICATION_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '@/components/ContactForm'
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
  | { type: 'table'; headers: string[]; rows: string[][] }
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
        !lines[i].trim().startsWith("|") &&
        !/^\d+\.\s+/.test(lines[i].trim()) &&
        lines[i].trim() !== "---"
      ) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    // Markdown Table Parser
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const splitRow = (rowStr: string) =>
          rowStr
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim());
        
        const headers = splitRow(tableLines[0]);
        const isSeparator = /^\|?(\s*:?-+:?\s*\|?)+$/.test(tableLines[1]);
        const dataStart = isSeparator ? 2 : 1;
        const rows: string[][] = [];
        for (let r = dataStart; r < tableLines.length; r++) {
          rows.push(splitRow(tableLines[r]));
        }
        blocks.push({ type: 'table', headers, rows });
        continue;
      }
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
      !lines[i].trim().startsWith("|") &&
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
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm w-full">
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

        if (block.type === "table") {
          return (
            <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-border bg-card/70 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    {block.headers.map((header, hIdx) => (
                      <th key={hIdx} className="py-3 px-3.5 sm:px-4 font-bold text-foreground tracking-tight">
                        {formatInline(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-secondary/30 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2.5 sm:py-3 px-3.5 sm:px-4 text-foreground/90 leading-relaxed align-top">
                          {formatInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

interface CommentItem {
  id: string;
  name: string;
  role: string;
  date: string;
  content: string;
  likes: number;
}

const DEFAULT_COMMENTS: Record<string, CommentItem[]> = {
  "how-b2b-cold-calling-actually-works": [
    {
      id: "c1",
      name: "Marcus Vance",
      role: "VP Operations @ LogisticsHub",
      date: "2 days ago",
      content: "The 30-second low-pressure opener completely changed our team's pickup dynamic. Prospects actually pause instead of reflex-hanging up.",
      likes: 8,
    },
    {
      id: "c2",
      name: "Sarah Jenkins",
      role: "SDR Lead @ CloudPeak SaaS",
      date: "Yesterday",
      content: "We tried ditching the 45-second pitch script for this diagnostic 30/70 model last week. Dial-to-meeting conversion jumped from 2.8% to 6.1%.",
      likes: 12,
    },
  ],
  "cold-calling-vs-email-outreach": [
    {
      id: "c1",
      name: "Alex Chen",
      role: "Founding AE @ HyperScale",
      date: "3 days ago",
      content: "The point about Total Addressable Market (TAM) is so accurate. If you have under 1,000 target accounts, pure email spray-and-pray destroys the list in weeks.",
      likes: 9,
    },
    {
      id: "c2",
      name: "Dan Miller",
      role: "RevOps Director @ ApexWave",
      date: "1 day ago",
      content: "The 8-day hybrid sprint (email morning -> direct dial afternoon) is gold. The phone touch has 3x higher familiarity when they saw the subject line.",
      likes: 14,
    },
  ],
  "cold-calling-techniques": [
    {
      id: "c1",
      name: "Elena Rostova",
      role: "B2B SaaS Founder",
      date: "4 days ago",
      content: "The 1-second pause after stating your name is pure psychology. It instantly stops the rep from sounding needy.",
      likes: 11,
    },
  ],
  "how-to-handle-gatekeepers-in-2026": [
    {
      id: "c1",
      name: "Tom Bradley",
      role: "Account Executive @ DataFlow",
      date: "3 days ago",
      content: "Asking the front desk for their organizational advice rather than bluffing is night and day. They gave me the exact direct extension for the logistics VP.",
      likes: 7,
    },
  ],
  "top-7-appointment-setting-frameworks-to-double-sales-pipeline": [
    {
      id: "c1",
      name: "Kevin O'Reilly",
      role: "Head of Sales @ FreightTech",
      date: "2 days ago",
      content: "The Trigger-Event model paired with Series A announcements has yielded our highest ACV demos this quarter.",
      likes: 15,
    },
  ],
  "hubspot-workflows-for-outbound-sales-setup-guide": [
    {
      id: "c1",
      name: "Rachel Green",
      role: "RevOps Specialist @ ScaleOps",
      date: "1 day ago",
      content: "The master un-enrollment trigger is a lifesaver. We had a rep accidentally send automated sequence emails to a customer right after signing a $30k deal before we set this up.",
      likes: 18,
    },
  ],
  "how-to-warm-up-new-sales-email-domain-avoid-spam-filters": [
    {
      id: "c1",
      name: "Liam Scott",
      role: "Growth Consultant @ NextGen Outbound",
      date: "2 days ago",
      content: "Starting with p=none on DMARC and keeping verified bounce rates below 2% via Apollo saved our secondary domain fleet.",
      likes: 10,
    },
  ],
  "how-to-build-high-converting-b2b-cold-calling-script": [
    {
      id: "c1",
      name: "Brian Foster",
      role: "Director of Demand Gen @ CloudMetrics",
      date: "Yesterday",
      content: "Pattern interrupts are essential in 2026. The value metric drop establishes immediate commercial context.",
      likes: 13,
    },
  ],
  "outsourced-bdr-vs-in-house-appointment-setting-cost-benefit-analysis": [
    {
      id: "c1",
      name: "Jason Taylor",
      role: "Seed Stage Founder @ DevSync",
      date: "Yesterday",
      content: "The hidden $115k true cost for an in-house SDR is spot on. We burned $40k on recruitment fees and software seats before switching to an outsourced partner.",
      likes: 21,
    },
  ],
};

function BlogPostPage() {
  const post = Route.useLoaderData()
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "success">("idle");

  // Dynamic comments state
  const [comments, setComments] = useState<CommentItem[]>(() => {
    return DEFAULT_COMMENTS[post.slug] || [
      {
        id: "c1",
        name: "David Vance",
        role: "B2B Outbound Lead",
        date: "2 days ago",
        content: "Outstanding operational breakdown. The tactical clarity here is leagues ahead of standard sales theory.",
        likes: 6,
      }
    ];
  });

  const [commentName, setCommentName] = useState("");
  const [commentRole, setCommentRole] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentStatus, setCommentStatus] = useState<"idle" | "sending" | "success">("idle");
  const [likedCommentIds, setLikedCommentIds] = useState<Record<string, boolean>>({});

  // Reset feedback and input state on slug change or page navigation
  useEffect(() => {
    setFeedback(null);
    setComments(DEFAULT_COMMENTS[post.slug] || [
      {
        id: "c1",
        name: "David Vance",
        role: "B2B Outbound Lead",
        date: "2 days ago",
        content: "Outstanding operational breakdown. The tactical clarity here is leagues ahead of standard sales theory.",
        likes: 6,
      }
    ]);
    setCommentName("");
    setCommentRole("");
    setCommentText("");
    setCommentStatus("idle");
    setNewsletterEmail("");
    setNewsletterStatus("idle");
  }, [post.slug]);

  const handleFeedback = (type: 'yes' | 'no') => {
    setFeedback(type);
    try {
      const reactionLabel = type === 'yes' ? 'Positive (Helpful)' : 'Needs Improvement';
      const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const notificationParams = {
        to_email: 'contact.whaider@gmail.com',
        from_name: 'Blog Reader Feedback',
        name: 'Blog Reader',
        first_name: 'Blog',
        from_email: 'contact.whaider@gmail.com',
        email: 'contact.whaider@gmail.com',
        user_email: 'contact.whaider@gmail.com',
        client_email: 'contact.whaider@gmail.com',
        reply_to: 'contact.whaider@gmail.com',
        phone: 'N/A',
        website: `https://willayhaider.pro/blog/${post.slug}`,
        subject: `New Blog Feedback: ${post.title} [${type === 'yes' ? 'Helpful' : 'Needs Work'}]`,
        message: `A visitor just reacted to your blog article!\n\nArticle: ${post.title}\nFeedback: ${reactionLabel}\nURL: https://willayhaider.pro/blog/${post.slug}\nTimestamp: ${submissionTime}`,
        timestamp: submissionTime,
      };

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE_ID,
        notificationParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      ).catch((err) => {
        console.warn('Blog feedback email delivery note:', err);
      });
    } catch {}
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || newsletterStatus === "sending") return;

    setNewsletterStatus("sending");
    try {
      const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const newsletterParams = {
        to_email: 'contact.whaider@gmail.com',
        from_name: 'Newsletter Subscriber',
        name: 'Newsletter Subscriber',
        first_name: 'Subscriber',
        from_email: newsletterEmail.trim(),
        email: newsletterEmail.trim(),
        user_email: newsletterEmail.trim(),
        client_email: newsletterEmail.trim(),
        reply_to: newsletterEmail.trim(),
        phone: 'Newsletter',
        website: `https://willayhaider.pro/blog/${post.slug}`,
        subject: `New Newsletter Subscriber: ${newsletterEmail.trim()}`,
        message: `A new reader subscribed to your Outbound Insights newsletter!\n\nEmail: ${newsletterEmail.trim()}\nArticle Source: ${post.title}\nArticle URL: https://willayhaider.pro/blog/${post.slug}\nTimestamp: ${submissionTime}`,
        timestamp: submissionTime,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE_ID,
        newsletterParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (err) {
      console.warn('Newsletter delivery note:', err);
      setNewsletterStatus("success");
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim() || commentStatus === "sending") return;

    setCommentStatus("sending");

    const newComment: CommentItem = {
      id: "c_" + Date.now(),
      name: commentName.trim(),
      role: commentRole.trim() || "B2B Reader",
      date: "Just now",
      content: commentText.trim(),
      likes: 1,
    };

    setComments([newComment, ...comments]);
    setCommentStatus("success");

    try {
      const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const commentNotificationParams = {
        to_email: 'contact.whaider@gmail.com',
        from_name: commentName.trim(),
        name: commentName.trim(),
        first_name: commentName.trim().split(" ")[0],
        from_email: 'contact.whaider@gmail.com',
        email: 'contact.whaider@gmail.com',
        user_email: 'contact.whaider@gmail.com',
        client_email: 'contact.whaider@gmail.com',
        reply_to: 'contact.whaider@gmail.com',
        phone: commentRole.trim() || 'Reader',
        website: `https://willayhaider.pro/blog/${post.slug}`,
        subject: `New Blog Comment on: ${post.title}`,
        message: `${commentName.trim()} (${commentRole.trim() || 'Reader'}) commented on "${post.title}":\n\n"${commentText.trim()}"\n\nArticle URL: https://willayhaider.pro/blog/${post.slug}\nTimestamp: ${submissionTime}`,
        timestamp: submissionTime,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE_ID,
        commentNotificationParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
    } catch (err) {
      console.warn('Comment notification delivery note:', err);
    }

    setCommentText("");
  };

  const handleLikeComment = (commentId: string) => {
    if (likedCommentIds[commentId]) return;
    setLikedCommentIds({ ...likedCommentIds, [commentId]: true });
    setComments(
      comments.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
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

          {/* Natural Editorial Author Signature (E-E-A-T) */}
          <div className="mt-10 pt-6 border-t border-border flex items-center gap-3.5">
            <img
              src={heroPortrait}
              alt="Willay Haider - Senior BDR"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover border border-border bg-secondary/40 shrink-0"
              loading="lazy"
            />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Article Author</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">Willay Haider</h3>
              <p className="text-xs text-muted-foreground font-medium">Senior BDR &amp; Outbound Specialist</p>
            </div>
          </div>

          {/* Sleek Community Hub: Newsletter + Discussion */}
          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-5 sm:p-7 shadow-xs">
            {/* Newsletter Subscription Box */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                    Get Field-Tested Outbound Playbooks
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Join 1,200+ B2B founders receiving weekly cold calling teardowns, script frameworks, and RevOps workflow guides.
                  </p>

                  <form onSubmit={handleNewsletterSubmit} className="mt-3.5 flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your work email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "sending"}
                      className="btn-click-effect inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-90 active:scale-95 disabled:opacity-50 shrink-0"
                    >
                      {newsletterStatus === "sending" ? "Subscribing..." : "Subscribe Free"}
                    </button>
                  </form>

                  {newsletterStatus === "success" && (
                    <p className="mt-2 text-xs font-semibold text-emerald-500 inline-flex items-center gap-1 animate-fade-in">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Subscribed! Welcome to Outbound Insights.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Discussion Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Discussion ({comments.length})
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Share your outbound insights or questions with fellow sales operators.
                </p>
              </div>
            </div>

            {/* Comment Input Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Role & Company (e.g. Head of Sales @ TechScale)"
                  value={commentRole}
                  onChange={(e) => setCommentRole(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <textarea
                placeholder="Write your comment, question, or experience with this framework..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                rows={3}
                className="w-full rounded-xl border border-border bg-background p-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-y"
              />
              <div className="flex items-center justify-between">
                {commentStatus === "success" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 animate-fade-in">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Comment posted successfully!
                  </span>
                ) : (
                  <span className="text-[11px] text-muted-foreground">
                    Constructive thoughts and sales questions are welcome.
                  </span>
                )}
                <button
                  type="submit"
                  disabled={commentStatus === "sending"}
                  className="btn-click-effect inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-90 active:scale-95 disabled:opacity-50"
                >
                  {commentStatus === "sending" ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => {
                const initials = comment.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();
                const isLiked = likedCommentIds[comment.id];

                return (
                  <div
                    key={comment.id}
                    className="rounded-xl border border-border/70 bg-secondary/20 p-4 transition-all hover:bg-secondary/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-xs text-primary">
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                            {comment.name}
                          </p>
                          <p className="text-[10px] sm:text-[11px] text-muted-foreground truncate">
                            {comment.role} • {comment.date}
                          </p>
                        </div>
                      </div>

                      {/* Like button */}
                      <button
                        type="button"
                        onClick={() => handleLikeComment(comment.id)}
                        className={`btn-click-effect inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                          isLiked
                            ? "bg-primary/20 text-primary"
                            : "bg-background/60 text-muted-foreground hover:text-foreground"
                        }`}
                        title="Helpful insight"
                      >
                        <ThumbsUp className="h-3 w-3" />
                        <span>{comment.likes}</span>
                      </button>
                    </div>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-foreground/90 font-normal">
                      {comment.content}
                    </p>
                  </div>
                );
              })}
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
