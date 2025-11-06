import { useState } from 'react'

function TextInput({ id, label, required, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
      />
    </div>
  )
}

function Select({ id, label, value, onChange, options }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function Textarea({ id, label, placeholder, value, onChange }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
      />
    </div>
  )
}

export default function Footer() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'ERP',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { id, value } = e.target
    setForm((f) => ({ ...f, [id]: value }))
  }

  function handleSelect(e) {
    setForm((f) => ({ ...f, type: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    if (!form.company.trim()) newErrors.company = 'Company name is required'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <footer id="contact" className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Start Collaboration with Our Team</h2>
          <p className="mt-2 text-slate-600">Tell us about your project and we’ll respond within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <TextInput id="name" label="Full Name" required placeholder="John Doe" value={form.name} onChange={handleChange} />
              <TextInput id="company" label="Company Name" required placeholder="Digitalin" value={form.company} onChange={handleChange} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <TextInput id="email" label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} />
              <TextInput id="phone" label="Phone" placeholder="+62 8xx-xxxx-xxxx" value={form.phone} onChange={handleChange} />
            </div>
            <Select
              id="type"
              label="Project Type"
              value={form.type}
              onChange={handleSelect}
              options={[
                { label: 'ERP', value: 'ERP' },
                { label: 'WebApp', value: 'WebApp' },
                { label: 'E-commerce', value: 'E-commerce' },
                { label: 'Other', value: 'Other' },
              ]}
            />
            <Textarea id="description" label="Project Description" placeholder="Share goals, scope, timeline..." value={form.description} onChange={handleChange} />

            {Object.keys(errors).length > 0 && (
              <div className="text-sm text-red-600">
                {Object.values(errors).map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </div>
            )}

            {submitted ? (
              <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                Thank you! We received your request and will reach out shortly.
              </div>
            ) : (
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-transform hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
              >
                Start Collaboration with Our Team
              </button>
            )}
          </form>

          <div className="grid sm:grid-cols-2 gap-6 self-start">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Sales & General</h3>
              <p className="mt-2 text-sm text-slate-700">sales@digitalin.id</p>
              <p className="text-sm text-slate-700">+62 851-1234-5678</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Support</h3>
              <p className="mt-2 text-sm text-slate-700">support@digitalin.id</p>
              <p className="text-sm text-slate-700">Technical Assistance</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 sm:col-span-2">
              <h3 className="font-semibold text-slate-900">Social & Media</h3>
              <p className="mt-2 text-sm text-slate-700">Instagram <span className="font-medium">@digitalin.official</span></p>
              <p className="text-sm text-slate-700">Email hello@digitalin.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Digitalin. All rights reserved.</p>
          <a href="#home" className="hover:text-slate-700">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
