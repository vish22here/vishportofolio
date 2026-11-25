import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="ed-section">
      <div className="container">
        <Reveal className="section-intro-row">
          <div>
            <div className="ed-index">
              <span className="ed-index__num">{skills.index}</span>
              <span>/ {skills.label}</span>
            </div>
            <h2 className="ed-section-title">{skills.title}</h2>
          </div>
        </Reveal>

        <div className="skills-matrix">
          {skills.groups.map((group, idx) => (
            <Reveal
              key={group.category}
              className="skill-group"
              delay={50 + idx * 60}
            >
              <div className="skill-group__meta">
                <span className="skill-group__index">GROUP {group.index}</span>
                <h3 className="skill-group__title">{group.category}</h3>
              </div>

              <div className="skill-group__items">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <h4 className="skill-item__name">{item.name}</h4>
                    <span className="skill-item__level">{item.proficiency}</span>
                    <p className="skill-item__detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
