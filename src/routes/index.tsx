import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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
  Search,
} from "lucide-react";
import heroPortraitAsset from "@/assets/willay-portrait-nobg.png.asset.json";
const heroPortrait = heroPortraitAsset.url;

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function CountUp({
  end,
  decimals = 0,
  suffix = "",
  duration = 1600,
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(end * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

const NAV = [
  { label: "About Me", href: "/about" },
  { label: "Experience", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
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
    icon: Search,
    title: "Deep Project Research",
    desc: "Before a single dial, I deeply research the project, product, ICP, and market to understand every possibility, angle, and objection.",
  },
  {
    icon: PhoneCall,
    title: "Cold Calling",
    desc: "Persuasive outbound calls to decision-makers, from opener to booked meeting, with strong objection handling.",
  },
  {
    icon: Target,
    title: "Lead Generation & Qualification",
    desc: "Sourcing high-intent prospects via LinkedIn, email, tools and databases, then qualifying for decision maker, need, and budget.",
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
      "Mr Haider consistently books qualified meetings. His discovery is sharp and prospects arrive to demos already warmed up.",
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
      <Certifications />
      <Offer />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-foreground">
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
          className="rounded-full border border-primary/40 px-3 py-1.5 text-[11px] font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:px-4 sm:py-2 sm:text-xs"
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
      className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:gap-12 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: text */}
        <div className="relative z-10 animate-fade-in">
          <p className="text-xs font-medium text-primary sm:text-sm">Hello, I'm</p>
          <h1 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:mt-3 sm:text-5xl md:text-6xl lg:text-7xl">
            Willay <br /> Haider
          </h1>
          <div className="mt-4 space-y-1 sm:mt-6">
            <p
              className="text-2xl font-semibold sm:text-3xl md:text-4xl"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business Development
            </p>
            <p
              className="text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Representative
            </p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Professional cold caller and BDR with 1.5+ years of experience
            delivering outbound sales projects for companies around the world,
            from lead generation and qualification to booking qualified meetings
            with founders, CEOs and decision makers for closing high ticket deals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 sm:px-6 sm:py-3"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Book a Call
            </a>
            <a
              href="mailto:Connects.haider@gmail.com"
              className="rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary sm:px-6 sm:py-3"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:flex sm:flex-wrap sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                <CountUp end={1.5} decimals={1} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                <CountUp end={50} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary sm:text-3xl">Global</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Client Base</p>
            </div>
          </div>
        </div>

        {/* Center: portrait */}
        <div className="relative mx-auto flex items-center justify-center order-first md:order-none animate-scale-in">
          <div
            className="absolute inset-0 -z-0 rounded-full blur-3xl animate-pulse"
            style={{ background: "var(--gradient-primary)", opacity: 0.35 }}
          />
          <img
            src={heroPortrait}
            alt="Willay Haider — Business Development Representative"
            width={800}
            height={1000}
            className="relative z-10 h-auto w-[220px] object-contain transition-transform duration-500 hover:scale-[1.03] sm:w-[280px] md:w-[360px] lg:w-[440px]"
          />
        </div>

        {/* Right: socials rail */}
        <div className="hidden flex-col items-end gap-4 md:flex">
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{ animationDelay: `${i * 80}ms` }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_var(--primary)] animate-fade-in"
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
      <div className="mx-auto mt-12 max-w-7xl px-5 sm:mt-16 sm:px-6">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
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
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Projects I've
          <br />
          <span className="text-primary">Delivered</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.no} delay={i * 100} as="article"
              className="group relative overflow-hidden rounded-3xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_var(--primary)] sm:p-8"
            >
            <div style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }} className="rounded-3xl -m-6 sm:-m-8 p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-muted-foreground/60 sm:text-5xl">{p.no}</span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">{p.title}</h3>
              <p className="mt-4 text-xs uppercase tracking-wider text-primary">Techstack used</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.stack}</p>
              <p className="mt-4 text-sm text-muted-foreground/80">{p.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              >
                View project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            </Reveal>
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
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-primary">My Work</span>
          <br />
          Experience
        </h2>

        <div className="mx-auto mt-8 flex w-full max-w-md items-center justify-between rounded-full border border-border bg-card/40 p-1.5 sm:mt-12">
          <button
            onClick={() => setTab("exp")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
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
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
              tab === "edu"
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={tab === "edu" ? { background: "var(--gradient-primary)" } : undefined}
          >
            <GraduationCap className="h-4 w-4" /> Education
          </button>
        </div>

        <div className="relative mt-10 space-y-8 border-l border-border/60 pl-6 sm:mt-12 sm:space-y-10 sm:pl-8">
          {items.map((it, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.09_0.02_250)] sm:-left-[38px]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold sm:text-xl">{it.role}</h3>
                  <p className="text-sm text-primary">{it.org}</p>
                </div>
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">{it.date}</p>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:mt-3">{it.desc}</p>
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
    <section id="certifications" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary"
            style={{ background: "var(--gradient-card)" }}
          >
            <Award className="h-3.5 w-3.5" /> Credentials
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Verified certifications and training that back my sales, analytics, and technology skill set.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border p-5 transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-6"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
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
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          What I <span className="text-primary">Offer</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {OFFER.map((o) => (
            <div
              key={o.title}
              className="relative overflow-hidden rounded-3xl border border-border p-6 transition-all hover:border-primary/50 sm:p-8"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold sm:mt-6 sm:text-xl">{o.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about-me" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-8 flex flex-col items-start gap-3 sm:mb-10">
          <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-medium text-primary">
            About Me
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Who is <span className="text-primary">Willay Haider</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {[
            "Experienced Business Development Manager with a strong focus on B2B, B2C, and Appointment Setting. I've successfully managed numerous projects, consistently delivering exceptional results. My expertise lies in building meaningful client relationships and driving growth through effective strategies via Cold Calling, Email Marketing, and Social Outreach.",
            "My core strengths lie in crafting effective strategies, nurturing client relationships, and driving business growth. I thrive on connecting with clients, understanding their unique needs, and creating tailored solutions that foster long-term success.",
            "Ecommerce expert helping brands grow their online presence, optimize conversions, and scale sales through data-driven marketing strategies and customer focused solutions. Passionate about driving performance, improving ROI, and building long-term digital success.",
          ].map((p, i) => (
            <p
              key={i}
              className="rounded-2xl border border-border p-5 text-sm leading-relaxed text-muted-foreground sm:p-6"
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
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-primary">What They Say</span>
          <br />
          About Me
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border p-6 sm:p-8"
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
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Let's <span className="text-primary">Work Together</span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Need qualified meetings on your calendar? Let's talk about your outbound goals.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
          <a
            href="mailto:Connects.haider@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left transition-all hover:border-primary"
            style={{ background: "var(--gradient-card)" }}
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="truncate text-sm font-medium">Connects.haider@gmail.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/923206990099"
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left"
            style={{ background: "var(--gradient-card)" }}
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
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

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
        All Rights Reserved by <span className="text-primary">Willay Haider</span> © 2026
      </div>
    </footer>
  );
}
