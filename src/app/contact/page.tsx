import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Terry Thornton Electrician in Sittingbourne, Kent. Call 07951 596167 for a free quote. Available for emergency call-outs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Contact us for a free, no-obligation quote on your electrical work."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              {/* Phone */}
              <div className="bg-yellow/10 rounded-xl p-6 mb-6 border border-yellow/30">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-dark mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Phone
                </h3>
                <a
                  href="tel:07951596167"
                  className="text-3xl font-bold text-yellow-dark hover:text-yellow transition-colors"
                >
                  07951 596167
                </a>
                <p className="text-gray-600 mt-2">
                  Call or text for a quick response
                </p>
              </div>

              {/* Email Placeholder */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-dark mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </h3>
                <p className="text-yellow-dark/80 italic">
                  [Email address to be added if you&apos;d like to provide one]
                </p>
              </div>

              {/* Service Hours */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-dark mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Service Hours
                </h3>
                <p className="text-yellow-dark/80 italic">
                  [What are your typical working hours? e.g., Monday-Friday 8am-6pm?]
                </p>
              </div>

              {/* Emergency */}
              <div className="bg-yellow/10 rounded-xl p-6 border border-yellow/30">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-dark mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Emergency Call-Outs
                </h3>
                <p className="text-gray-600 mb-2">
                  Available for electrical emergencies
                </p>
                <p className="text-yellow-dark/80 italic text-sm">
                  [What&apos;s your typical response time for emergencies? Are you available
                  evenings/weekends?]
                </p>
              </div>

              {/* Service Area */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve Sittingbourne and the surrounding Kent areas.
                </p>
                <p className="text-yellow-dark/80 italic mb-4">
                  [Which specific towns do you cover? e.g., Faversham, Gillingham, Rainham,
                  Sheerness, Isle of Sheppey?]
                </p>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-400">
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
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p className="text-sm">[Interactive service area map can be added here]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <span className="text-yellow-dark/80 italic">
                  [Form submissions will need to be configured to your preferred email]
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-yellow">Prefer to Talk?</h3>
              <p className="text-gray-300">
                Give us a call for immediate assistance
              </p>
            </div>
            <a
              href="tel:07951596167"
              className="inline-flex items-center gap-2 bg-yellow text-black px-8 py-4 rounded-full font-bold text-xl hover:bg-yellow-light transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              07951 596167
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
