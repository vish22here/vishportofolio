import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function EducationTimeline() {
  const { education } = portfolioData

  return (
    <section id="education" className="ed-section">
      <div className="container">
        <Reveal className="section-intro-row">
          <div>
            <div className="ed-index">
              <span className="ed-index__num">{education.index}</span>
              <span>/ {education.label}</span>
            </div>
            <h2 className="ed-section-title">{education.title}</h2>
          </div>
        </Reveal>

        <div className="edu-timeline">
          {education.entries.map((entry, idx) => (
            <Reveal
              key={entry.id}
              className="edu-entry"
              delay={60 + idx * 60}
            >
              <div className="edu-entry__left">
                <span className="edu-entry__marker" aria-hidden="true" />
                <span className="edu-entry__status">{entry.status}</span>
                <div className="edu-entry__institution">{entry.institution}</div>
              </div>

              <div className="edu-entry__right">
                <h3 className="edu-entry__degree">{entry.degree}</h3>
                <p className="edu-entry__summary">{entry.summary}</p>
                <div className="edu-entry__areas">
                  {entry.areas.map((area) => (
                    <span key={area} className="edu-entry__area">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
