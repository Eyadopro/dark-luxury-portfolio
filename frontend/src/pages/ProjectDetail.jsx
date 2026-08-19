import { useParams, Link } from 'react-router-dom'

const data = {
  'luxe-atelier': {
    title: 'Luxe Atelier',
    category: 'Fashion Brand · E-commerce',
    year: '2025',
    role: 'Full-Stack · Design · Motion',
    overview: 'A complete luxury fashion experience with product catalog, lookbook, product detail pages and a refined checkout flow. Built as a fully navigable demo inside this portfolio.',
    stack: ['React', 'GSAP', 'Tailwind', 'Node.js'],
    demo: '/demo/luxe-atelier',
  },
  'nova-dash': {
    title: 'Nova Dashboard',
    category: 'SaaS · Analytics',
    year: '2025',
    role: 'Frontend · Data Visualization',
    overview: 'Dark-themed analytics dashboard with KPI cards, charts and filterable data views. Demonstrates complex UI patterns and real-time feel.',
    stack: ['React', 'Recharts', 'Tailwind'],
    demo: '/demo/nova-dash',
  },
  'aether-studio': {
    title: 'Aether Studio',
    category: 'Creative Agency',
    year: '2024',
    role: 'Design System · Frontend',
    overview: 'Agency site focused on case studies and services with strong typography and smooth transitions.',
    stack: ['React', 'GSAP', 'Tailwind'],
    demo: '/demo/aether-studio',
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = data[id]

  if (!project) {
    return (
      <div className="pt-32 px-6 text-center">
        <p className="text-muted">Project not found.</p>
        <Link to="/projects" className="text-gold mt-4 inline-block">← Back to projects</Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/projects" className="text-sm text-muted hover:text-gold mb-8 inline-block">← All projects</Link>
        <p className="text-xs tracking-widest uppercase text-gold mb-3">{project.category}</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">{project.title}</h1>
        <p className="text-soft text-lg leading-relaxed mb-10">{project.overview}</p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <div>
            <p className="text-xs text-muted uppercase mb-1">Year</p>
            <p className="font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase mb-1">Role</p>
            <p className="font-medium">{project.role}</p>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-xs text-muted uppercase mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="px-3 py-1.5 text-sm rounded-lg bg-black-100 border border-white/10">{s}</span>
            ))}
          </div>
        </div>

        <Link
          to={project.demo}
          className="inline-flex px-8 py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-colors"
        >
          Open Live Demo →
        </Link>
      </div>
    </div>
  )
}
