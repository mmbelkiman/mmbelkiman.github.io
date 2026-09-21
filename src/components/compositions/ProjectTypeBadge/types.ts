export const PROJECT_TYPE_NAMES = ['game', 'software', 'social', 'doc'] as const

export type ProjectTypeName = (typeof PROJECT_TYPE_NAMES)[number]

export type ProjectTypeBadgeProps = {
  type: ProjectTypeName
  tone?: 'default' | 'featured'
}
