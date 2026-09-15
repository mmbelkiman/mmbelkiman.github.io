import { PortfolioTopRow } from '@/components/compositions/PageRow/PortfolioTopRow'
import { PortfolioProjectsRow } from '@/components/compositions/PageRow/PortfolioProjectsRow'
import { ProfessionalExperienceRow } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import { ProfileAboutRow } from '@/components/compositions/PageRow/ProfileAboutRow'
import { QuickInfoRow } from '@/components/compositions/PageRow/QuickInfoRow'
import { SkillsLanguagesRow } from '@/components/compositions/PageRow/SkillsLanguagesRow'
import './style.css'
import type { PortfolioProps } from './types'

export type { PortfolioProps } from './types'

export function Portfolio({
  contactAndEducation,
  projects,
  professionalExperience,
  skillsAndLanguages,
  topRow,
}: PortfolioProps) {
  return (
    <main className="v1-portfolio-page">
      <div className="v1-portfolio-page__content">
        <PortfolioTopRow {...topRow} />
        <ProfileAboutRow />
        <QuickInfoRow />
        <ProfessionalExperienceRow experiences={professionalExperience} />
        <SkillsLanguagesRow {...skillsAndLanguages} />
        <ContactEducationRow {...contactAndEducation} />
        <PortfolioProjectsRow projects={projects} />
      </div>
    </main>
  )
}
import { ContactEducationRow } from '@/components/compositions/PageRow/ContactEducationRow'
