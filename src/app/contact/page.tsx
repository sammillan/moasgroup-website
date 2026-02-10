import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact MOAS GROUP LIMITED in Canterbury, Kent. Call 07384 397487 or email info@moasgroup.co.uk for a free quote. 24hr emergency services available.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Contact us for a free, no-obligation quote on your electrical work."
      />

      <section className="py-12 md:py-16 bg-white">
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
                  href="tel:07384397487"
                  className="text-3xl font-bold text-yellow-dark hover:text-yellow transition-colors"
                >
                  07384 397487
                </a>
                <p className="text-gray-600 mt-2">
                  Call or text for a quick response
                </p>
              </div>

              {/* Email */}
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
                <a
                  href="mailto:info@moasgroup.co.uk"
                  className="text-yellow-dark font-bold hover:text-yellow transition-colors"
                >
                  info@moasgroup.co.uk
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
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
                  Business Hours
                </h3>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday &ndash; Friday</span>
                    <span className="font-medium">8:00am &ndash; 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">By arrangement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-3 pt-3 border-t border-gray-200">
                  24hr emergency services available &mdash; call 07384 397487
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
                  Electrical Emergency?
                </h3>
                <p className="text-gray-600 mb-3">
                  Call us immediately for urgent issues like power outages, sparking sockets, or burning smells.
                </p>
                <a
                  href="tel:07384397487"
                  className="inline-flex items-center text-yellow-dark font-bold hover:underline"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 07384 397487 now
                </a>
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
              href="tel:07384397487"
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
              07384 397487
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
