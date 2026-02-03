import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Terry Thornton Electrician. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy-policy' },
        ]}
        showPattern={false}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Notice */}
          <div className="bg-yellow/10 border border-yellow/30 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-dark flex-shrink-0 mt-0.5"
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
              <div>
                <h3 className="font-bold text-gray-900">Template Notice</h3>
                <p className="text-gray-600 text-sm mt-1">
                  This privacy policy is a template that needs to be reviewed and customized
                  for your specific business practices. Items marked with [brackets] require
                  your input.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 text-sm">Last updated: [Date to be added]</p>

            <h2 className="text-gray-900">1. Introduction</h2>
            <p>
              <strong>[Your Business Name]</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
            <p className="text-yellow-dark/80 italic text-sm">
              [Confirm your exact business name and trading name]
            </p>

            <h2 className="text-gray-900">2. Information We Collect</h2>

            <h3 className="text-gray-900">Personal Information You Provide</h3>
            <p>We may collect personal information that you voluntarily provide when:</p>
            <ul>
              <li>Filling out our contact form</li>
              <li>Calling us for a quote or enquiry</li>
              <li>Requesting our services</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (when providing services)</li>
              <li>Details about your electrical requirements</li>
            </ul>

            <h3 className="text-gray-900">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information
              about your device, including your IP address, browser type, and operating
              system.
            </p>
            <p className="text-yellow-dark/80 italic text-sm">
              [Do you use Google Analytics or other tracking? This section may need expansion]
            </p>

            <h2 className="text-gray-900">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Provide our electrical services</li>
              <li>Communicate with you about your project</li>
              <li>Send invoices and process payments</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-yellow-dark/80 italic text-sm">
              [Do you send marketing emails? If so, this should be mentioned]
            </p>

            <h2 className="text-gray-900">4. How We Share Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to
              third parties, except:
            </p>
            <ul>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>
                With service providers who assist us in operating our website or
                conducting our business (these parties agree to keep information
                confidential)
              </li>
            </ul>
            <p className="text-yellow-dark/80 italic text-sm">
              [Do you use any third-party services that process customer data?
              e.g., email services, accounting software?]
            </p>

            <h2 className="text-gray-900">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the
              purposes for which it was collected, including to satisfy legal, accounting,
              or reporting requirements.
            </p>
            <p className="text-yellow-dark/80 italic text-sm">
              [How long do you keep customer records? Consider legal requirements for
              electrical certification records]
            </p>

            <h2 className="text-gray-900">6. Your Rights</h2>
            <p>Under UK data protection law (UK GDPR), you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (in certain circumstances)</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Request transfer of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="text-gray-900">7. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are
              small files stored on your device that help us understand how you use our
              site.
            </p>
            <p className="text-yellow-dark/80 italic text-sm">
              [This section needs expansion based on what cookies your site actually uses.
              You may need a cookie consent banner.]
            </p>

            <h2 className="text-gray-900">8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect
              your personal information against unauthorised access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-gray-900">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>

            <h2 className="text-gray-900">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <ul>
              <li>
                <strong>Phone:</strong> 07951 596167
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <span className="text-yellow-dark/80 italic">[Your email address]</span>
              </li>
              <li>
                <strong>Address:</strong>{' '}
                <span className="text-yellow-dark/80 italic">
                  [Your business address if you want to include it]
                </span>
              </li>
            </ul>

            <h2 className="text-gray-900">11. Complaints</h2>
            <p>
              If you are unhappy with how we have handled your personal information, you
              have the right to lodge a complaint with the Information Commissioner&apos;s
              Office (ICO):
            </p>
            <ul>
              <li>
                Website:{' '}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-dark hover:underline"
                >
                  ico.org.uk
                </a>
              </li>
              <li>Phone: 0303 123 1113</li>
            </ul>
          </div>

          {/* Final Notice */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mt-10">
            <h3 className="font-bold text-gray-900 mb-2">Before Publishing</h3>
            <p className="text-gray-600 text-sm">
              This template should be reviewed by a legal professional to ensure it
              accurately reflects your data practices and complies with UK GDPR and other
              applicable regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
