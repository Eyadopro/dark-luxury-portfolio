import { useState, useEffect } from 'react'
import gsap from 'gsap'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.3, ease: 'power3.out' }
    )
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="nav-item text-2xl font-bold text-gold tracking-tight">
          EH.
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item text-sm font-medium text-muted hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-item hidden md:inline-flex items-center px-6 py-2.5 bg-gold text-black text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
        >
          Let's Talk
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-muted hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex justify-center px-6 py-3 bg-gold text-black font-semibold rounded-lg"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}
