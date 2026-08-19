import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current?.children || [], { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div ref={ref} className="max-w-xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Contact</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Let's talk</h1>
        <p className="text-muted mb-12">Tell me about your project. I'll get back within 24–48 hours.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-5 py-4 bg-black-50 border border-white/10 rounded-2xl text-white placeholder:text-muted/70 focus:outline-none focus:border-gold/40 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 bg-black-50 border border-white/10 rounded-2xl text-white placeholder:text-muted/70 focus:outline-none focus:border-gold/40 transition-colors"
          />
          <textarea
            placeholder="Message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-5 py-4 bg-black-50 border border-white/10 rounded-2xl text-white placeholder:text-muted/70 focus:outline-none focus:border-gold/40 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-gold text-black font-semibold rounded-2xl hover:bg-gold-light transition-all disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-center text-green-400 text-sm">Message sent. Thank you!</p>}
          {status === 'error' && <p className="text-center text-red-400 text-sm">Something went wrong. Try again.</p>}
        </form>
      </div>
    </div>
  )
}
