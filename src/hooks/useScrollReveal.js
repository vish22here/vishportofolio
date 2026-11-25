import { useEffect, useRef, useState } from 'react'

/**
 * Observes when an element enters the viewport and triggers a one-time reveal.
 * Respects `prefers-reduced-motion` by revealing immediately when reduced motion is enabled.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (isVisible) return undefined

    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setIsVisible(true))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, threshold, rootMargin])

  return [ref, isVisible]
}
