import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  showPattern?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showPattern = true,
}: PageHeroProps) {
  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBBF24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-4 h-4 mx-2 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-400">{crumb.name}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-gray-400 hover:text-yellow transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
