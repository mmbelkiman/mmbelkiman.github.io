export const PROJECT_CATEGORY_NAMES = ['financial', 'banking'] as const

export type ProjectCategoryName = (typeof PROJECT_CATEGORY_NAMES)[number]

export type ProjectCategoryProps = {
  category: ProjectCategoryName
}
