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
  Award,
} from "lucide-react";
import heroPortraitAsset from "@/assets/willay-portrait-nobg.png.asset.json";
const heroPortrait = heroPortraitAsset.url;

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About Me", href: "#about-me" },
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
    role: "Senior Business Development Representative",
    org: "Million Dials · Full-time",
    date: "Jun 2025 – Present · 1 yr 2 mos",
    desc: "Punjab, Pakistan · On-site. Leading outbound sales motions and mentoring junior BDRs — cold calling, discovery, and pipeline development across B2B accounts.",
  },
  {
    role: "Business Development Representative",
    org: "Focal Software · Full-time",
    date: "Sep 2024 – Sep 2025 · 1 yr 1 mo",
    desc: "As a committed B2B Appointment Specialist, connecting eCommerce business owners with advanced solutions from Focal Software. Multi-channel outreach across cold calling and email — CRM, B2B, and appointment setting.",
  },
  {
    role: "Business Development Representative",
    org: "FontanaShowers · Full-time",
    date: "Jul 2023 – Dec 2024 · 1 yr 6 mos",
    desc: "Part of the Commercial Marketing team at Fontana Showers — cold calling architects and designers, understanding their interests and project plans, and driving business development support.",
  },
  {
    role: "Sales Development Representative",
    org: "Shibli Global Network · Full-time",
    date: "May 2024 – Oct 2024 · 6 mos",
    desc: "Business Development professional specializing in B2B, B2C, and appointment setting. Handled multiple projects while consistently delivering strong results — CRM and B2C marketing focus.",
  },
  {
    role: "Business Development Representative — Truck Dispatching",
    org: "US Trucking & Logistics Carriers",
    date: "2023 – 2024",
    desc: "Dispatched for US-based owner-operators and small fleets — sourced high-paying loads from DAT and Truckstop, negotiated rates with brokers, and handled rate confirmations, BOLs, and check calls.",
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
      <About />
      <Projects />
      <Experience />
      <Certifications />
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
        <a href="#" className="text-sm font-semibold tracking-wide text-foreground">
          Willay<span className="text-primary">.Haider</span>
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
            <p
              className="text-3xl font-bold md:text-4xl"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Representative
            </p>
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
            alt="Willay Haider — Business Development Representative"
            width={800}
            height={1000}
            className="relative z-10 h-auto w-[280px] object-contain md:w-[360px] lg:w-[440px]"
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
  return OfferInner();
}

const CERTIFICATIONS = [
  { title: "Google Analytics Certification", org: "Google" },
  { title: "Data Analytics Job Simulation", org: "Deloitte" },
  { title: "Matriculation", org: "BHSS" },
  { title: "Cybersecurity", org: "ADBI Institute" },
  { title: "Exploring AI Use Cases and Applications", org: "AWS" },
];

function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary"
            style={{ background: "var(--gradient-card)" }}
          >
            <Award className="h-3.5 w-3.5" /> Credentials
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Verified certifications and training that back my sales, analytics, and technology skill set.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Certificate 0{i + 1}
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{c.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferInner() {
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

function About() {
  return (
    <section id="about-me" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col items-start gap-3">
          <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-medium text-primary">
            About Me
          </span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Who is <span className="text-primary">Willay Haider</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            "Experienced Business Development Manager with a strong focus on B2B, B2C, and Appointment Setting. I've successfully managed numerous projects, consistently delivering exceptional results. My expertise lies in building meaningful client relationships and driving growth through effective strategies via Cold Calling, Email Marketing, and Social Outreach.",
            "My core strengths lie in crafting effective strategies, nurturing client relationships, and driving business growth. I thrive on connecting with clients, understanding their unique needs, and creating tailored solutions that foster long-term success.",
            "Passionate about innovation and collaboration, I'm dedicated to helping businesses reach new heights through strategic partnerships and meaningful engagements.",
            "Ecommerce expert helping brands grow their online presence, optimize conversions, and scale sales through data-driven marketing strategies and customer focused solutions. Passionate about driving performance, improving ROI, and building long-term digital success.",
          ].map((p, i) => (
            <p
              key={i}
              className="rounded-2xl border border-border p-6 text-sm leading-relaxed text-muted-foreground"
              style={{ background: "var(--gradient-card)" }}
            >
              {p}
            </p>
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
