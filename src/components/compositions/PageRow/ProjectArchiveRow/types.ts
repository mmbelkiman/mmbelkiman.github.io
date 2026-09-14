import type { ReactNode } from 'react'
import type { FeaturedProjectTechnologyName } from '@/components/compositions/FeaturedProjectCard'

export type ProjectArchiveLink = {
  label: string
  url: string
}

export type ProjectArchiveProjectKind = 'game' | 'mobile' | 'web'

export type ProjectArchiveProject = {
  description: string
  icon: ReactNode
  id: string
  imageAlt: string
  imageSrc: string
  kind: ProjectArchiveProjectKind
  links?: readonly ProjectArchiveLink[]
  role: string
  subtitle: string
  technologies: readonly FeaturedProjectTechnologyName[]
  title: string
  year: string
}

export type ProjectArchiveRowProps = {
  initialSelectedProjectId?: string
  projects: readonly [ProjectArchiveProject, ...ProjectArchiveProject[]]
}
