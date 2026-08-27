import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import photo1 from '../assets/willay-haider-portrait-green-jacket.jpg'
import photo2 from '../assets/willay-haider-casual-outdoor.jpg'
import photo4 from '../assets/willay-haider-mountains-travel.jpg'
import photo5 from '../assets/willay-haider-personal-car.jpg'
import photo6 from '../assets/willay-haider-modern-image.jpg'
import photo7 from '../assets/willay-haider-speaking-event.jpg'
import photo8 from '../assets/willay-haider-traditional-outfit-outdoor.jpg'
import photo9 from '../assets/willay-haider-with-car.jpg'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: "Gallery & Professional Media | Willay Haider" },
      {
        name: "description",
        content:
          "Photo gallery and professional event captures of Willay Haider, Senior Business Development Representative and outbound sales strategist.",
      },
      {
        name: "keywords",
        content: "Willay Haider photos, Willay Haider gallery, BDR professional images, outbound specialist event speaker",
      },
      { name: "author", content: "Willay Haider" },
      { property: "og:title", content: "Gallery & Professional Media | Willay Haider" },
      {
        property: "og:description",
        content:
          "Photo gallery and professional event captures of Willay Haider, Senior Business Development Representative.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://willayhaider.pro/gallery" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gallery & Professional Media | Willay Haider" },
      {
        name: "twitter:description",
        content:
          "Photo gallery and professional event captures of Willay Haider, Senior Business Development Representative.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/772dab88-26f3-44b7-a9ba-19d723b3c24f" },
    ],
    links: [{ rel: "canonical", href: "https://willayhaider.pro/gallery" }],
  }),
  component: GalleryPage,
})

const photos = [
  { src: photo1, alt: 'Willay Haider portrait in a green jacket' },
  { src: photo2, alt: 'Willay Haider in a casual outdoor setting' },
  { src: photo4, alt: 'Willay Haider on a mountain travel trip' },
  { src: photo5, alt: 'Willay Haider standing next to his personal car' },
  { src: photo6, alt: 'Willay Haider in a modern casual look' },
  { src: photo7, alt: 'Willay Haider speaking at a business event' },
  { src: photo8, alt: 'Willay Haider in traditional outfit outdoors' },
  { src: photo9, alt: 'Willay Haider standing next to a car' },
]

function GalleryPage() {
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
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">
            Personal & Professional <span className="text-primary">Gallery</span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="rounded-xl object-cover w-full h-48 sm:h-64 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
