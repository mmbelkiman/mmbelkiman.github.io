import './style.css'
import type { ProjectCategoryProps } from './types'

export { PROJECT_CATEGORY_NAMES } from './types'
export type { ProjectCategoryName, ProjectCategoryProps } from './types'

const PROJECT_CATEGORY_LABELS = {
  banking: 'Banking',
  financial: 'Financial',
} as const

export function ProjectCategory({ category }: ProjectCategoryProps) {
  return (
    <span className={`v1-project-category v1-project-category--${category}`}>
      {PROJECT_CATEGORY_LABELS[category]}
    </span>
  )
}
