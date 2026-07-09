import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  Phone,
  PhoneCall,
  Target,
  TrendingUp,
  Star,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import heroPortraitAsset from "@/assets/willay-portrait.jpeg.asset.json";
const heroPortrait = heroPortraitAsset.url;

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    no: "01",
    tag: "Outbound",
    title: "SaaS Cold Calling Campaign",
    stack: "LinkedIn Sales Nav, HubSpot, Apollo, Aircall",
    desc: "Ran multi-region cold calling campaigns booking qualified demos for B2B SaaS clients across US, UK, and EU markets.",
  },
  {
    no: "02",
    tag: "Lead Gen",
    title: "B2B Lead Generation Pipeline",
    stack: "LinkedIn, Apollo.io, Lusha, Email Outreach",
    desc: "Sourced and qualified 500+ decision-maker leads via LinkedIn, email, and cold calls — delivering MQLs and SQLs to senior AEs.",
  },
  {
    no: "03",
    tag: "Appointment Setting",
    title: "Discovery Meeting Booking",
    stack: "Calendly, Zoom, HubSpot CRM",
    desc: "Booked and confirmed discovery calls & product demos for senior sales reps with an average show-up rate above 70%.",
  },
  {
    no: "04",
    tag: "E-commerce Sales",
    title: "Online/Offline Sales Campaigns",
    stack: "WhatsApp, TikTok, Meta, Facebook Marketplace",
    desc: "Drove consistent weekly orders through multi-channel outreach — full cycle from discovery and demo to negotiation and payment.",
  },
];

const EXPERIENCE = [
  {
    role: "Business Development Representative — B2B Industry",
    org: "International B2B Clients (US / UK / EU)",
    date: "2024 – Present",
    desc: "Driving outbound B2B pipeline for SaaS and service companies across US, UK, and EU markets. Cold calling C-level and department heads, running discovery, qualifying with BANT, delivering MQLs & SQLs, and booking demos for senior AEs. Consistent CRM hygiene across HubSpot and Salesforce.",
  },
  {
    role: "Business Development Representative — Truck Dispatching",
    org: "US Trucking & Logistics Carriers",
    date: "2024 – Present",
    desc: "Dispatching for US-based owner-operators and small fleets — sourcing high-paying loads from DAT and Truckstop, negotiating rates with brokers, handling rate confirmations, BOLs, and check calls. Built long-term carrier–broker relationships and maximized weekly gross per truck.",
  },
  {
    role: "Sales Development Representative",
    org: "International B2B Clients",
    date: "2023 – 2024",
    desc: "Full outbound SDR motion — lead generation via LinkedIn Sales Navigator, Apollo, and email databases; cold calls and cold email sequences; qualifying decision maker, need, and budget; delivering MQLs & SQLs; scheduling demos; and keeping the CRM updated with live call notes.",
  },
  {
    role: "Sales — Online / Offline Marketing",
    org: "Independent",
    date: "2022 – 2023",
    desc: "Led online and offline sales campaigns via WhatsApp, TikTok, Meta, and Facebook Marketplace plus in-person outreach. Owned the full cycle — discovery, demos, pricing, negotiation, invoicing, and payments — with accurate daily logs.",
  },
];

const EDUCATION = [
  {
    role: "Intermediate in Computer Science",
    org: "Punjab Group of Colleges",
    date: "2024 – 2026",
    desc: "Currently pursuing Intermediate in Computer Science with focus on IT fundamentals and business communication.",
  },
  {
    role: "Matriculation",
    org: "Beacon Hall Secondary School",
    date: "2022 – 2024",
    desc: "Completed matriculation with a strong foundation in computer studies and languages.",
  },
];

const OFFER = [
  {
    icon: PhoneCall,
    title: "Cold Calling",
    desc: "Persuasive outbound calls to decision-makers — from opener to booked meeting, with strong objection handling.",
  },
  {
    icon: Target,
    title: "Lead Generation & Qualification",
    desc: "Sourcing high-intent prospects via LinkedIn, email, and databases — then qualifying for decision maker, need, and budget.",
  },
  {
    icon: TrendingUp,
    title: "Appointment Setting & CRM",
    desc: "Delivering MQLs & SQLs, booking demos for senior AEs, and keeping the CRM updated with real-time call notes.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sales Manager",
    role: "B2B SaaS Client",
    stars: 5,
    quote:
      "Willay consistently books qualified meetings. His discovery is sharp and prospects arrive to demos already warmed up.",
  },
  {
    name: "Founder",
    role: "Startup Client",
    stars: 5,
    quote:
      "Reliable, persuasive, and genuinely good on the phone. Our outbound pipeline changed after Willay joined the effort.",
  },
  {
    name: "Senior AE",
    role: "Teammate",
    stars: 5,
    quote:
      "Great CRM hygiene, clean notes, and MQLs that actually convert. Exactly the SDR partner every AE wants.",
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/willayhaider" },
  { icon: Mail, label: "Email", href: "mailto:Connects.haider@gmail.com" },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/923206990099" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/40">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Offer />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-primary">
          Willay<span className="text-foreground">.Haider</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-primary/40 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-32 pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: text */}
        <div className="relative z-10">
          <p className="text-sm font-medium text-primary">Hello, I'm</p>
          <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Willay <br /> Haider
          </h1>
          <div className="mt-6 space-y-1">
            <p
              className="text-3xl font-semibold md:text-4xl"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business Development
            </p>
            <p className="text-3xl font-bold md:text-4xl">Representative</p>
          </div>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Professional cold caller and SDR with 1.5+ years of experience
            delivering outbound sales projects for companies around the world —
            from lead generation and qualification to booking qualified demos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Book a Call
            </a>
            <a
              href="mailto:Connects.haider@gmail.com"
              className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium transition-colors hover:border-primary"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">1.5+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Global</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Client Base</p>
            </div>
          </div>
        </div>

        {/* Center: portrait */}
        <div className="relative mx-auto flex items-center justify-center">
          <div
            className="absolute inset-0 -z-0 rounded-full blur-3xl"
            style={{ background: "var(--gradient-primary)", opacity: 0.35 }}
          />
          <img
            src={heroPortrait}
            alt="Portfolio hero portrait"
            width={800}
            height={1200}
            className="relative z-10 h-auto w-[280px] object-contain md:w-[360px] lg:w-[420px]"
          />
        </div>

        {/* Right: socials rail */}
        <div className="hidden flex-col items-end gap-4 md:flex">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <div className="mt-4 rotate-90 pt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Resume
          </div>
        </div>
      </div>

      {/* Sub headline */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <span className="text-primary">Conversations</span>
          <br />
          That Close Deals
        </h2>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Projects I've
          <br />
          <span className="text-primary">Delivered</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.no}
              className="group relative overflow-hidden rounded-3xl border border-border p-8 transition-all hover:border-primary/50"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-bold text-muted-foreground/60">{p.no}</span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-4 text-xs uppercase tracking-wider text-primary">Techstack used</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.stack}</p>
              <p className="mt-4 text-sm text-muted-foreground/80">{p.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
              >
                View project <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const items = tab === "exp" ? EXPERIENCE : EDUCATION;
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <span className="text-primary">My Work</span>
          <br />
          Experience
        </h2>

        <div className="mx-auto mt-12 flex w-full max-w-md items-center justify-between rounded-full border border-border bg-card/40 p-1.5">
          <button
            onClick={() => setTab("exp")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              tab === "exp"
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={tab === "exp" ? { background: "var(--gradient-primary)" } : undefined}
          >
            <Briefcase className="h-4 w-4" /> Experience
          </button>
          <button
            onClick={() => setTab("edu")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              tab === "edu"
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={tab === "edu" ? { background: "var(--gradient-primary)" } : undefined}
          >
            <GraduationCap className="h-4 w-4" /> Education
          </button>
        </div>

        <div className="relative mt-12 space-y-10 border-l border-border/60 pl-8">
          {items.map((it, i) => (
            <div key={i} className="relative">
          <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.09_0.02_250)]" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{it.role}</h3>
                  <p className="text-sm text-primary">{it.org}</p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{it.date}</p>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          What I <span className="text-primary">Offer</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {OFFER.map((o) => (
            <div
              key={o.title}
              className="relative overflow-hidden rounded-3xl border border-border p-8 transition-all hover:border-primary/50"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{o.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <span className="text-primary">What They Say</span>
          <br />
          About Me
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border p-8"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm font-semibold">5.0</span>
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Let's <span className="text-primary">Work Together</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Need qualified meetings on your calendar? Let's talk about your outbound goals.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="mailto:Connects.haider@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left transition-all hover:border-primary"
            style={{ background: "var(--gradient-card)" }}
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-sm font-medium">Connects.haider@gmail.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/923206990099"
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left"
            style={{ background: "var(--gradient-card)" }}
          >
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
              <p className="text-sm font-medium">+92 320 699 00 99</p>
            </div>
          </a>
        </div>

        <div className="mt-10">
          <p className="text-sm font-medium text-primary">Social Media</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm transition-all hover:border-primary hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
        All Rights Reserved by <span className="text-primary">Willay Haider</span> © 2026
      </div>
    </footer>
  );
}
