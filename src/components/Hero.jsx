import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function Hero() {
  const { profile } = portfolioData

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__top-bar">
          <span className="hero__kicker">
            <strong>{profile.degree}</strong> — {profile.university}
          </span>
          <span className="hero__kicker">Defensive Security &amp; SOC Studies</span>
        </div>

        <Reveal className="hero__headline-wrap">
          <h1 className="hero__name">
            <span className="hero__name-line">{profile.nameFirst}</span>
            <span className="hero__name-line hero__name-line--offset">
              {profile.nameLast}
            </span>
          </h1>

          <div className="hero__role-row">
            <span className="hero__role-sans">{profile.rolePrimary}</span>
            <span className="hero__role-sep" aria-hidden="true">
              /
            </span>
            <span className="hero__role-serif">{profile.roleSecondary}</span>
          </div>
        </Reveal>

        <Reveal className="ed-grid hero__lower" delay={90}>
          <div className="ed-col-7">
            <p className="hero__statement">{profile.heroStatement}</p>
          </div>

          <div className="ed-col-5 hero__actions-col">
            <div className="hero__meta-table">
              {profile.heroMeta.map((row) => (
                <div key={row.label} className="hero__meta-row">
                  <span className="hero__meta-label">{row.label}</span>
                  <span className="hero__meta-value">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="hero__cta-group">
              <a href="#projects" className="ed-btn ed-btn--accent">
                <span>View Selected Work</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="ed-btn ed-btn--outline">
                <span>Contact</span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="hero__scroll-wrap">
          <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
            <span className="hero__scroll-line" aria-hidden="true" />
            <span>Scroll</span>
            <ArrowDown size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
