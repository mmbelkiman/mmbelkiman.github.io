import { TECHNOLOGIES } from './constants'
import './style.css'
import type { TechnologyTagProps } from './types'

export type { TechnologyName, TechnologyTagBackground, TechnologyTagProps } from './types'
export { TECHNOLOGY_NAMES } from './constants'

export function TechnologyTag({
  bg = 'filled',
  border = 'visible',
  showIcon = true,
  technology,
}: TechnologyTagProps) {
  const { icon: Icon, iconColor, label, logo } = TECHNOLOGIES[technology]
  const color = iconColor ?? (logo?.hex ? `#${logo.hex}` : undefined)

  return (
    <li
      className={`technology-tag technology-tag--${technology} technology-tag--bg-${bg} technology-tag--border-${border}`}
    >
      {showIcon ? (
        logo ? (
          <svg
            aria-hidden="true"
            className="technology-tag__logo"
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
      {label}
    </li>
  )
}
