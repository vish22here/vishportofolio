import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { EducationTimeline } from './components/EducationTimeline'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
