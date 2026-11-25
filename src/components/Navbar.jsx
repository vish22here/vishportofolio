import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { brand, navigation } = portfolioData

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`ed-nav ${scrolled ? 'ed-nav--scrolled' : ''}`}>
        <div className="container ed-nav__inner">
          <a href="#top" className="ed-brand" onClick={closeMenu}>
            <span className="ed-brand__initials">{brand.initials}</span>
            <span className="ed-brand__slash" aria-hidden="true">
              /
            </span>
            <span className="ed-brand__label">{brand.label}</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="ed-nav__links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="ed-nav__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="ed-nav__menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation-drawer"
        className={`ed-mobile-drawer ${menuOpen ? 'ed-mobile-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="ed-mobile-drawer__list">
            {navigation.map((item, idx) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="ed-mobile-drawer__link"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  <span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--accent)',
                        marginRight: '14px',
                      }}
                    >
                      0{idx + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
