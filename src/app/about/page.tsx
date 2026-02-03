import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Terry Thornton',
  description:
    'Learn about Terry Thornton, JIB Approved Electrician in Sittingbourne, Kent with 30+ years experience. City & Guilds qualified since 1981.',
};

const timeline = [
  {
    year: '1981',
    title: 'Qualified as JIB Approved Electrician',
    description: 'Awarded City & Guilds qualification and JIB approval.',
    placeholder: '[More details about your early career?]',
  },
  {
    year: '[Year]',
    title: '[Career Milestone]',
    description: '[Description of a significant point in your career]',
    placeholder: '[What happened here? Started your own business? Major project?]',
  },
  {
    year: '[Year]',
    title: '[Another Achievement]',
    description: '[Description of another career highlight]',
    placeholder: '[Additional training? Expansion? Notable project?]',
  },
  {
    year: 'Present',
    title: '30+ Years of Service',
    description: 'Continuing to serve Sittingbourne and Kent with quality electrical work.',
    placeholder: '[Current focus or specialties?]',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Terry Thornton"
        subtitle="JIB Approved Electrician serving Sittingbourne and Kent for over 30 years."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-2xl p-8 border-2 border-dashed border-gray-300">
                <div className="aspect-[3/4] flex items-center justify-center">
                  <div className="text-center text-gray-400 p-6">
                    <svg
                      className="w-20 h-20 mx-auto mb-4 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-lg font-medium">[Your professional photo]</p>
                    <p className="text-sm mt-2">
                      A professional headshot or photo of you at work would go great here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hello, I&apos;m Terry Thornton
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  I&apos;m a JIB Approved Electrician based in Sittingbourne, Kent, with over 30 years
                  of experience in the electrical trade. Since qualifying with my City & Guilds in
                  1981, I&apos;ve been helping homeowners and businesses throughout Kent with all their
                  electrical needs.
                </p>

                <div className="bg-yellow/10 border border-yellow/30 rounded-xl p-6 my-6">
                  <p className="text-yellow-dark/90 italic">
                    [We&apos;ll craft your personal story here - what made you become an electrician?
                    What do you love about the work? Any memorable projects or achievements?]
                  </p>
                </div>

                <p className="text-gray-600 mb-4">
                  I take pride in delivering quality workmanship, honest advice, and fair pricing.
                  No job is too small, and I treat every customer&apos;s home with the same care and
                  respect I&apos;d give my own.
                </p>

                <p className="text-gray-600">
                  When you choose me for your electrical work, you&apos;re getting a qualified,
                  experienced professional who genuinely cares about doing the job right.
                </p>
              </div>

              <div className="mt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Get in Touch
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Fully qualified and approved for your peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border-2 border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-xs text-gray-400">[JIB Logo]</span>
              </div>
              <h3 className="font-bold text-gray-900">JIB Approved</h3>
              <p className="text-sm text-gray-600 mt-1">Grade awarded 1981</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border-2 border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-xs text-gray-400">[C&G Logo]</span>
              </div>
              <h3 className="font-bold text-gray-900">City & Guilds</h3>
              <p className="text-sm text-gray-600 mt-1">Qualified Electrician</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border-2 border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-xs text-gray-400">[Insurance]</span>
              </div>
              <h3 className="font-bold text-gray-900">Fully Insured</h3>
              <p className="text-sm text-gray-600 mt-1">Public Liability Coverage</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border-2 border-dashed border-gray-300">
              <div className="w-20 h-20 bg-gray-50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs text-gray-400">[Other?]</span>
              </div>
              <h3 className="font-bold text-gray-400">[Additional Cert]</h3>
              <p className="text-sm text-yellow-dark/80 italic mt-1">
                [Any other certifications?]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience Timeline
            </h2>
            <p className="text-yellow-dark/80 italic">
              [Let&apos;s build out your career highlights together]
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow/30" />

              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Year bubble */}
                  <div className="relative z-10 w-16 h-16 bg-yellow rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    {item.placeholder && (
                      <p className="text-sm text-yellow-dark/80 italic">{item.placeholder}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Having worked in Sittingbourne and the surrounding Kent area for over three decades,
              I understand the unique characteristics of local properties. From Victorian terraces
              to modern new builds, I&apos;ve seen and worked on it all.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Being local means I can respond quickly, provide accurate quotes, and offer genuine
              advice based on years of experience with properties just like yours.
            </p>
            <div className="bg-yellow/10 border border-yellow/30 rounded-xl p-6">
              <p className="text-yellow-dark/90 italic">
                [What makes your local knowledge valuable? Specific property types? Common issues
                you see in the area?]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
            Ready to Work With a Qualified Professional?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote on your electrical work.
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
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
