import { TECHNOLOGIES } from './constants'
import { useTranslation } from 'react-i18next'
import './style.css'
import type { TechnologyTagProps } from './types'

export type { TechnologyName, TechnologyTagBackground, TechnologyTagProps } from './types'
export { TECHNOLOGY_NAMES } from './constants'

const BACKGROUND_CLASSES = {
  filled: 'technology-tag-bg-filled',
  transparent: 'technology-tag-bg-transparent',
} as const

const BORDER_CLASSES = {
  none: 'technology-tag-border-none',
  visible: undefined,
} as const

export function TechnologyTag({
  bg = 'filled',
  border = 'visible',
  showIcon = true,
  technology,
}: TechnologyTagProps) {
  const { t } = useTranslation()
  const { icon: Icon, iconColor, label, labelKey, logo } = TECHNOLOGIES[technology]
  const color = iconColor ?? (logo?.hex ? `#${logo.hex}` : undefined)

  return (
    <li className={['technology-tag', BACKGROUND_CLASSES[bg], BORDER_CLASSES[border]].filter(Boolean).join(' ')}>
      {showIcon ? (
        logo ? (
          <svg
            aria-hidden="true"
            className="technology-tag-logo"
            fill="currentColor"
            style={color ? { color } : undefined}
            viewBox="0 0 24 24"
          >
            <path d={logo.path} />
          </svg>
        ) : (
          <Icon aria-hidden="true" style={color ? { color } : undefined} weight="fill" />
        )
      ) : null}
      {labelKey ? t(labelKey) : label}
    </li>
  )
}
