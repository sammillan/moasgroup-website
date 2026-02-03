import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard, { ServiceIcons } from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Electrical Services',
  description:
    'Professional electrical services in Sittingbourne, Kent. Electrical testing, socket installation, lighting, repairs, rewiring & emergency call-outs. Call 07951 596167.',
};

const services = [
  {
    icon: ServiceIcons.testing,
    title: 'Electrical Testing & Inspections',
    description:
      'Comprehensive electrical testing and inspection services for homes and businesses. We provide Electrical Installation Condition Reports (EICR) and safety certificates to ensure your property meets current regulations.',
    placeholder: '[What specific certifications do you provide? Do you offer landlord certificates?]',
    details: [
      'EICR Certificates',
      'Landlord Safety Checks',
      'PAT Testing',
      'New Build Inspections',
    ],
  },
  {
    icon: ServiceIcons.sockets,
    title: 'Additional Sockets & Outlets',
    description:
      'Expert installation of new electrical sockets, USB charging points, and power outlets. Whether you need extra sockets in your kitchen, home office, or throughout your property, we can help.',
    placeholder: '[Any specialty installations you prefer? Smart sockets, outdoor sockets?]',
    details: [
      'Standard Sockets',
      'USB Charging Points',
      'Outdoor Weatherproof Sockets',
      'Dedicated Appliance Circuits',
    ],
  },
  {
    icon: ServiceIcons.lighting,
    title: 'Lighting Installation & Design',
    description:
      'Transform your space with professional lighting installation. From energy-efficient LED upgrades to decorative indoor lighting and practical outdoor security lights.',
    placeholder: '[Do you have photos of recent lighting projects? Any specialty areas?]',
    details: [
      'LED Upgrades',
      'Dimmer Switches',
      'Outdoor & Security Lighting',
      'Under-Cabinet Lighting',
    ],
  },
  {
    icon: ServiceIcons.repairs,
    title: 'Electrical Repairs',
    description:
      'Fast and reliable electrical repairs for all types of faults. From flickering lights and tripping circuits to faulty wiring and damaged sockets, we diagnose and fix problems efficiently.',
    placeholder: '[Common issues you solve regularly? Any specialty diagnostic equipment?]',
    details: [
      'Fault Finding',
      'Circuit Repairs',
      'Socket & Switch Repairs',
      'Fuse Box Issues',
    ],
  },
  {
    icon: ServiceIcons.rewiring,
    title: 'Rewiring Services',
    description:
      'Full and partial house rewiring for older properties. If your home has outdated wiring, we can upgrade it to meet modern safety standards and improve your electrical capacity.',
    placeholder: '[Typical project timelines? Do you work with specific property types?]',
    details: [
      'Full House Rewires',
      'Partial Rewiring',
      'Consumer Unit Upgrades',
      'Earthing Improvements',
    ],
  },
  {
    icon: ServiceIcons.emergency,
    title: 'Emergency Call-Outs',
    description:
      "Electrical emergencies can't wait. We offer emergency call-out services for urgent electrical issues that need immediate attention, helping you restore power and safety quickly.",
    placeholder: "[What's your typical response time? What hours are you available for emergencies?]",
    details: [
      'Power Outages',
      'Burning Smells',
      'Sparking Sockets',
      'Tripped Circuits',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Electrical Services"
        subtitle="Professional, reliable electrical services for homes and businesses throughout Sittingbourne and Kent."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-yellow/50 transition-colors"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-yellow/10 rounded-xl flex items-center justify-center text-yellow-dark flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">{service.description}</p>
                    <p className="text-sm text-yellow-dark/80 italic bg-yellow/10 p-3 rounded-lg border border-yellow/20">
                      {service.placeholder}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Includes:</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-yellow-dark mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <CTAButton href="/contact" variant="primary" className="mt-6 w-full">
                      Get a Quote
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-yellow-dark/80 italic">
              [We&apos;ll add photos of your completed projects here]
            </p>
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
                  <p className="text-sm">[Project photo {i}]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="py-16 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No problem! Give us a call for free, friendly advice. We&apos;re happy to discuss your requirements and provide a no-obligation quote.
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
            <CTAButton
              href="/contact"
              variant="outline"
              size="lg"
            >
              Request a Quote
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
