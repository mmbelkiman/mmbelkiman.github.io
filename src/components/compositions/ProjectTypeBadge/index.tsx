import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { FileTextIcon } from '@phosphor-icons/react/dist/csr/FileText'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { UsersIcon } from '@phosphor-icons/react/dist/csr/Users'
import './style.css'
import type { ProjectTypeBadgeProps } from './types'

export { PROJECT_TYPE_NAMES } from './types'
export type { ProjectTypeBadgeProps, ProjectTypeName } from './types'

const PROJECT_TYPE_CONTENT = {
  doc: { icon: FileTextIcon, label: 'Doc' },
  game: { icon: GameControllerIcon, label: 'Game' },
  software: { icon: CodeIcon, label: 'Software' },
  social: { icon: UsersIcon, label: 'Social Network' },
} as const

export function ProjectTypeBadge({ type, tone = 'default' }: ProjectTypeBadgeProps) {
  const { icon: Icon, label } = PROJECT_TYPE_CONTENT[type]

  return (
    <span className={`project-type-badge project-type-badge--${type} project-type-badge--${tone}`}>
      <Icon aria-hidden="true" size="var(--icon-size-nano)" weight="bold" />
      {label}
    </span>
  )
}
