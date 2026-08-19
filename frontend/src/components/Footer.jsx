export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Eyad Hani. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Eyadopro" target="_blank" rel="noreferrer" className="text-muted hover:text-gold transition-colors text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted hover:text-gold transition-colors text-sm">
            LinkedIn
          </a>
          <a href="mailto:eyadopro88@gmail.com" className="text-muted hover:text-gold transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
