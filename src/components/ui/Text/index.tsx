import './style.css'
import type { TextProps } from './types'

export type { TextColor, TextProps, TextSize } from './types'

export function Text({ children, color = 'primary', size = 'body' }: TextProps) {
  return <p className={`text text-${size} text-${color}`}>{children}</p>
}
