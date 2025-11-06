import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ERPSection from './components/ERPSection'
import PortfolioPlaceholder from './components/PortfolioPlaceholder'
import ArticlePlaceholder from './components/ArticlePlaceholder'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target
      if (target instanceof HTMLAnchorElement && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.slice(1)
        const el = document.getElementById(id || '')
        if (el) {
          e.preventDefault()
          const y = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-white" style={{
      ['--color-primary']: '#1a237e',
      ['--color-accent']: '#ffd700',
      ['--color-bg']: '#ffffff',
    }}>
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><Services /></div>
        <div className="reveal"><ERPSection /></div>
        <div className="reveal"><PortfolioPlaceholder /></div>
        <div className="reveal"><ArticlePlaceholder /></div>
        <Pricing />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  )
}

function PricingCard({ tier, description, features, highlight }) {
  return (
    <div className={`relative rounded-2xl border p-6 bg-white transition shadow-sm hover:shadow-md ${highlight ? 'border-[var(--color-primary)]' : 'border-slate-200'}`}>
      {highlight && (
        <span className="absolute -top-3 left-6 rounded-full px-2 py-0.5 text-xs font-semibold text-white" style={{ background: 'var(--color-primary)' }}>
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-slate-900">{tier}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
      >
        Get Quote
      </a>
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">ERP Package Bundles</h2>
          <p className="mt-2 text-slate-600">Choose a starting point that fits your operation size and complexity.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            tier="Basic (Small Business)"
            description="Launch quickly with essential control."
            features={[
              'Pick any 2 modules',
              'Role-based access',
              'Implementation support',
            ]}
          />
          <PricingCard
            tier="Growth (Medium Business)"
            description="Scale operations with flexibility."
            features={[
              'Start with 1-3 modules',
              'Advanced dashboards',
              'Team onboarding',
            ]}
            highlight
          />
          <PricingCard
            tier="Enterprise (Corporate)"
            description="Full suite with integrations for complex environments."
            features={['Full suite + API integration', 'SLA & 24/7 support', 'Custom workflows']}
          />
        </div>
      </div>
    </section>
  )
}
