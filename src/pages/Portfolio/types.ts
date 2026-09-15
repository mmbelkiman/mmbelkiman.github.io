import type { PortfolioTopRowProps } from '@/components/compositions/PageRow/PortfolioTopRow'
import type { PortfolioProjectsRowProps } from '@/components/compositions/PageRow/PortfolioProjectsRow'
import type { ProfessionalExperienceRowProps } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import type { SkillsLanguagesRowProps } from '@/components/compositions/PageRow/SkillsLanguagesRow'

export type PortfolioProps = {
  contactAndEducation: ContactEducationRowProps
  projects: PortfolioProjectsRowProps['projects']
  professionalExperience: ProfessionalExperienceRowProps['experiences']
  skillsAndLanguages: SkillsLanguagesRowProps
  topRow?: PortfolioTopRowProps
}
import type { ContactEducationRowProps } from '@/components/compositions/PageRow/ContactEducationRow'
