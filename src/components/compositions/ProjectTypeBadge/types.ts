export const PROJECT_TYPE_NAMES = ['game', 'mobile', 'software', 'web'] as const

export type ProjectTypeName = (typeof PROJECT_TYPE_NAMES)[number]

export type ProjectTypeBadgeProps = {
  type: ProjectTypeName
}
