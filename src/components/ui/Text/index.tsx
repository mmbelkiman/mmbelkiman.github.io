import './style.css'
import type { TextProps } from './types'

export type { TextColor, TextProps, TextSize } from './types'

export function Text({ children, color = 'primary', size = 'body' }: TextProps) {
  return <p className={`v1-text v1-text--${size} v1-text--${color}`}>{children}</p>
}
