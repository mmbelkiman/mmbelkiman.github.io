import { useTranslation } from 'react-i18next'
import './style.css'
import type { ProjectCategoryProps } from './types'

export { PROJECT_CATEGORY_NAMES } from './types'
export type { ProjectCategoryName, ProjectCategoryProps } from './types'

const PROJECT_CATEGORY_CLASSES = {
  banking: 'project-category-banking',
  edtech: 'project-category-edtech',
  financial: 'project-category-financial',
  fintech: 'project-category-fintech',
  industrial: 'project-category-industrial',
  insurance: 'project-category-insurance',
  logistics: 'project-category-logistics',
  loyalty: 'project-category-loyalty',
  media: 'project-category-media',
  'research-platform': 'project-category-research-platform',
  simulation: 'project-category-simulation',
  'threat-intelligence': 'project-category-threat-intelligence',
} as const

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
    <span className={`project-category ${PROJECT_CATEGORY_CLASSES[category]}`}>
      {t(PROJECT_CATEGORY_LABEL_KEYS[category])}
    </span>
  )
}
