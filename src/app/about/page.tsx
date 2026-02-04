import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Black Gold Electrical Installations. NICEIC Domestic Installer serving Medway & Chatham. All aspects of domestic electrical work.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Black Gold Electrical"
        subtitle="NICEIC Domestic Installer serving Medway & Chatham. All aspects of domestic electrical work."
      />

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-3 opacity-50"
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
                    <p className="text-sm font-medium">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Black Gold Electrical Installations
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Black Gold Electrical Installations is a NICEIC Domestic Installer serving
                Medway & Chatham. We cover all aspects of domestic electrical work, from LED
                lighting and rewires to fault finding and socket installations. With 24 hour
                call out available, we&apos;re here when you need us.
              </p>

              {/* Qualifications - simple inline */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center bg-yellow/10 text-yellow-dark border border-yellow/30 rounded-full px-4 py-2 text-sm font-medium">
                  NICEIC Domestic Installer
                </span>
                <span className="inline-flex items-center bg-yellow/10 text-yellow-dark border border-yellow/30 rounded-full px-4 py-2 text-sm font-medium">
                  Fully Insured
                </span>
                <span className="inline-flex items-center bg-yellow/10 text-yellow-dark border border-yellow/30 rounded-full px-4 py-2 text-sm font-medium">
                  24 Hour Call Out
                </span>
              </div>

              <CTAButton href="/contact" variant="primary" size="lg">
                Get in Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our Service Area
            </h2>
            <p className="text-gray-600">
              Serving across Medway & Chatham.
            </p>
          </div>

          {/* Mock Google Maps */}
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm">
            <div className="relative bg-[#e8e4d8] aspect-[16/9]">
              {/* Map background with road grid */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Water areas - Thames Estuary & River Medway */}
                <path d="M0 0 L800 0 L800 80 L600 70 L400 90 L200 60 L0 50 Z" fill="#aadaff" />
                <path d="M350 90 L380 130 L400 200 L390 220 L370 200 L360 150 L340 110 Z" fill="#aadaff" opacity="0.7" />

                {/* Green areas */}
                <rect x="100" y="300" width="100" height="70" rx="8" fill="#c5e1a5" opacity="0.5" />
                <rect x="550" y="280" width="90" height="60" rx="8" fill="#c5e1a5" opacity="0.5" />
                <rect x="300" y="350" width="80" height="60" rx="8" fill="#c5e1a5" opacity="0.5" />

                {/* Major roads - A2/M2 corridor */}
                <path d="M0 180 L150 175 L300 190 L400 200 L550 190 L700 180 L800 175" stroke="#fdd835" strokeWidth="4" fill="none" />
                {/* A229 north-south */}
                <path d="M380 90 L390 150 L400 200 L410 300 L400 450" stroke="#fdd835" strokeWidth="4" fill="none" />
                {/* Minor roads */}
                <path d="M300 190 L280 280 L250 380" stroke="#fff9c4" strokeWidth="3" fill="none" />
                <path d="M550 190 L570 280 L600 380" stroke="#fff9c4" strokeWidth="3" fill="none" />
                <path d="M400 200 L480 240 L550 190" stroke="#fff9c4" strokeWidth="3" fill="none" />
                <path d="M200 100 L300 190" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path d="M500 100 L550 190" stroke="#ffffff" strokeWidth="2" fill="none" />

                {/* Service radius circle - centered on Chatham */}
                <circle cx="380" cy="210" r="150" fill="#fbbf24" fillOpacity="0.12" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 4" />

                {/* Town labels */}
                <text x="380" y="205" textAnchor="middle" className="text-[11px] font-bold" fill="#1a1a1a">Chatham</text>

                <text x="320" y="185" textAnchor="middle" className="text-[9px]" fill="#555">Rochester</text>
                <circle cx="320" cy="190" r="3" fill="#888" />

                <text x="450" y="195" textAnchor="middle" className="text-[9px]" fill="#555">Gillingham</text>
                <circle cx="450" cy="200" r="3" fill="#888" />

                <text x="520" y="185" textAnchor="middle" className="text-[9px]" fill="#555">Rainham</text>
                <circle cx="520" cy="190" r="3" fill="#888" />

                <text x="260" y="175" textAnchor="middle" className="text-[9px]" fill="#555">Strood</text>
                <circle cx="260" cy="180" r="3" fill="#888" />

                <text x="160" y="170" textAnchor="middle" className="text-[9px]" fill="#555">Gravesend</text>
                <circle cx="160" cy="175" r="3" fill="#888" />

                <text x="650" y="185" textAnchor="middle" className="text-[9px]" fill="#555">Sittingbourne</text>
                <circle cx="650" cy="190" r="3" fill="#888" />

                <text x="380" y="380" textAnchor="middle" className="text-[9px]" fill="#555">Maidstone</text>
                <circle cx="380" cy="385" r="3" fill="#888" />

                <text x="250" y="260" textAnchor="middle" className="text-[9px]" fill="#555">Snodland</text>
                <circle cx="250" cy="265" r="3" fill="#888" />

                <text x="500" y="240" textAnchor="middle" className="text-[9px]" fill="#555">Newington</text>
                <circle cx="500" cy="245" r="3" fill="#888" />

                {/* Chatham pin */}
                <g transform="translate(380, 180)">
                  <path d="M0 0 C0 -15 -10 -25 -10 -30 C-10 -37 -3 -42 0 -42 C3 -42 10 -37 10 -30 C10 -25 0 -15 0 0 Z" fill="#dc2626" />
                  <circle cx="0" cy="-30" r="4" fill="white" />
                </g>
              </svg>

              {/* Google Maps style controls (decorative) */}
              <div className="absolute top-3 right-3 flex flex-col gap-1">
                <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-600 text-lg font-bold">+</div>
                <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-600 text-lg font-bold">&minus;</div>
              </div>

              {/* Google branding mock */}
              <div className="absolute bottom-2 left-2 text-[10px] text-gray-500 bg-white/80 px-1 rounded">
                Map data &middot; Service area shown
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-3">
            Ready to Work With a Qualified Professional?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote on your electrical work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:07920142026" variant="primary" size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 07920 142026
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
