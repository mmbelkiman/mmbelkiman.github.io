import { PROJECT_TECHNOLOGIES } from '../constants'
import type { ProjectTechnologyName } from '../types'

export type ProjectTechnologyProps = {
  bg?: 'filled' | 'transparent'
  border?: 'visible' | 'none'
  showIcon?: boolean
  tech: ProjectTechnologyName
}

export function ProjectTechnology({
  bg = 'filled',
  border = 'visible',
  showIcon = true,
  tech,
}: ProjectTechnologyProps) {
  const { icon: Icon, label } = PROJECT_TECHNOLOGIES[tech]

  return (
    <li
      className={`project-card__technology project-card__technology--${tech} project-card__technology--bg-${bg} project-card__technology--border-${border}`}
    >
      {showIcon ? <Icon aria-hidden="true" weight="fill" /> : null}
      {label}
    </li>
  )
}
