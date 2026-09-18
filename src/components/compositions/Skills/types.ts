import type { TechnologyName } from '@/components/compositions/TechnologyTag'

export type SkillsGroup = {
  technologies: readonly TechnologyName[]
  title: string
}

export type SkillsProps = {
  groups: readonly SkillsGroup[]
}
