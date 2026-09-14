import type { FeaturedProjectsRowProps } from '@/components/compositions/PageRow/FeaturedProjectsRow'
import type { PortfolioTopRowProps } from '@/components/compositions/PageRow/PortfolioTopRow'
import type { ProfessionalExperienceRowProps } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import type { ProjectArchiveRowProps } from '@/components/compositions/PageRow/ProjectArchiveRow'
import type { SkillsLanguagesRowProps } from '@/components/compositions/PageRow/SkillsLanguagesRow'

export type PortfolioProps = {
  archivedProjects: ProjectArchiveRowProps['projects']
  featuredProjects: FeaturedProjectsRowProps['projects']
  professionalExperience: ProfessionalExperienceRowProps['experiences']
  skillsAndLanguages: SkillsLanguagesRowProps
  topRow?: PortfolioTopRowProps
}
