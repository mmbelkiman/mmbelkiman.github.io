import { useEffect, useState } from 'react'
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
  const [isLanguageToggleCompact, setIsLanguageToggleCompact] = useState(false)
  const { contactAndEducation, projects, professionalExperience, skills, topRow } = usePortfolioContent()

  useEffect(() => {
    const updateLanguageToggleSize = () => setIsLanguageToggleCompact(window.scrollY > 48)

    updateLanguageToggleSize()
    window.addEventListener('scroll', updateLanguageToggleSize, { passive: true })

    return () => window.removeEventListener('scroll', updateLanguageToggleSize)
  }, [])

  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'pt-BR' : 'en'

    localStorage.setItem('site-language', nextLanguage)
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <main className="portfolio-page">
      <div className="portfolio-page__content">
        <button
          aria-label={t('menu.switchLanguage')}
          className={`portfolio-page__language-toggle${isLanguageToggleCompact ? ' portfolio-page__language-toggle--compact' : ''}`}
          onClick={toggleLanguage}
          type="button"
        >
          {isLanguageToggleCompact ? (i18n.resolvedLanguage === 'en' ? 'PT' : 'EN') : t('menu.switchLanguage')}
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
