import aboutBackground from '@/assets/backgrounds/about-bg.jpg'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'

export function AboutMeCard() {
  const { t } = useTranslation()
  const description = t('v1.about.description', { returnObjects: true }) as string[]

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.about')} />}>
      <section aria-label={t('v1.sections.about')} className="about-me-card">
        <img alt="" className="about-me-card-background" src={aboutBackground} />
        <div className="about-me-card-content">
          <Heading level={1}>{t('v1.about.title')}</Heading>
          <div className="about-me-card-description">
            {description.map((paragraph) => (
              <Text color="secondary" key={paragraph}>
                {paragraph}
              </Text>
            ))}
            <Text color="secondary">
              {t('v1.about.prompt')}
              <span aria-hidden="true" className="about-me-card-cursor">
                _
              </span>
            </Text>
          </div>
        </div>
      </section>
    </PanelFrame>
  )
}
