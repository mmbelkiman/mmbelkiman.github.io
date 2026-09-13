import { FEATURED_PROJECT_TECHNOLOGIES } from '../constants'
import type { FeaturedProjectTechnologyName } from '../types'

export type FeaturedProjectTechnologyProps = {
  bg?: 'filled' | 'transparent'
  showIcon?: boolean
  tech: FeaturedProjectTechnologyName
}

export function FeaturedProjectTechnology({
  bg = 'filled',
  showIcon = true,
  tech,
}: FeaturedProjectTechnologyProps) {
  const { icon: Icon, label } = FEATURED_PROJECT_TECHNOLOGIES[tech]

  return (
    <li
      className={`v1-featured-project-card__technology v1-featured-project-card__technology--${tech} v1-featured-project-card__technology--bg-${bg}`}
    >
      {showIcon ? <Icon aria-hidden="true" weight="fill" /> : null}
      {label}
    </li>
  )
}
