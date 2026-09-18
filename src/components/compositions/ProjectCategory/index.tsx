import './style.css'
import type { ProjectCategoryProps } from './types'

export { PROJECT_CATEGORY_NAMES } from './types'
export type { ProjectCategoryName, ProjectCategoryProps } from './types'

const PROJECT_CATEGORY_LABELS = {
  banking: 'Banking',
  edtech: 'EdTech',
  financial: 'Financial',
  fintech: 'Fintech',
  industrial: 'Industrial',
  insurance: 'Insurance',
  logistics: 'Logistics',
  loyalty: 'Loyalty',
  media: 'Media',
  'research-platform': 'Research Platform',
  simulation: 'Simulation',
  'threat-intelligence': 'Threat Intelligence',
} as const

export function ProjectCategory({ category }: ProjectCategoryProps) {
  return (
    <span className={`project-category project-category--${category}`}>
      {PROJECT_CATEGORY_LABELS[category]}
    </span>
  )
}
