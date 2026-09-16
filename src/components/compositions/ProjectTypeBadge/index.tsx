import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { DeviceMobileIcon } from '@phosphor-icons/react/dist/csr/DeviceMobile'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GlobeIcon } from '@phosphor-icons/react/dist/csr/Globe'
import './style.css'
import type { ProjectTypeBadgeProps } from './types'

export { PROJECT_TYPE_NAMES } from './types'
export type { ProjectTypeBadgeProps, ProjectTypeName } from './types'

const PROJECT_TYPE_CONTENT = {
  game: { icon: GameControllerIcon, label: 'Game' },
  mobile: { icon: DeviceMobileIcon, label: 'Mobile' },
  software: { icon: CodeIcon, label: 'Software' },
  web: { icon: GlobeIcon, label: 'Web' },
} as const

export function ProjectTypeBadge({ type }: ProjectTypeBadgeProps) {
  const { icon: Icon, label } = PROJECT_TYPE_CONTENT[type]

  return (
    <span className={`v1-project-type-badge v1-project-type-badge--${type}`}>
      <Icon aria-hidden="true" size="var(--icon-size-nano)" weight="bold" />
      {label}
    </span>
  )
}
