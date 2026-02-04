import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-yellow">Black Gold</span>
                <span className="block text-xs text-gray-400">Electrical Installations</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              NICEIC Domestic Installer serving Kent & London. All aspects of domestic electrical work. 24 hour call out.
            </p>
            <a
              href="tel:07920142026"
              className="inline-flex items-center gap-2 text-yellow hover:text-yellow-light font-bold text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07920 142026
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area & Accreditations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow">Service Area</h3>
            <p className="text-gray-400 mb-4">
              Proudly serving Kent & London with all aspects of domestic electrical work.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-yellow">Accreditations</h3>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-xs text-gray-500 text-center p-2 border border-gray-800">
                NICEIC
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Black Gold Electrical Installations. All rights reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-yellow text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
