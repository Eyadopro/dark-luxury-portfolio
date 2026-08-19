export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest text-gold uppercase mb-4">
          About Me
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Building digital products
          <br />
          that feel <span className="gold-gradient">premium</span>
        </h2>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
          I'm a full-stack developer based in Egypt, specializing in modern web applications.
          I combine clean architecture with refined UI to create experiences that stand out.
          With strong expertise in React, Node.js, and design systems, I turn ideas into
          polished products that users love.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '20+', label: 'Projects Delivered' },
            { number: '15+', label: 'Happy Clients' },
            { number: '100%', label: 'Dedication' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.number}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
