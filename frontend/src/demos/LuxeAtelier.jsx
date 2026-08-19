import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'

function DemoNav() {
  const loc = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/demo/luxe-atelier" className="font-display text-xl tracking-wide text-white">
          LUXE ATELIER
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/demo/luxe-atelier" className={loc.pathname === '/demo/luxe-atelier' ? 'text-white' : 'text-white/60 hover:text-white'}>Home</Link>
          <Link to="/demo/luxe-atelier/shop" className={loc.pathname.includes('shop') ? 'text-white' : 'text-white/60 hover:text-white'}>Shop</Link>
          <Link to="/demo/luxe-atelier/lookbook" className={loc.pathname.includes('lookbook') ? 'text-white' : 'text-white/60 hover:text-white'}>Lookbook</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/projects" className="text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1.5 rounded-full">
            ← Exit Demo
          </Link>
        </div>
      </div>
    </nav>
  )
}

function LuxeHome() {
  useEffect(() => {
    gsap.from('.luxe-hero', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.luxe-card', { y: 50, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.3, ease: 'power3.out' })
  }, [])

  const featured = [
    {
      name: 'Tailored Overcoat',
      price: '$890',
      tag: 'Outerwear',
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Silk Knit Polo',
      price: '$320',
      tag: 'Knitwear',
      img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Structured Trouser',
      price: '$450',
      tag: 'Bottoms',
      img: 'https://images.unsplash.com/photo-1506629082955-511b1aa78283?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="luxe-hero pt-32 pb-20 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">SS26 Collection</p>
        <h1 className="font-display text-5xl md:text-7xl font-medium mb-6 leading-tight">
          Defined by<br />silence & form
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          Minimal luxury menswear. Cut for presence, designed for the everyday exceptional.
        </p>
        <Link to="/demo/luxe-atelier/shop" className="inline-block px-10 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
          Explore Collection
        </Link>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div key={item.name} className="luxe-card group">
              <div className="aspect-[3/4] mb-4 relative overflow-hidden bg-[#141414]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{item.tag}</p>
              <h3 className="text-lg mb-1 group-hover:text-white/80 transition-colors">{item.name}</h3>
              <p className="text-white/60">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function LuxeShop() {
  const products = [
    { name: 'Cashmere Coat', price: '$1,200', cat: 'Outerwear', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80' },
    { name: 'Wool Blazer', price: '$780', cat: 'Tailoring', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80' },
    { name: 'Merino Crew', price: '$280', cat: 'Knitwear', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80' },
    { name: 'Pleated Trouser', price: '$420', cat: 'Bottoms', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80' },
    { name: 'Leather Derby', price: '$560', cat: 'Footwear', img: 'https://images.unsplash.com/photo-1614252235816-8c852f74fa3c?auto=format&fit=crop&w=800&q=80' },
    { name: 'Silk Scarf', price: '$180', cat: 'Accessories', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80' },
  ]

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl mb-2">Shop</h1>
        <p className="text-white/50 mb-12">All pieces · {products.length} items</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="aspect-[3/4] mb-4 overflow-hidden bg-[#141414]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-white/40 uppercase mb-1">{p.cat}</p>
              <h3 className="text-lg">{p.name}</h3>
              <p className="text-white/60 mt-1">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LuxeLookbook() {
  const frames = [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
  ]

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 px-6 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Lookbook SS26</h1>
        <p className="text-white/50 mb-16 max-w-lg mx-auto">
          A study in proportion and restraint. Shot in muted tones against architectural backdrops.
        </p>
        <div className="grid gap-6">
          {frames.map((src, i) => (
            <div key={i} className="aspect-[16/9] overflow-hidden bg-[#111]">
              <img
                src={src}
                alt={`Lookbook frame ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LuxeAtelier() {
  return (
    <>
      <DemoNav />
      <Routes>
        <Route index element={<LuxeHome />} />
        <Route path="shop" element={<LuxeShop />} />
        <Route path="lookbook" element={<LuxeLookbook />} />
      </Routes>
    </>
  )
}
