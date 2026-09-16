import { useTranslation } from 'react-i18next'
import { PortfolioTopRow } from '@/components/compositions/PageRow/PortfolioTopRow'
import { PortfolioProjectsRow } from '@/components/compositions/PageRow/PortfolioProjectsRow'
import { ProfessionalExperienceRow } from '@/components/compositions/PageRow/ProfessionalExperienceRow'
import { ProfileAboutRow } from '@/components/compositions/PageRow/ProfileAboutRow'
import { QuickInfoRow } from '@/components/compositions/PageRow/QuickInfoRow'
import { SkillsRow } from '@/components/compositions/PageRow/SkillsLanguagesRow'
import './style.css'
import { usePortfolioContent } from './usePortfolioContent'

export function Portfolio() {
  const { i18n, t } = useTranslation()
  const { contactAndEducation, projects, professionalExperience, skills, topRow } = usePortfolioContent()
  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'pt-BR' : 'en'

    localStorage.setItem('site-language', nextLanguage)
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <main className="v1-portfolio-page">
      <div className="v1-portfolio-page__content">
        <button className="v1-portfolio-page__language-toggle" onClick={toggleLanguage} type="button">
          {t('menu.switchLanguage')}
        </button>
        <PortfolioTopRow {...topRow} />
        <ProfileAboutRow />
        <QuickInfoRow />
        <ProfessionalExperienceRow experiences={professionalExperience} />
        <SkillsRow {...skills} />
        <ContactEducationRow {...contactAndEducation} />
        <PortfolioProjectsRow projects={projects} />
      </div>
    </main>
  )
}
import { ContactEducationRow } from '@/components/compositions/PageRow/ContactEducationRow'
