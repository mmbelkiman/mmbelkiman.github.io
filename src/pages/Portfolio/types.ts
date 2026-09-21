import type { PortfolioTopRowProps } from '@/components/compositions/PageRow/PortfolioTopRow'
import type { PortfolioProjectsRowProps } from '@/components/compositions/PageRow/PortfolioProjectsRow'
import type { ProfessionalExperienceRowProps } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import type { SkillsRowProps } from '@/components/compositions/PageRow/SkillsLanguagesRow'

export type PortfolioContent = {
  contactAndEducation: ContactEducationRowProps
  projects: PortfolioProjectsRowProps['projects']
  professionalExperience: ProfessionalExperienceRowProps['experiences']
  skills: SkillsRowProps
  topRow?: PortfolioTopRowProps
}
import type { ContactEducationRowProps } from '@/components/compositions/PageRow/ContactEducationRow'
