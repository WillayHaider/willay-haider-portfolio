import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
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
      { title: "Gallery: Willay Haider" },
      { name: "description", content: "Personal and professional photos of Willay Haider." },
    ],
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
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
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
                className="rounded-xl object-cover w-full h-48 sm:h-64 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
