import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ProjectDetail from './pages/ProjectDetail'
import LuxeAtelier from './demos/LuxeAtelier'
import NovaDash from './demos/NovaDash'
import AetherStudio from './demos/AetherStudio'

function App() {
  const location = useLocation()
  const isDemo = location.pathname.startsWith('/demo')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black">
      {!isDemo && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo/luxe-atelier/*" element={<LuxeAtelier />} />
        <Route path="/demo/nova-dash/*" element={<NovaDash />} />
        <Route path="/demo/aether-studio/*" element={<AetherStudio />} />
      </Routes>
      {!isDemo && <Footer />}
    </div>
  )
}

export default App
