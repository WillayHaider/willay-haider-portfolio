import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  ArrowUpRight,
  Code2,
  Palette,
  Wrench,
  Star,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    no: "01",
    tag: "Web",
    title: "Portfolio Website",
    stack: "React JS, Tailwind CSS, React Router DOM, React Icons, AOS",
    desc: "A fully responsive personal portfolio with smooth animations and dark theme.",
  },
  {
    no: "02",
    tag: "Web",
    title: "E-Commerce Platform",
    stack: "React JS, Node JS, Express, MongoDB, Stripe",
    desc: "Full-stack shop with cart, checkout, auth, and admin dashboard.",
  },
  {
    no: "03",
    tag: "Web",
    title: "Coaching Landing Page",
    stack: "React JS, Tailwind CSS, Framer Motion",
    desc: "High-converting landing page for coaches with bookings and testimonials.",
  },
  {
    no: "04",
    tag: "App",
    title: "Weather Dashboard",
    stack: "React JS, Tailwind CSS, OpenWeather API",
    desc: "Live weather, forecast, and geolocation with a clean UI.",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Web Developer",
    org: "Phaton",
    date: "Oct – Jan 26",
    desc: "Collaborated with a team to build a fully functional e-commerce platform, developing responsive and dynamic interfaces using React.js and Tailwind CSS.",
  },
  {
    role: "Frontend Web Developer",
    org: "Skillify Zone",
    date: "Aug – July 2025",
    desc: "Completed a 4-project internship: personal portfolio, landing page, weather app, and a music website clone using HTML, CSS, and JavaScript.",
  },
];

const EDUCATION = [
  {
    role: "BS Computer Science",
    org: "University of Sindh",
    date: "2023 – 2027",
    desc: "Focused on web technologies, algorithms, and software engineering fundamentals.",
  },
  {
    role: "Intermediate — Pre Engineering",
    org: "Govt. College",
    date: "2021 – 2023",
    desc: "Graduated with distinction in mathematics and physics.",
  },
];

const OFFER = [
  {
    icon: Palette,
    title: "Creative Design",
    desc: "Modern, distinctive interfaces that balance aesthetics with usability.",
  },
  {
    icon: Code2,
    title: "Development Skills",
    desc: "Website creation with React JS, Tailwind CSS & Node JS. Professional websites with lots of creativity.",
  },
  {
    icon: Wrench,
    title: "Development Tools",
    desc: "I leverage powerful tools to streamline my workflow, improve productivity, and deliver high-quality projects.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "Project Supervisor",
    stars: 5,
    quote:
      "Highly professional and reliable. He adapts quickly, communicates well, and consistently delivers high-quality frontend solutions.",
  },
  {
    name: "Sara Ali",
    role: "Peer / Collaborator",
    stars: 5,
    quote:
      "Combines technical skill with creativity. His projects reflect attention to detail, clean code, and user-friendly design.",
  },
  {
    name: "Bilal Raza",
    role: "Client",
    stars: 5,
    quote:
      "Delivered ahead of schedule with a polished result. Would definitely work with him again on future projects.",
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
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
          Portfolio<span className="text-foreground">.dev</span>
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
            Your <br /> Name Here
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
              Creative
            </p>
            <p className="text-3xl font-bold md:text-4xl">MERN Stack Developer</p>
          </div>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            I'm a MERN Stack Developer passionate about experimenting with new
            technologies and crafting beautiful, performant web experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
            </a>
            <a
              href="#"
              className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium transition-colors hover:border-primary"
            >
              Download Resume
            </a>
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
          <span className="text-primary">Creativity</span>
          <br />
          Is My Passion
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
          I make Incredible
          <br />
          <span className="text-primary">Projects</span>
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
              <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_oklch(0.09_0.02_280)]" />
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
          Have a project in mind? I'd love to hear about it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="mailto:hello@yourname.dev"
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left transition-all hover:border-primary"
            style={{ background: "var(--gradient-card)" }}
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-sm font-medium">hello@yourname.dev</p>
            </div>
          </a>
          <div
            className="flex items-center gap-3 rounded-2xl border border-border p-5 text-left"
            style={{ background: "var(--gradient-card)" }}
          >
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
              <p className="text-sm font-medium">Sukkur, Sindh, Pakistan</p>
            </div>
          </div>
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
        All Rights Reserved by <span className="text-primary">Your Name</span> © 2026
      </div>
    </footer>
  );
}
