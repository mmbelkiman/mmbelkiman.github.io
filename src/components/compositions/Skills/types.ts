import type { ProjectTechnologyName } from '@/components/compositions/ProjectCard'

export type SkillsGroup = {
  technologies: readonly ProjectTechnologyName[]
  title: string
}

export type SkillsProps = {
  groups: readonly SkillsGroup[]
}
