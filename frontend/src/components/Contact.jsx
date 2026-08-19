import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

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
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest text-gold uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Let's build something
          <br />
          <span className="gold-gradient">extraordinary</span> together
        </h2>
        <p className="text-muted mb-12">
          Have a project in mind? Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 bg-black-50 border border-white/10 rounded-xl text-white placeholder:text-muted/60 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 bg-black-50 border border-white/10 rounded-xl text-white placeholder:text-muted/60 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 bg-black-50 border border-white/10 rounded-xl text-white placeholder:text-muted/60 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-gold text-black font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-green-400 text-sm">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
