import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View examples of our electrical work across Canterbury, Kent and surrounding areas. Professional installations, rewiring, and more.',
};

const galleryItems = [
  { label: 'Consumer Unit Upgrade' },
  { label: 'Full House Rewire' },
  { label: 'LED Lighting Installation' },
  { label: 'Garden Lighting' },
  { label: 'Socket Installation' },
  { label: 'EICR Inspection' },
  { label: 'Security Lighting' },
  { label: 'Kitchen Electrics' },
  { label: 'Outdoor Sockets' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="A selection of recent projects from across Canterbury, Kent and surrounding areas."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-yellow/50 transition-colors"
              >
                <div className="text-center text-gray-400 p-4">
                  <svg
                    className="w-10 h-10 mx-auto mb-2 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-3">
            Like What You See?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Get in touch for a free quote on your electrical project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:07384397487" variant="primary" size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 07384 397487
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Request a Quote
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
