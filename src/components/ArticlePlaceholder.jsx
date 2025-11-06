export default function ArticlePlaceholder() {
  return (
    <section id="article" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Insights & Articles</h2>
          <p className="mt-2 text-slate-600">Practical ideas on technology, operations, and growth.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">How to scope an ERP project effectively</h3>
              <p className="mt-2 text-sm text-slate-600">A step-by-step checklist to align stakeholders, budget, and milestones.</p>
              <a href="#contact" className="mt-3 inline-block text-sm font-medium" style={{ color: 'var(--color-primary)' }}>Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
