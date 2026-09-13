import type { ReactNode } from 'react'

export type HeadingLevel = 1 | 2

export type HeadingProps = {
  children: ReactNode
  level: HeadingLevel
}
