import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for MOAS GROUP LIMITED. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        showPattern={false}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 text-sm">Last updated: February 2026</p>

            <h2 className="text-gray-900">1. Introduction</h2>
            <p>
              <strong>MOAS GROUP LIMITED</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use
              our services.
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

            <h2 className="text-gray-900">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the
              purposes for which it was collected, including to satisfy legal, accounting,
              or reporting requirements.
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
                <strong>Phone:</strong> 07384 397487
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@moasgroup.co.uk" className="text-yellow-dark hover:underline">info@moasgroup.co.uk</a>
              </li>
              <li>
                <strong>Address:</strong>{' '}
                <span className="text-gray-600">10 Brymore Road, Canterbury, CT1 1JE</span>
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

        </div>
      </section>
    </>
  );
}
