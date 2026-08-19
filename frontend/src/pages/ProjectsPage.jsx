import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'luxe-atelier',
    title: 'Luxe Atelier',
    category: 'Fashion Brand',
    year: '2025',
    desc: 'Complete e-commerce experience for a luxury clothing brand. Multi-page demo with product catalog, lookbook and checkout flow.',
    demo: '/demo/luxe-atelier',
    color: 'from-amber-900/40 to-black',
  },
  {
    id: 'nova-dash',
    title: 'Nova Dashboard',
    category: 'SaaS · Analytics',
    year: '2025',
    desc: 'Real-time analytics platform with dark UI, charts and role-based views. Built as a fully interactive demo.',
    demo: '/demo/nova-dash',
    color: 'from-blue-900/30 to-black',
  },
  {
    id: 'aether-studio',
    title: 'Aether Studio',
    category: 'Creative Agency',
    year: '2024',
    desc: 'Agency website with case studies, services and contact. Smooth page transitions and refined typography.',
    demo: '/demo/aether-studio',
    color: 'from-violet-900/30 to-black',
  },
]

export default function ProjectsPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-row', {
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">Selected Work</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">Projects</h1>
        <p className="text-muted text-lg mb-16 max-w-xl">
          Each project includes a live interactive demo you can explore inside this site.
        </p>

        <div className="space-y-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="project-row group relative overflow-hidden rounded-3xl border border-white/5 bg-black-50 hover:border-gold/25 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gold tracking-wider uppercase">{p.category}</span>
                    <span className="text-xs text-muted">{p.year}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-gold transition-colors duration-300">
                    {p.title}
                  </h2>
                  <p className="text-soft max-w-md leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Link
                    to={p.demo}
                    className="px-6 py-3 bg-gold text-black text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
                  >
                    Open Live Demo
                  </Link>
                  <Link
                    to={`/projects/${p.id}`}
                    className="px-6 py-3 border border-white/20 text-sm font-medium rounded-full hover:border-gold/40 hover:text-gold transition-colors"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
