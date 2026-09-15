import type { ProjectCardProps } from '@/components/compositions/ProjectCard'

export type PortfolioProject = ProjectCardProps & {
  id: string
}

export type PortfolioProjectsRowProps = {
  projects: readonly PortfolioProject[]
}
