import type { ProjectCardProps } from '@/components/compositions/ProjectCard'

export type PortfolioProject = ProjectCardProps & {
  id: string
  presentation?: 'pipoclube' | 'epicGolf'
  sortYear?: number
}

export type PortfolioProjectsRowProps = {
  projects: readonly PortfolioProject[]
}
