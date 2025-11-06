import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Transform Your Business with Custom Digital Solutions
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            ERP Systems • Web Applications • E-commerce Platforms • Business Automation
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-transform hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              Start Your Project
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><strong className="text-slate-900">100+ </strong>Projects</span>
            <span className="inline-flex items-center gap-2"><strong className="text-slate-900">5+ </strong>Years Experience</span>
            <span className="inline-flex items-center gap-2"><strong className="text-slate-900">24/7 </strong>Support</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40" />
        </div>
      </div>
    </section>
  )
}
