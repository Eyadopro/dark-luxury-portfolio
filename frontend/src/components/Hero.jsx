import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-btn',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-gold/40 bg-gold/10">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="text-xs font-medium tracking-widest text-gold uppercase">
          Available for work
        </span>
      </div>

      <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-4">
        Eyad Hani
      </h1>

      <p className="hero-subtitle text-xl md:text-2xl text-muted text-center mb-6 max-w-2xl">
        Full-Stack Developer & Creative Technologist
      </p>

      <p className="hero-desc text-base md:text-lg text-muted/80 text-center max-w-xl mb-10 leading-relaxed">
        I craft elegant digital experiences with clean code,
        <br className="hidden sm:block" /> modern design systems, and smooth interactions.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#projects"
          className="hero-btn px-8 py-3.5 bg-gold text-black font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="hero-btn px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:border-gold/50 hover:text-gold transition-all duration-300"
        >
          Download CV
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs tracking-widest uppercase text-muted">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
