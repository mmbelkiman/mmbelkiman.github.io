import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { FileTextIcon } from '@phosphor-icons/react/dist/csr/FileText'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { UsersIcon } from '@phosphor-icons/react/dist/csr/Users'
import { useTranslation } from 'react-i18next'
import './style.css'
import type { ProjectTypeBadgeProps } from './types'

export { PROJECT_TYPE_NAMES } from './types'
export type { ProjectTypeBadgeProps, ProjectTypeName } from './types'

const PROJECT_TYPE_CONTENT = {
  doc: FileTextIcon,
  game: GameControllerIcon,
  software: CodeIcon,
  social: UsersIcon,
} as const

const PROJECT_TYPE_CLASSES = {
  doc: 'project-type-badge-doc',
  game: 'project-type-badge-game',
  software: 'project-type-badge-software',
  social: 'project-type-badge-social',
} as const

const PROJECT_TYPE_TONE_CLASSES = {
  default: 'project-type-badge-default',
  featured: 'project-type-badge-featured',
} as const

export function ProjectTypeBadge({ type, tone = 'default' }: ProjectTypeBadgeProps) {
  const { t } = useTranslation()
  const Icon = PROJECT_TYPE_CONTENT[type]

  return (
    <span className={`project-type-badge ${PROJECT_TYPE_CLASSES[type]} ${PROJECT_TYPE_TONE_CLASSES[tone]}`}>
      <Icon aria-hidden="true" size="var(--icon-size-nano)" weight="bold" />
      {t(`v1.projectTypes.${type}`)}
    </span>
  )
}
