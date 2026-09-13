import type {
  FeaturedProjectTechnologyBackground,
  FeaturedProjectTechnologyName,
} from '@/components/compositions/FeaturedProjectCard'
import type { ProjectCategoryName } from '@/components/compositions/ProjectCategory'

export type ExperienceMonthYear = {
  month: string
  year: number
}

export type ExperiencePeriod = {
  end?: ExperienceMonthYear
  start: ExperienceMonthYear
}

export type Engagement = {
  category?: ProjectCategoryName
  description: string
  id: string
  logo?: string
  name: string
  period?: string
  responsibilities: readonly string[]
  technologies: readonly FeaturedProjectTechnologyName[]
  technologyBackground?: FeaturedProjectTechnologyBackground
  type: 'client' | 'product'
}

export type Experience = {
  company: string
  companyType?: string
  description: string
  engagements?: readonly Engagement[]
  id: string
  location?: string
  logo?: string
  period: ExperiencePeriod
  role: string
}

export type ProfessionalExperienceRowProps = {
  experiences: readonly Experience[]
  initialSelectedExperienceId?: string
}
