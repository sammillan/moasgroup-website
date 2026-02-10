interface PageHeroProps {
  title: string;
  subtitle?: string;
  showPattern?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  showPattern = true,
}: PageHeroProps) {
  return (
    <section className="relative bg-black py-8 md:py-10 overflow-hidden">
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBBF24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-gray-300 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
