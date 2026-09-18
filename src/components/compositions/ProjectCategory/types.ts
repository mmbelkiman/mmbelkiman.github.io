export const PROJECT_CATEGORY_NAMES = [
  'financial',
  'banking',
  'research-platform',
  'insurance',
  'edtech',
  'threat-intelligence',
  'fintech',
  'loyalty',
  'media',
  'logistics',
  'industrial',
  'simulation',
] as const

export type ProjectCategoryName = (typeof PROJECT_CATEGORY_NAMES)[number]

export type ProjectCategoryProps = {
  category: ProjectCategoryName
}
