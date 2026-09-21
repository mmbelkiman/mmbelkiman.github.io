import './style.css'
import type { HeadingProps } from './types'

export type { HeadingLevel, HeadingProps } from './types'

const HEADING_CLASSES = {
  1: 'heading-1',
  2: 'heading-2',
  3: 'heading-3',
} as const

export function Heading({ children, level }: HeadingProps) {
  const Element = `h${level}` as const

  return <Element className={`heading ${HEADING_CLASSES[level]}`}>{children}</Element>
}
