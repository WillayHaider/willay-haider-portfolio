import { createFileRoute, notFound } from '@tanstack/react-router'
import { useState, useEffect, lazy, Suspense } from 'react'
import { ArrowLeft, Clock, Calendar, ArrowRight, ThumbsUp, ThumbsDown, CheckCircle2, MessageSquare, X, ChevronDown, Mail } from 'lucide-react'
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
    const imgMatch = loaderData.content.match(/!\[.*?\]\((.*?)\)/);
    const featuredImg = imgMatch
      ? (imgMatch[1].startsWith("http") ? imgMatch[1] : `https://willayhaider.pro${imgMatch[1]}`)
      : "https://willayhaider.pro/gatekeepers-infographic.jpg";

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
        { property: "og:image", content: featuredImg },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle || loaderData.title },
        { name: "twitter:description", content: loaderData.metaDescription || loaderData.excerpt },
        { name: "twitter:image", content: featuredImg },
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
            description: loaderData.metaDescription || loaderData.excerpt,
            image: featuredImg,
            datePublished: loaderData.date,
            dateModified: loaderData.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://willayhaider.pro/blog/${loaderData.slug}`,
            },
            url: `https://willayhaider.pro/blog/${loaderData.slug}`,
            author: {
              "@type": "Person",
              name: "Willay Haider",
              url: "https://willayhaider.pro/about",
              jobTitle: "Senior B2B Growth & Outbound Specialist",
            },
            publisher: {
              "@type": "Person",
              name: "Willay Haider",
              url: "https://willayhaider.pro",
            },
            keywords: loaderData.keywords,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://willayhaider.pro",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://willayhaider.pro/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: loaderData.title,
                item: `https://willayhaider.pro/blog/${loaderData.slug}`,
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: Array.from(
              loaderData.content.matchAll(/###\s+([^\n\?]+\?)\n+([\s\S]*?)(?=\n###|\n##|\n---|$)/g)
            ).map((match) => ({
              "@type": "Question",
              name: match[1].replace(/\[(.*?)\]\(.*?\)/g, "$1").replace(/[*_`]/g, "").trim(),
              acceptedAnswer: {
                "@type": "Answer",
                text: match[2]
                  .replace(/!\[.*?\]\(.*?\)/g, "")
                  .replace(/\[(.*?)\]\(.*?\)/g, "$1")
                  .replace(/[*_`]/g, "")
                  .trim(),
              },
            })),
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
  
  // Regex to match bold, italic, links, and inline code safely
  const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`[^`\n]+`)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

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
        <code key={match.index} className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-primary font-semibold">
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
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
    }
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
  | { type: 'h4'; text: string }
  | { type: 'blockquote'; lines: string[] }
  | { type: 'code'; language: string; code: string }
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

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push({ type: 'code', language, code: codeLines.join("\n") });
      continue;
    }

    if (trimmed.startsWith("![") && trimmed.includes("](") && trimmed.endsWith(")")) {
      const alt = trimmed.substring(2, trimmed.indexOf("]("));
      const src = trimmed.substring(trimmed.indexOf("](") + 2, trimmed.length - 1);
      blocks.push({ type: 'image', alt, src });
      i++;
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      blocks.push({ type: 'h4', text: trimmed.replace(/^####\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: 'h3', text: trimmed.replace(/^###\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: 'h2', text: trimmed.replace(/^##\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      blocks.push({ type: 'h2', text: trimmed.replace(/^#\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while(i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("#") && !lines[i].trim().startsWith("```") && !lines[i].trim().startsWith("- ") && !lines[i].trim().startsWith("* ") && !lines[i].trim().startsWith("|") && !/^\d+\.\s+/.test(lines[i].trim()) && lines[i].trim() !== "---") {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const splitRow = (rowStr: string) => rowStr.slice(1, -1).split("|").map((c) => c.trim());
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

    const pLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("#") && !lines[i].trim().startsWith("```") && !lines[i].trim().startsWith(">") && !lines[i].trim().startsWith("- ") && !lines[i].trim().startsWith("* ") && !lines[i].trim().startsWith("|") && !/^\d+\.\s+/.test(lines[i].trim()) && lines[i].trim() !== "---") {
      pLines.push(lines[i].trim());
      i++;
    }
    if (pLines.length > 0) {
      blocks.push({ type: 'p', text: pLines.join(" ") });
    } else {
      // Fallback safeguard to guarantee forward progress
      blocks.push({ type: 'p', text: lines[i].trim() });
      i++;
    }
  }

  return blocks;
}

function RenderContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content);
  return (
    <article className="space-y-4 text-foreground">
      {blocks.map((block, idx) => {
        if (block.type === "hr") return <hr key={idx} className="my-6 border-border" />;
        if (block.type === "image") return (
            <div key={idx} className="my-6 flex justify-center">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm w-full">
                <img src={block.src} alt={block.alt} className="w-full h-auto object-contain" loading="lazy" decoding="async" />
              </div>
            </div>
          );
        if (block.type === "h2") return <h2 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3">{block.text}</h2>;
        if (block.type === "h3") return <h3 key={idx} className="text-base sm:text-lg font-bold tracking-tight text-foreground mt-5 mb-2">{block.text}</h3>;
        if (block.type === "h4") return <h4 key={idx} className="text-sm sm:text-base font-semibold tracking-tight text-primary mt-4 mb-1.5">{block.text}</h4>;
        if (block.type === "code") return (
            <div key={idx} className="my-5 overflow-hidden rounded-xl border border-border bg-[#080d1a] shadow-md">
              {block.language && (
                <div className="flex items-center justify-between border-b border-border/60 bg-[#0d162a] px-4 py-2 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  <span className="text-primary">{block.language}</span>
                  <span className="text-[10px] text-muted-foreground lowercase">copy-pasteable snippet</span>
                </div>
              )}
              <pre className="overflow-x-auto p-4 text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed selection:bg-primary/30">
                <code>{block.code}</code>
              </pre>
            </div>
          );
        if (block.type === "blockquote") return (
            <blockquote key={idx} className="border-l-2 border-border/80 bg-secondary/30 rounded-r-lg p-3.5 sm:p-4 my-3 text-sm sm:text-base leading-relaxed text-foreground italic space-y-1">
              {block.lines.map((qLine, qIdx) => <p key={qIdx}>{formatInline(qLine.replace(/^["“”']+|["“”']+$/g, "").trim())}</p>)}
            </blockquote>
          );
        if (block.type === "table") return (
            <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-border bg-card/70 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead><tr className="border-b border-border bg-secondary/60">{block.headers.map((h, hIdx) => <th key={hIdx} className="py-3 px-3.5 sm:px-4 font-bold text-foreground tracking-tight">{formatInline(h)}</th>)}</tr></thead>
                <tbody className="divide-y divide-border/50">{block.rows.map((r, rIdx) => <tr key={rIdx} className="hover:bg-secondary/30 transition-colors">{r.map((c, cIdx) => <td key={cIdx} className="py-2.5 sm:py-3 px-3.5 sm:px-4 text-foreground/90 leading-relaxed align-top">{formatInline(c)}</td>)}</tr>)}</tbody>
              </table>
            </div>
          );
        if (block.type === "ul") return <ul key={idx} className="my-3 space-y-1.5 list-disc list-inside text-sm sm:text-base leading-relaxed text-foreground">{block.items.map((i, idx) => <li key={idx} className="leading-relaxed">{formatInline(i)}</li>)}</ul>;
        if (block.type === "ol") return <ol key={idx} className="my-3 space-y-1.5 list-decimal list-inside text-sm sm:text-base leading-relaxed text-foreground">{block.items.map((i, idx) => <li key={idx} className="leading-relaxed">{formatInline(i)}</li>)}</ol>;
        return <p key={idx} className="text-sm sm:text-base leading-relaxed text-foreground font-normal">{formatInline(block.text)}</p>;
      })}
    </article>
  );
}

interface CommentItem {
  id: string;
  name: string;
  date: string;
  content: string;
  likes: number;
}

const DEFAULT_COMMENTS: Record<string, CommentItem[]> = {
  "how-b2b-cold-calling-actually-works": [
    {
      id: "c2",
      name: "Sarah J.",
      date: "Yesterday",
      content: "That 1-second pause after stating your name is pure gold. Totally changes their tone 🙌",
      likes: 12,
    },
    {
      id: "c1",
      name: "Marcus V.",
      date: "2 days ago",
      content: "Tried the 30-second opener this morning on 20 dials. Booked 2 meetings right away! 🔥",
      likes: 8,
    },
  ],
  "cold-calling-vs-email-outreach": [
    {
      id: "c2",
      name: "Dan M.",
      date: "1 day ago",
      content: "Email touch in the morning + direct dial in the afternoon works like a charm 👏",
      likes: 14,
    },
    {
      id: "c1",
      name: "Alex Chen",
      date: "3 days ago",
      content: "100% on the small TAM point. Burnt our email list last quarter, phone outreach saved us 💯",
      likes: 9,
    },
  ],
  "cold-calling-techniques": [
    {
      id: "c2",
      name: "Leo K.",
      date: "2 days ago",
      content: "Calm tonality really makes or breaks the call 👌",
      likes: 6,
    },
    {
      id: "c1",
      name: "Elena R.",
      date: "4 days ago",
      content: "Dropping the salesy pitch tone is so key. Prospects relax immediately 🎯",
      likes: 11,
    },
  ],
  "how-to-handle-gatekeepers-in-2026": [
    {
      id: "c2",
      name: "Maya S.",
      date: "1 day ago",
      content: "The ask for organizational guidance trick actually works so well 👏",
      likes: 9,
    },
    {
      id: "c1",
      name: "Tom B.",
      date: "3 days ago",
      content: "Treating receptionists with genuine respect changed my entire connect rate! ✨",
      likes: 7,
    },
  ],
  "top-7-appointment-setting-frameworks-to-double-sales-pipeline": [
    {
      id: "c2",
      name: "Chris D.",
      date: "Yesterday",
      content: "Clean actionable frameworks! Saving this for our outbound team 📌",
      likes: 8,
    },
    {
      id: "c1",
      name: "Kevin O.",
      date: "2 days ago",
      content: "The trigger-event framework is unmatched. Closed a hot lead right after their funding news 🚀",
      likes: 15,
    },
  ],
  "hubspot-workflows-for-outbound-sales-setup-guide": [
    {
      id: "c1",
      name: "Rachel G.",
      date: "1 day ago",
      content: "That master un-enrollment trigger is a total lifesaver haha 😅",
      likes: 18,
    },
    {
      id: "c2",
      name: "Sam W.",
      date: "2 days ago",
      content: "Super clear HubSpot setup. Setting these tags up right now 👍",
      likes: 10,
    },
  ],
  "how-to-warm-up-new-sales-email-domain-avoid-spam-filters": [
    {
      id: "c2",
      name: "Noah P.",
      date: "1 day ago",
      content: "Keeping bounce rate strictly under 2% is non-negotiable 🎯",
      likes: 7,
    },
    {
      id: "c1",
      name: "Liam S.",
      date: "2 days ago",
      content: "Great breakdown on DKIM and DMARC. Rushing warmup burns domains so fast ⚠️",
      likes: 10,
    },
  ],
  "how-to-build-high-converting-b2b-cold-calling-script": [
    {
      id: "c2",
      name: "Emma T.",
      date: "Yesterday",
      content: "The pattern interrupt opener is so good! 🔥",
      likes: 11,
    },
    {
      id: "c1",
      name: "Brian F.",
      date: "2 days ago",
      content: "Keeping the script under 45 seconds is so true. Less pitching, more listening 💡",
      likes: 13,
    },
  ],
  "outsourced-bdr-vs-in-house-appointment-setting-cost-benefit-analysis": [
    {
      id: "c1",
      name: "Jason T.",
      date: "Yesterday",
      content: "The hiring and ramp-up costs sneak up fast. Very realistic breakdown 👍",
      likes: 21,
    },
    {
      id: "c2",
      name: "Mark R.",
      date: "2 days ago",
      content: "100% agreed on the hidden ramp time costs 💯",
      likes: 9,
    },
  ],
};

function getStoredComments(slug: string): CommentItem[] {
  const defaults = DEFAULT_COMMENTS[slug] || [
    {
      id: "c1",
      name: "David V.",
      date: "2 days ago",
      content: "Awesome breakdown! Very practical and easy to apply 🔥",
      likes: 6,
    },
  ];

  if (typeof window === "undefined") return defaults;
  try {
    const saved = localStorage.getItem(`custom_comments_${slug}`);
    if (saved) {
      const parsed: CommentItem[] = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const uniqueCustom = parsed.filter(
          (c) => !defaults.some((d) => d.id === c.id)
        );
        return [...uniqueCustom, ...defaults];
      }
    }
  } catch {}
  return defaults;
}

function BlogPostPage() {
  const post = Route.useLoaderData()
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "success">("idle");

  const [comments, setComments] = useState<CommentItem[]>(() => {
    return getStoredComments(post.slug);
  });

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentStatus, setCommentStatus] = useState<"idle" | "sending" | "success">("idle");
  const [likedCommentIds, setLikedCommentIds] = useState<Record<string, boolean>>({});

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    setFeedback(null);
    setIsCommentsOpen(false);
    setShowAllComments(false);
    setComments(getStoredComments(post.slug));
    setCommentName("");
    setCommentText("");
    setCommentStatus("idle");
    setNewsletterEmail("");
    setNewsletterStatus("idle");

    try {
      const savedLikes = localStorage.getItem(`liked_comments_${post.slug}`);
      if (savedLikes) {
        setLikedCommentIds(JSON.parse(savedLikes));
      } else {
        setLikedCommentIds({});
      }
    } catch {}
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
      date: "Just now",
      content: commentText.trim(),
      likes: 1,
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentStatus("success");

    // Store custom comment permanently in localStorage
    try {
      const saved = localStorage.getItem(`custom_comments_${post.slug}`);
      const existing: CommentItem[] = saved ? JSON.parse(saved) : [];
      localStorage.setItem(
        `custom_comments_${post.slug}`,
        JSON.stringify([newComment, ...existing])
      );
    } catch {}

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
        phone: 'Blog Comment',
        website: `https://willayhaider.pro/blog/${post.slug}`,
        subject: `New Blog Comment on: ${post.title}`,
        message: `${commentName.trim()} commented on "${post.title}":\n\n"${commentText.trim()}"\n\nArticle URL: https://willayhaider.pro/blog/${post.slug}\nTimestamp: ${submissionTime}`,
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
    const newLiked = { ...likedCommentIds, [commentId]: true };
    setLikedCommentIds(newLiked);

    setComments((prev) => {
      const updated = prev.map((c) =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      );
      try {
        localStorage.setItem(`liked_comments_${post.slug}`, JSON.stringify(newLiked));
        const savedCustom = localStorage.getItem(`custom_comments_${post.slug}`);
        if (savedCustom) {
          const parsedCustom: CommentItem[] = JSON.parse(savedCustom);
          const updatedCustom = parsedCustom.map((c) =>
            c.id === commentId ? { ...c, likes: c.likes + 1 } : c
          );
          localStorage.setItem(`custom_comments_${post.slug}`, JSON.stringify(updatedCustom));
        }
      } catch {}
      return updated;
    });
  };

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const relatedPosts =
    currentIndex !== -1 && BLOG_POSTS.length > 1
      ? [
          BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length],
          BLOG_POSTS[(currentIndex + 2) % BLOG_POSTS.length],
        ]
      : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

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
              <a href="/hire-in-house" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Hire In-House
              </a>
              <a href="/blog" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Insights
              </a>
              <a href="/contact" className="rounded-lg p-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors">
                Contact Me
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

          {/* Small Sleek Newsletter Subscriber Box */}
          <div className="mt-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="max-w-sm text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-primary mb-2">
                  <Mail className="h-3 w-3" />
                  <span>Outbound Insights</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                  Get battle-tested sales playbooks
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Join founders &amp; sales leaders receiving tactical cold calling scripts and pipeline systems.
                </p>
              </div>

              <div className="w-full sm:w-auto sm:min-w-[290px]">
                {newsletterStatus === "success" ? (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-500 animate-fade-in">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>You're subscribed! Thanks for joining.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "sending"}
                      className="btn-click-effect inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-primary-foreground shadow-xs hover:opacity-95 active:scale-95 disabled:opacity-50 whitespace-nowrap transition-all"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <span>{newsletterStatus === "sending" ? "Subscribing..." : "Subscribe"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
                <p className="mt-1.5 text-[10.5px] text-muted-foreground text-left sm:text-right">
                  No spam. Actionable sales tactics only.
                </p>
              </div>
            </div>
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

          {/* Small Sleek Comments Icon Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsCommentsOpen(!isCommentsOpen)}
              className="btn-click-effect inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-xs hover:border-primary/50 hover:text-primary transition-all active:scale-95"
            >
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              <span>Comments ({comments.length})</span>
            </button>
          </div>

          {/* Expandable Comments Drawer / Panel */}
          {isCommentsOpen && (
            <div className="mt-6 rounded-2xl border border-border bg-card/80 p-4 sm:p-6 shadow-xs animate-fade-in">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    Comments ({comments.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCommentsOpen(false)}
                  className="btn-click-effect inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-medium px-2 py-1 rounded-md hover:bg-secondary transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Close</span>
                </button>
              </div>

              {/* Comment Input Form */}
              <form onSubmit={handleCommentSubmit} className="mb-6 space-y-2.5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                  rows={2}
                  className="w-full rounded-xl border border-border bg-background p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-y"
                />
                <div className="flex items-center justify-between">
                  {commentStatus === "success" ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 animate-fade-in">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Comment posted!
                    </span>
                  ) : (
                    <span className="text-[11px] text-muted-foreground">
                      Share your thoughts or feedback.
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
              <div className="space-y-3">
                {(showAllComments ? comments : comments.slice(0, 3)).map((comment) => {
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
                      className="rounded-xl border border-border/70 bg-secondary/20 p-3.5 transition-all hover:bg-secondary/30"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-xs text-primary">
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                              {comment.name}
                            </p>
                            <p className="text-[10px] sm:text-[11px] text-muted-foreground truncate">
                              {comment.date}
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

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/90 font-normal">
                        {comment.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Show more comments button when comments exceed 3 */}
              {comments.length > 3 && (
                <div className="mt-4 pt-1 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllComments(!showAllComments)}
                    className="btn-click-effect inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline py-1 px-3 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span>{showAllComments ? "Show less" : `Show more comments (${comments.length - 3} more)`}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllComments ? "rotate-180" : ""}`} />
                  </button>
                </div>
              )}
            </div>
          )}

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
