import { useScrollReveal } from '../hooks/useScrollReveal'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...props }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
