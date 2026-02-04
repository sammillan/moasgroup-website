import Image from 'next/image';
import { TrustBar } from '@/components/TrustBadge';
import { ServiceIcons } from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

const featuredServices = [
  {
    icon: ServiceIcons.lighting,
    title: 'Kitchen / Bathroom LED',
    description: 'Professional LED lighting installations for kitchens and bathrooms throughout Kent & London.',
    href: '/services',
  },
  {
    icon: ServiceIcons.rewiring,
    title: 'Full / Partial Rewires',
    description: 'Complete and partial rewiring services to bring your property up to current standards.',
    href: '/services',
  },
  {
    icon: ServiceIcons.repairs,
    title: 'Fault Finding',
    description: 'Expert fault finding and diagnostics. 24 hour call out available for emergencies.',
    href: '/services',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow/10">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBBF24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="text-yellow">Black Gold</span>{' '}
                Electrical Installations
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                All Aspects Of Domestic Electrical Work | NICEIC Domestic Installer | 24 Hour Call Out
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton href="tel:07920142026" variant="primary" size="lg">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg">
                  Get a Quote
                </CTAButton>
              </div>
              <p className="mt-6 text-2xl font-bold text-yellow">
                <a href="tel:07920142026" className="hover:text-yellow-light transition-colors">
                  07920 142026
                </a>
              </p>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border-2 border-yellow/20 shadow-2xl">
                <Image
                  src="/test_home.jpg"
                  alt="Black Gold Electrical Installations"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Services Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All aspects of domestic electrical work across Kent & London. NICEIC registered with 24 hour call out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-yellow/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-yellow/10 rounded-lg flex items-center justify-center text-yellow-dark mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/services" variant="primary" size="lg">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border-2 border-dashed border-gray-300"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 italic mb-4">
                  &ldquo;Excellent service and quality workmanship.&rdquo;
                </p>
                <p className="font-medium text-gray-400">&mdash; Satisfied Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
            Need an Electrician?
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. 24 hour call out available across Kent & London.
          </p>
          <a
            href="tel:07920142026"
            className="inline-flex items-center text-4xl md:text-5xl font-bold text-yellow hover:text-yellow-light transition-colors mb-8"
          >
            <svg className="w-10 h-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07920 142026
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Request a Quote Online
            </CTAButton>
            <CTAButton href="/services" variant="outline" size="lg">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
