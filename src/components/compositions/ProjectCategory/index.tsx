import { useTranslation } from 'react-i18next'
import './style.css'
import type { ProjectCategoryProps } from './types'

export { PROJECT_CATEGORY_NAMES } from './types'
export type { ProjectCategoryName, ProjectCategoryProps } from './types'

const PROJECT_CATEGORY_LABEL_KEYS = {
  banking: 'v1.projectCategories.banking',
  edtech: 'v1.projectCategories.edtech',
  financial: 'v1.projectCategories.financial',
  fintech: 'v1.projectCategories.fintech',
  industrial: 'v1.projectCategories.industrial',
  insurance: 'v1.projectCategories.insurance',
  logistics: 'v1.projectCategories.logistics',
  loyalty: 'v1.projectCategories.loyalty',
  media: 'v1.projectCategories.media',
  'research-platform': 'v1.projectCategories.researchPlatform',
  simulation: 'v1.projectCategories.simulation',
  'threat-intelligence': 'v1.projectCategories.threatIntelligence',
} as const

export function ProjectCategory({ category }: ProjectCategoryProps) {
  const { t } = useTranslation()

  return (
    <span className={`project-category project-category--${category}`}>
      {t(PROJECT_CATEGORY_LABEL_KEYS[category])}
    </span>
  )
}
