import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function NovaDash() {
  useEffect(() => {
    gsap.from('.dash-card', { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' })
  }, [])

  const kpis = [
    { label: 'Revenue', value: '$128.4k', change: '+12.4%' },
    { label: 'Active Users', value: '8,420', change: '+5.1%' },
    { label: 'Conversion', value: '3.8%', change: '+0.4%' },
    { label: 'Churn', value: '1.2%', change: '-0.3%' },
  ]

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">N</div>
          <span className="font-semibold">Nova</span>
        </div>
        <Link to="/projects" className="text-xs text-white/50 hover:text-white border border-white/15 px-3 py-1.5 rounded-full">
          ← Exit Demo
        </Link>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-white/50 text-sm mb-8">Overview · Last 30 days</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((k) => (
            <div key={k.label} className="dash-card p-5 rounded-2xl bg-[#12151c] border border-white/5">
              <p className="text-xs text-white/40 mb-2">{k.label}</p>
              <p className="text-2xl font-semibold mb-1">{k.value}</p>
              <p className={`text-xs ${k.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{k.change}</p>
            </div>
          ))}
        </div>

        <div className="dash-card rounded-2xl bg-[#12151c] border border-white/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            alt="Analytics dashboard chart"
            className="w-full h-64 object-cover opacity-90"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  )
}
