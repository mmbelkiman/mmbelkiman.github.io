import type { ProjectCardProps } from '@/components/compositions/ProjectCard'

export type PortfolioProject = ProjectCardProps & {
  id: string
  presentation?: 'pipoclube' | 'epicGolf'
}

export type PortfolioProjectsRowProps = {
  projects: readonly PortfolioProject[]
}
