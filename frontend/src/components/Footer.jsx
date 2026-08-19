import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-gold mb-1">EH.</p>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Eyad Hani</p>
        </div>
        <div className="flex items-center gap-8 text-sm text-muted">
          <Link to="/about" className="hover:text-gold transition-colors">About</Link>
          <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          <a href="https://github.com/Eyadopro" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
