import { FeaturedProjectsRow } from '@/components/compositions/PageRow/FeaturedProjectsRow'
import { PortfolioTopRow } from '@/components/compositions/PageRow/PortfolioTopRow'
import { ProfessionalExperienceRow } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import { ProfileAboutRow } from '@/components/compositions/PageRow/ProfileAboutRow'
import { ProjectArchiveRow } from '@/components/compositions/PageRow/ProjectArchiveRow'
import { QuickInfoRow } from '@/components/compositions/PageRow/QuickInfoRow'
import { SkillsLanguagesRow } from '@/components/compositions/PageRow/SkillsLanguagesRow'
import './style.css'
import type { PortfolioProps } from './types'

export type { PortfolioProps } from './types'

export function Portfolio({
  archivedProjects,
  featuredProjects,
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
        <FeaturedProjectsRow projects={featuredProjects} />
        <ProfessionalExperienceRow experiences={professionalExperience} />
        <SkillsLanguagesRow {...skillsAndLanguages} />
        <ProjectArchiveRow projects={archivedProjects} />
      </div>
    </main>
  )
}
