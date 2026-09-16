import './style.css'
import type { HeadingProps } from './types'

export type { HeadingLevel, HeadingProps } from './types'

export function Heading({ children, level }: HeadingProps) {
  const Element = `h${level}` as const

  return <Element className={`heading heading--${level}`}>{children}</Element>
}
