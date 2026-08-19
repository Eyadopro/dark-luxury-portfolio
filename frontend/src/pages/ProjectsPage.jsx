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
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nova-dash',
    title: 'Nova Dashboard',
    category: 'SaaS · Analytics',
    year: '2025',
    desc: 'Real-time analytics platform with dark UI, charts and role-based views. Built as a fully interactive demo.',
    demo: '/demo/nova-dash',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'aether-studio',
    title: 'Aether Studio',
    category: 'Creative Agency',
    year: '2024',
    desc: 'Agency website with case studies, services and contact. Smooth page transitions and refined typography.',
    demo: '/demo/aether-studio',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
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

        <div className="space-y-10">
          {projects.map((p) => (
            <article
              key={p.id}
              className="project-row group relative overflow-hidden rounded-3xl border border-white/5 bg-black-50 hover:border-gold/25 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[16/11] md:aspect-auto overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gold tracking-wider uppercase">{p.category}</span>
                    <span className="text-xs text-muted">{p.year}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-gold transition-colors duration-300">
                    {p.title}
                  </h2>
                  <p className="text-soft max-w-md leading-relaxed mb-8">{p.desc}</p>
                  <div className="flex flex-wrap gap-3">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
