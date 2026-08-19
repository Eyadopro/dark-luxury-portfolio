import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene3D from '../components/3d/Scene3D'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-line', { y: 80, opacity: 0, duration: 1.1, stagger: 0.12 })
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('.hero-3d', { opacity: 0, scale: 0.9, duration: 1.2 }, '-=1')

      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.features', start: 'top 75%' },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef}>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-3d opacity-40 pointer-events-none">
          <Scene3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
          <p className="hero-line text-xs tracking-[0.25em] uppercase text-gold mb-6 font-medium">
            Full-Stack Developer
          </p>
          <h1 className="hero-line font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Crafting digital
            <br />
            <span className="gold-gradient">experiences</span>
            <br />
            that feel premium
          </h1>
          <p className="hero-line text-soft text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I build polished web products with React, Node.js and refined motion — from concept to production.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="hero-cta inline-flex px-8 py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.03]"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="hero-cta inline-flex px-8 py-3.5 border border-white/15 text-white font-medium rounded-full hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="features py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Design Systems', desc: 'Consistent, scalable UI systems that look intentional.' },
              { title: 'Motion & 3D', desc: 'GSAP timelines and Three.js scenes that feel alive.' },
              { title: 'Full-Stack', desc: 'React frontends paired with solid Node.js backends.' },
            ].map((item) => (
              <div key={item.title} className="feature-card p-8 rounded-2xl bg-black-50 border border-white/5 hover:border-gold/20 transition-colors duration-500">
                <h3 className="font-display text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to build something exceptional?</h2>
          <p className="text-muted mb-10 text-lg">Let's turn your idea into a refined digital product.</p>
          <Link to="/contact" className="inline-flex px-10 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
