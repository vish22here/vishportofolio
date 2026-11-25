import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function ProjectsSection() {
  const { projects } = portfolioData
  const { featured, upcomingSlot } = projects

  return (
    <section id="projects" className="ed-section">
      <div className="container">
        <Reveal className="section-intro-row">
          <div>
            <div className="ed-index">
              <span className="ed-index__num">{projects.index}</span>
              <span>/ {projects.label}</span>
            </div>
            <h2 className="ed-section-title">{projects.title}</h2>
          </div>
        </Reveal>

        <Reveal className="project-feature" delay={60}>
          <div className="project-feature__header">
            <div className="project-feature__title-group">
              <span className="project-feature__tag">{featured.category}</span>
              <h3 className="project-feature__title">
                {featured.title}
                <span className="project-feature__title-accent">
                  {featured.titleAccent}
                </span>
              </h3>
            </div>
            <span className="project-feature__num">CASE / {featured.number}</span>
          </div>

          <div className="ed-grid">
            <div className="ed-col-5">
              <p className="project-feature__summary">{featured.summary}</p>
              <p className="project-feature__note">{featured.scopeNote}</p>

              {(featured.repoUrl || featured.writeupUrl) && (
                <div className="project-feature__links">
                  {featured.repoUrl ? (
                    <a
                      href={featured.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ed-btn ed-btn--outline ed-btn--sm"
                    >
                      <span>Repository</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                  {featured.writeupUrl ? (
                    <a
                      href={featured.writeupUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ed-btn ed-btn--outline ed-btn--sm"
                    >
                      <span>Lab Notes</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              )}
            </div>

            <div className="ed-col-7">
              <div className="project-architecture">
                <div className="project-architecture__caption">
                  Lab Architecture &amp; Monitoring Scope
                </div>
                {featured.architecture.map((item) => (
                  <div key={item.step} className="project-architecture__row">
                    <span className="project-architecture__step">{item.step}</span>
                    <div>
                      <h4 className="project-architecture__name">{item.component}</h4>
                      <p className="project-architecture__role">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="project-upcoming-row" delay={110}>
          <div className="project-upcoming-row__left">
            <span className="project-feature__num">{upcomingSlot.number}</span>
            <span className="project-upcoming-row__title">{upcomingSlot.title}</span>
          </div>
          <span className="project-upcoming-row__note">
            [{upcomingSlot.status}] {upcomingSlot.note}
          </span>
        </Reveal>
      </div>
    </section>
  )
}
