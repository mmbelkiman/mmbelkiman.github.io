import type { FeaturedProjectTechnologyName } from '@/components/compositions/FeaturedProjectCard'

export type SkillsGroup = {
  technologies: readonly FeaturedProjectTechnologyName[]
  title: string
}

export type SkillsProps = {
  groups: readonly SkillsGroup[]
}
