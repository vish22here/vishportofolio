import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Reveal } from './Reveal'

export function ContactSection() {
  const { contact } = portfolioData
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState('')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email.value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFeedback('Please enter your name, email address, and message.')
      return
    }

    if (contact.email.isPlaceholder) {
      setFeedback(
        'Form validated. Replace contact.email in src/data/portfolioData.js to enable mailto delivery.',
      )
      return
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name.trim()}`)
    const body = encodeURIComponent(
      `Name: ${formState.name.trim()}\nEmail: ${formState.email.trim()}\n\n${formState.message.trim()}`,
    )
    window.location.href = `mailto:${contact.email.value}?subject=${subject}&body=${body}`
    setFeedback('Opening your email client with your drafted message.')
  }

  return (
    <section id="contact" className="ed-section">
      <div className="container ed-grid">
        <Reveal className="ed-col-5">
          <div className="ed-index">
            <span className="ed-index__num">{contact.index}</span>
            <span>/ {contact.label}</span>
          </div>

          <h2 className="contact__headline">{contact.headline}</h2>
          <p className="contact__note">{contact.note}</p>

          <div className="contact-channels">
            <div className="contact-channel">
              <div>
                <span className="contact-channel__label">
                  Email {contact.email.isPlaceholder ? '— Placeholder' : ''}
                </span>
                <span className="contact-channel__value">{contact.email.value}</span>
              </div>
              <button
                type="button"
                className="ed-btn ed-btn--outline ed-btn--sm"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {contact.links.map((link) => {
              if (link.href && !link.isPlaceholder) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-channel"
                  >
                    <div>
                      <span className="contact-channel__label">{link.label}</span>
                      <span className="contact-channel__value">{link.displayValue}</span>
                    </div>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )
              }

              return (
                <div key={link.id} className="contact-channel" aria-disabled="true">
                  <div>
                    <span className="contact-channel__label">{link.label}</span>
                    <span className="contact-channel__value">{link.displayValue}</span>
                  </div>
                  <span className="contact-channel__placeholder">Placeholder</span>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="ed-col-7" delay={90}>
          <form className="ed-form" onSubmit={handleSubmit} noValidate>
            <div className="ed-field">
              <label htmlFor="ed-contact-name">Name</label>
              <input
                id="ed-contact-name"
                type="text"
                className="ed-input"
                placeholder="Your name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, name: event.target.value }))
                }
              />
            </div>

            <div className="ed-field">
              <label htmlFor="ed-contact-email">Email</label>
              <input
                id="ed-contact-email"
                type="email"
                className="ed-input"
                placeholder="you@example.com"
                value={formState.email}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>

            <div className="ed-field">
              <label htmlFor="ed-contact-message">Message</label>
              <textarea
                id="ed-contact-message"
                className="ed-textarea"
                placeholder="Write a note..."
                value={formState.message}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, message: event.target.value }))
                }
              />
            </div>

            {feedback ? <p className="ed-form__feedback">{feedback}</p> : null}

            <div>
              <button type="submit" className="ed-btn ed-btn--accent">
                <span>Send Message</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
