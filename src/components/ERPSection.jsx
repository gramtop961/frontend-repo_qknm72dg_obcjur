import { useEffect } from 'react'

export default function ERPSection() {
  useEffect(() => {}, [])
  const modules = [
    'Finance & Accounting ERP',
    'Inventory & Procurement ERP',
    'HR & Payroll ERP',
    'CRM & Sales ERP',
    'Supply Chain Management',
    'Project Management ERP',
    'Manufacturing ERP',
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h2 className="text-3xl font-bold">Modular ERP, built for your business</h2>
            <p className="mt-3 text-slate-600">
              Our ERP is designed as a set of interoperable modules. Start small and expand at your pace with secure
              permissions, robust audit logs, and analytics your leadership can trust.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {modules.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid gap-4">
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold">Basic (Small Business)</h3>
              <p className="text-sm text-slate-600">Choose any 2 modules to launch essentials.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold">Growth (Medium Business)</h3>
              <p className="text-sm text-slate-600">Start with 1–3 modules and expand smoothly.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold">Enterprise (Corporate)</h3>
              <p className="text-sm text-slate-600">Full suite with API integration and SLA support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
