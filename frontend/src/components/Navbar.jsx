import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo('.nav-el', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, delay: 0.2, ease: 'power3.out' })
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="nav-el font-display text-2xl font-semibold text-gold tracking-tight">
          EH.
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-el text-sm font-medium transition-colors duration-300 ${
                location.pathname === l.path ? 'text-gold' : 'text-muted hover:text-white'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="nav-el hidden md:inline-flex px-5 py-2 bg-gold text-black text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
        >
          Let's Talk
        </Link>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setMenuOpen(false)} className="text-lg text-soft hover:text-gold">
              {l.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 text-center py-3 bg-gold text-black font-semibold rounded-full">
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  )
}
