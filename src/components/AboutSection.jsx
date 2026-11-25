import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function AboutSection() {
  const { about } = portfolioData

  return (
    <section id="about" className="ed-section">
      <div className="container ed-grid">
        <Reveal className="ed-col-4">
          <div className="about__sticky">
            <div className="ed-index">
              <span className="ed-index__num">{about.index}</span>
              <span>/ {about.label}</span>
            </div>
            <p className="ed-serif-lead about__lead">{about.editorialLead}</p>
          </div>
        </Reveal>

        <Reveal className="ed-col-8" delay={80}>
          <div className="about__prose">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="about__facts">
            {about.facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
