import aboutBackground from '@/assets/backgrounds/about-bg.jpg'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import { ABOUT_ME_CONTENT } from './constants'
import './style.css'

export function AboutMeCard() {
  return (
    <PanelFrame header={<PanelHeader label="About me" />}>
      <section aria-label="About me" className="v1-about-me-card">
        <img alt="" className="v1-about-me-card__background" src={aboutBackground} />
        <div className="v1-about-me-card__content">
          <Heading level={1}>{ABOUT_ME_CONTENT.title}</Heading>
          <div className="v1-about-me-card__description">
            {ABOUT_ME_CONTENT.description.map((paragraph) => (
              <Text color="secondary" key={paragraph}>
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </section>
    </PanelFrame>
  )
}
