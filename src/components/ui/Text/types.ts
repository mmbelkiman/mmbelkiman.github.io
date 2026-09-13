import type { ReactNode } from 'react'

export type TextColor = 'primary' | 'secondary'
export type TextSize = 'body' | 'label' | 'meta'

export type TextProps = {
  children: ReactNode
  color?: TextColor
  size?: TextSize
}
