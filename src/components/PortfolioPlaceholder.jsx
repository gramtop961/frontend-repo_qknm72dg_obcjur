export default function PortfolioPlaceholder() {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Selected Work</h2>
          <p className="mt-2 text-slate-600">A snapshot of projects we’re proud of. Available upon request for privacy.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[16/10] rounded-xl border border-slate-200 bg-white shadow-sm" />
          ))}
        </div>
      </div>
    </section>
  )
}
