import { createFileRoute } from '@tanstack/react-router'
import photo1 from '../assets/willay-haider-portrait-green-jacket.jpg'
import photo2 from '../assets/willay-haider-casual-outdoor.jpg'
import photo3 from '../assets/willay-haider-closeups-shoot.jpg'
import photo4 from '../assets/willay-haider-mountains-travel.jpg'
import photo5 from '../assets/willay-haider-personal-car.jpg'
import photo6 from '../assets/willay-haider-modern-image.jpg'
import photo7 from '../assets/willay-haider-speaking-event.jpg'
import photo8 from '../assets/willay-haider-traditional-outfit-outdoor.jpg'
import photo9 from '../assets/willay-haider-with-car.jpg'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

const photos = [
  { src: photo1, alt: 'Willay Haider portrait in a green jacket' },
  { src: photo2, alt: 'Willay Haider in a casual outdoor setting' },
  { src: photo3, alt: 'Willay Haider close-up portrait shoot' },
  { src: photo4, alt: 'Willay Haider on a mountain travel trip' },
  { src: photo5, alt: 'Willay Haider standing next to his personal car' },
  { src: photo6, alt: 'Willay Haider in a modern casual look' },
  { src: photo7, alt: 'Willay Haider speaking at a business event' },
  { src: photo8, alt: 'Willay Haider in traditional outfit outdoors' },
  { src: photo9, alt: 'Willay Haider standing next to a car' },
]

function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="rounded-lg object-cover w-full h-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
