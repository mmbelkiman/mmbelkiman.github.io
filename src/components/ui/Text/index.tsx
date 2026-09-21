import './style.css'
import type { TextProps } from './types'

export type { TextColor, TextProps, TextSize } from './types'

const TEXT_COLOR_CLASSES = {
  primary: undefined,
  secondary: 'text-secondary',
} as const

const TEXT_SIZE_CLASSES = {
  body: undefined,
  label: 'text-label',
  meta: 'text-meta',
} as const

export function Text({ children, color = 'primary', size = 'body' }: TextProps) {
  return <p className={['text', TEXT_SIZE_CLASSES[size], TEXT_COLOR_CLASSES[color]].filter(Boolean).join(' ')}>{children}</p>
}
