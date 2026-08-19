import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'GSAP',
  'Figma', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Express',
  'Framer Motion', 'Git', 'REST APIs', 'GraphQL', 'Docker'
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-chip',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest text-gold uppercase mb-4">
          Expertise
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Technologies I work with
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="skill-chip px-5 py-2.5 rounded-lg bg-black-50 border border-white/10 text-sm font-medium text-white/80 hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
