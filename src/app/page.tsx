import { TrustBar } from '@/components/TrustBadge';
import ServiceCard, { ServiceIcons } from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import ContactForm from '@/components/ContactForm';

const services = [
  {
    icon: ServiceIcons.testing,
    title: 'Electrical Testing & Inspections',
    description: 'Comprehensive electrical testing and EICR certificates for homes and businesses.',
    placeholder: '[What specific certifications do you provide?]',
  },
  {
    icon: ServiceIcons.sockets,
    title: 'Additional Sockets & Outlets',
    description: 'Expert installation of new sockets, USB outlets, and power points throughout your property.',
    placeholder: '[Any specialty installations you prefer?]',
  },
  {
    icon: ServiceIcons.lighting,
    title: 'Lighting Installation',
    description: 'Indoor and outdoor lighting solutions including LED upgrades and smart lighting systems.',
    placeholder: '[Do you have photos of recent lighting projects?]',
  },
  {
    icon: ServiceIcons.repairs,
    title: 'Electrical Repairs',
    description: 'Fast, reliable repairs for all electrical faults including faulty wiring and tripping circuits.',
    placeholder: '[Common issues you solve regularly?]',
  },
  {
    icon: ServiceIcons.rewiring,
    title: 'Rewiring Services',
    description: 'Full and partial rewiring for older properties to meet modern safety standards.',
    placeholder: '[Typical project timelines we can mention?]',
  },
  {
    icon: ServiceIcons.emergency,
    title: 'Emergency Call-Outs',
    description: 'Available for urgent electrical emergencies when you need help fast.',
    placeholder: "[What's your typical response time?]",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local Knowledge',
    description: 'Based in Sittingbourne with deep knowledge of local properties and electrical requirements.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reliable & Punctual',
    description: 'We show up when we say we will and complete work to the highest standards.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'No Job Too Small',
    description: "From a single socket to a full rewire, we're happy to help with any electrical work.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow/10">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBBF24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sittingbourne&apos;s Trusted Electrician for{' '}
                <span className="text-yellow">30+ Years</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                JIB Approved | City & Guilds Qualified | No Job Too Small
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton href="tel:07951596167" variant="primary" size="lg">
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
                <a href="tel:07951596167" className="hover:text-yellow-light transition-colors">
                  07951 596167
                </a>
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-yellow/20">
                <div className="aspect-[4/3] bg-gray-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400 p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg font-medium">[We&apos;ll add your professional photos here]</p>
                    <p className="text-sm mt-2">Images of you at work, completed projects, or your van</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple repairs to complete rewiring, we provide a full range of professional electrical services for homes and businesses.
            </p>
            <p className="text-sm text-yellow-dark/80 italic mt-2">
              [We&apos;ll refine these descriptions together]
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                placeholder={service.placeholder}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/services" variant="primary" size="lg">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose Terry */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Terry Thornton?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With over 30 years of experience, JIB approval, and City & Guilds qualifications, you&apos;re in safe hands.
            </p>
            <p className="text-sm text-yellow-dark/80 italic mt-2">
              [We can highlight what makes you unique here]
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200 text-center hover:shadow-md hover:border-yellow/50 transition-all"
              >
                <div className="w-16 h-16 bg-yellow/10 rounded-full flex items-center justify-center text-yellow-dark mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow">
                Need an Electrician?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get in touch today for a free, no-obligation quote. Available for emergency call-outs.
              </p>
              <a
                href="tel:07951596167"
                className="inline-flex items-center text-4xl md:text-5xl font-bold text-yellow hover:text-yellow-light transition-colors"
              >
                <svg className="w-10 h-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07951 596167
              </a>
              <p className="mt-4 text-gray-400">
                Or fill out the form and we&apos;ll get back to you promptly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Sittingbourne & Kent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We provide electrical services throughout Sittingbourne and the surrounding Kent areas.
          </p>
          <p className="text-yellow-dark/80 italic">
            [Which specific towns do you typically cover? e.g., Faversham, Gillingham, Rainham, Sheerness?]
          </p>

          {/* Map Placeholder */}
          <div className="mt-8 bg-gray-100 rounded-xl p-12 max-w-3xl mx-auto border-2 border-dashed border-gray-300">
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-lg font-medium">[We can add an interactive service area map here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-yellow-dark/80 italic">
              [Space designed for customer testimonials - we&apos;ll add these together]
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-gray-300"
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
                  &ldquo;[Customer testimonial will go here - tell us about a recent project]&rdquo;
                </p>
                <p className="font-medium text-gray-400">— [Customer Name], [Location]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
