import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { ServiceIcons } from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Electrical Services',
  description:
    'Professional electrical services in Sittingbourne, Kent. Electrical testing, socket installation, lighting, repairs, rewiring & emergency call-outs. Call 07951 596167.',
};

const services = [
  {
    icon: ServiceIcons.testing,
    title: 'Testing & Inspections',
    description: 'EICRs, landlord checks, PAT testing & safety certificates.',
  },
  {
    icon: ServiceIcons.sockets,
    title: 'Sockets & Outlets',
    description: 'New sockets, USB points, outdoor outlets & appliance circuits.',
  },
  {
    icon: ServiceIcons.lighting,
    title: 'Lighting',
    description: 'LED upgrades, dimmers, security lights & garden lighting.',
  },
  {
    icon: ServiceIcons.repairs,
    title: 'Repairs',
    description: 'Fault finding, circuit repairs, socket fixes & fuse box issues.',
  },
  {
    icon: ServiceIcons.rewiring,
    title: 'Rewiring',
    description: 'Full & partial rewires, consumer unit upgrades & earthing.',
  },
  {
    icon: ServiceIcons.emergency,
    title: 'Emergency',
    description: 'Power outages, sparking sockets, burning smells & tripped circuits.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Electrical Services"
        subtitle="Professional, reliable electrical services for homes and businesses throughout Sittingbourne and Kent."
      />

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-yellow/50 hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 bg-yellow/10 rounded-xl flex items-center justify-center text-yellow-dark mx-auto mb-4">
                  {service.icon}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <CTAButton href="/contact" variant="primary" size="sm" className="w-full">
                  Get a Quote
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300"
              >
                <div className="text-center text-gray-400 p-4">
                  <svg
                    className="w-12 h-12 mx-auto mb-2 opacity-50"
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
                  <p className="text-sm">Project Photo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-12 md:py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-3">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            No problem! Give us a call for free, friendly advice and a no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:07951596167" variant="primary" size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 07951 596167
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
