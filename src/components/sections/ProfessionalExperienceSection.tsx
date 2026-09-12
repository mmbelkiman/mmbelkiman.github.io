import type { RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { ProfessionalExperienceCard } from '../ProfessionalExperienceCard'
import { professionalExperiences } from '../../data/professionalExperiences'

type ProfessionalExperienceSectionProps = {
  carouselRef: RefObject<HTMLElement | null>
  onScrollCarousel: (direction: number) => void
}

export function ProfessionalExperienceSection({
  carouselRef,
  onScrollCarousel,
}: ProfessionalExperienceSectionProps) {
  const { t } = useTranslation()

  const getDescriptions = (descriptionsKey?: string) => {
    if (!descriptionsKey) return []

    const description = t(descriptionsKey, { returnObjects: true })
    return Array.isArray(description) ? description.map(String) : []
  }

  return (
    <div className="row">
      <div className="col-md-11  block-full">
        <h1>
          <span className="icon-title fas fa-briefcase"> </span>
        </h1>
        <h1>
          <span id="topic-name-3">{t('home.topic-name-3')}</span>
        </h1>

        <div className="col-md-12 pn-ProductNav_Wrapper">
          <nav
            ref={carouselRef}
            id="pnProductNav"
            className="col-md-12 pn-ProductNav"
            style={{ overflow: 'auto', scrollbarColor: 'rgb(255,255,255) rgb(255,255,255)' }}
          >
            <div id="pnProductNavContents" className=" pn-ProductNav_Contents">
              {professionalExperiences.map((experience) => (
                <ProfessionalExperienceCard
                  key={experience.titleKey}
                  logoUrl={experience.logoUrl}
                  title={t(experience.titleKey)}
                  period={t(experience.periodKey)}
                  role={t(experience.roleKey)}
                  descriptions={getDescriptions(experience.descriptionsKey)}
                />
              ))}

              <span id="pnIndicator" className="pn-ProductNav_Indicator" />
            </div>
          </nav>
          <button
            id="pnAdvancerLeft"
            className="pn-Advancer pn-Advancer_Left"
            type="button"
            onClick={() => onScrollCarousel(-1)}
          >
            <svg
              className="pn-Advancer_Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 551 1024"
            >
              <path d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z" />
            </svg>
          </button>
          <button
            id="pnAdvancerRight"
            className="pn-Advancer pn-Advancer_Right"
            type="button"
            onClick={() => onScrollCarousel(1)}
          >
            <svg
              className="pn-Advancer_Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 551 1024"
            >
              <path d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
