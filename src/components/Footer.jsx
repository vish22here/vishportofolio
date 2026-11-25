import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export function Footer() {
  const { brand, profile, navigation } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="ed-footer">
      <div className="container ed-footer__inner">
        <div>
          <div className="ed-brand">
            <span className="ed-brand__initials">{brand.initials}</span>
            <span className="ed-brand__slash" aria-hidden="true">
              /
            </span>
            <span className="ed-brand__label">{brand.label}</span>
          </div>
          <p className="ed-footer__meta">
            {currentYear} {profile.fullName} — {profile.rolePrimary} / {profile.roleSecondary}
          </p>
        </div>

        <nav className="ed-footer__nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#top" className="ed-btn ed-btn--outline ed-btn--sm" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
