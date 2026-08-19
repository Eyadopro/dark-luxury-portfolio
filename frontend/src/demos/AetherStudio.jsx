import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function AetherStudio() {
  useEffect(() => {
    gsap.from('.aether-el', { y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' })
  }, [])

  const services = [
    {
      title: 'Brand Identity',
      desc: 'Thoughtful systems and interfaces built to last.',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Digital Products',
      desc: 'Web and product experiences that feel intentional.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Art Direction',
      desc: 'Visual language that carries the brand story.',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white">
      <header className="px-6 py-5 flex items-center justify-between border-b border-white/5">
        <span className="font-display text-xl tracking-wide">AETHER</span>
        <Link to="/projects" className="text-xs text-white/50 hover:text-white border border-white/15 px-3 py-1.5 rounded-full">
          ← Exit Demo
        </Link>
      </header>

      <section className="px-6 pt-24 pb-20 max-w-4xl mx-auto text-center">
        <p className="aether-el text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-6">Creative Studio</p>
        <h1 className="aether-el font-display text-5xl md:text-6xl mb-6 leading-tight">
          We shape brands<br />into experiences
        </h1>
        <p className="aether-el text-white/50 max-w-lg mx-auto mb-10">
          Strategy, identity and digital products for ambitious teams.
        </p>
        <div className="aether-el flex justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full">View Work</button>
          <button className="px-8 py-3 border border-white/20 text-sm rounded-full hover:border-white/40">Contact</button>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="aether-el group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-violet-500/30 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
