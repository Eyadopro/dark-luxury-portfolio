import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Nova Dashboard',
    tag: 'SaaS · React · Node',
    description: 'A modern analytics dashboard with real-time data visualization and elegant dark UI.',
  },
  {
    title: 'Aether Studio',
    tag: 'Agency · Next.js',
    description: 'Full website redesign for a creative agency featuring smooth page transitions.',
  },
  {
    title: 'Pulse Analytics',
    tag: 'Fintech · Full-stack',
    description: 'Financial insights platform with secure authentication and interactive charts.',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-gold uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="project-card group relative bg-black-50 border border-white/5 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-black-100 to-black-200 mb-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <p className="text-xs font-medium text-gold tracking-wide mb-2">{project.tag}</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
