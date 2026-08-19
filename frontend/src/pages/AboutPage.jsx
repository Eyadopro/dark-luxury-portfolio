import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-block', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">About</p>
        <h1 className="about-block font-display text-4xl md:text-6xl font-semibold mb-8 leading-tight">
          Building products that feel intentional and refined
        </h1>
        <div className="about-block space-y-6 text-soft text-lg leading-relaxed mb-16">
          <p>
            I'm Eyad Hani, a full-stack developer focused on crafting digital experiences that balance aesthetics and performance. I work primarily with React, Node.js, and modern design systems.
          </p>
          <p>
            My process starts with clarity — understanding the product, the users, and the technical constraints — then moves into clean architecture and polished interfaces with meaningful motion.
          </p>
        </div>

        <div className="about-block grid sm:grid-cols-2 gap-6 mb-20">
          {[
            { label: 'Experience', value: '3+ Years' },
            { label: 'Focus', value: 'Product & Design Systems' },
            { label: 'Stack', value: 'React · Node · TypeScript' },
            { label: 'Based in', value: 'Egypt' },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl bg-black-50 border border-white/5">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-xl font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="about-block">
          <h2 className="font-display text-3xl mb-8">What I care about</h2>
          <ul className="space-y-4 text-soft">
            <li className="flex gap-3"><span className="text-gold">→</span> Clear information hierarchy and typography</li>
            <li className="flex gap-3"><span className="text-gold">→</span> Motion that supports the content, not distracts</li>
            <li className="flex gap-3"><span className="text-gold">→</span> Maintainable code and thoughtful component APIs</li>
            <li className="flex gap-3"><span className="text-gold">→</span> Performance and accessibility as defaults</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
