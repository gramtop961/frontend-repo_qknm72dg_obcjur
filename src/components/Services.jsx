import { useState } from 'react'

function ServiceCard({ title, description }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 h-1 w-0 bg-[var(--color-accent)] transition-all group-hover:w-12" />
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: 'Custom ERP Development',
      description:
        'Tailored, modular ERP designed around your processes with secure role-based access and real-time insights.',
    },
    {
      title: 'Web Application Development',
      description:
        'High-performance, scalable apps using modern stacks. Built for teams, dashboards, and operational tools.',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'From storefront to fulfillment, we create conversion-focused stores with reliable payments and analytics.',
    },
    {
      title: 'Business Process Automation',
      description:
        'Automate repetitive work with integrations, workflows, and triggers that reduce cost and increase speed.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-2 text-slate-600">
            We design and ship software that connects your operations end-to-end.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">ERP Modules</p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {[
                'Finance & Accounting ERP',
                'Inventory & Procurement ERP',
                'HR & Payroll ERP',
                'CRM & Sales ERP',
                'Supply Chain Management',
                'Project Management ERP',
                'Manufacturing ERP',
              ].map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">ERP Packages</p>
            <div className="mt-3 grid gap-3">
              <div className="rounded-lg border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-900">Basic (Small Business)</h4>
                <p className="text-sm text-slate-600">Pick any 2 modules</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-900">Growth (Medium Business)</h4>
                <p className="text-sm text-slate-600">Start with 1-3 modules</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-900">Enterprise (Corporate)</h4>
                <p className="text-sm text-slate-600">Full suite + API integration</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Other Services</p>
            <Tabs />
          </div>
        </div>
      </div>
    </section>
  )
}

function Tabs() {
  const tabs = [
    {
      key: 'webapp',
      label: 'WebApp Development',
      items: [
        'Basic Startup (Single page CRUD)',
        'Growth SME (Multi-user with dashboard)',
        'Enterprise Corporate (Complex integrated apps)',
      ],
    },
    {
      key: 'webmin',
      label: 'Webmin Development',
      items: [
        'Basic Small Business (Admin dashboard)',
        'Growth Medium Business (Multi-dashboard with roles)',
        'Enterprise Corporate (Custom admin system)',
      ],
    },
    {
      key: 'webcommerce',
      label: 'WebCommerce Development',
      items: [
        'Basic UMKM (Webstore with catalog)',
        'Growth Growing Brand (Custom e-commerce)',
        'Enterprise Corporate (Headless commerce)',
      ],
    },
  ]
  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find((t) => t.key === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium border transition ${
              active === t.key ? 'border-transparent text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
            style={active === t.key ? { background: 'var(--color-primary)' } : {}}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        {current.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
