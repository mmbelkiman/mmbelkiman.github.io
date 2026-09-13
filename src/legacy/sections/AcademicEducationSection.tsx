import type { RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { AcademicEducationCard } from '@/legacy/AcademicEducationCard.tsx'
import { academicEducation } from '@/data/academicEducation.ts'

type AcademicEducationSectionProps = {
  carouselRef: RefObject<HTMLElement | null>
  onScrollCarousel: (direction: number) => void
}

export function AcademicEducationSection({
  carouselRef,
  onScrollCarousel,
}: AcademicEducationSectionProps) {
  const { t } = useTranslation()

  return (
    <div className="col-md-11  block-full">
      <h1>
        <span className="icon-title fas fa-graduation-cap"> </span>
      </h1>
      <h1>
        <span id="topic-name-4">{t('home.topic-name-4')}</span>
      </h1>

      <div className="col-md-12 pn-ProductNav_Wrapper">
        <nav
          ref={carouselRef}
          id="pnProductNavB"
          className="col-md-12 pn-ProductNav"
          style={{ overflowX: 'auto', scrollbarColor: 'rgb(255,255,255) rgb(255,255,255)' }}
        >
          <div id="pnProductNavContentsB" className=" pn-ProductNav_Contents">
            {academicEducation.map((education) => (
              <AcademicEducationCard
                key={education.titleKey}
                logoUrl={education.logoUrl}
                title={t(education.titleKey)}
                period={t(education.periodKey)}
                institution={t(education.institutionKey)}
              />
            ))}

            <span id="pnIndicatorB" className="pn-ProductNav_Indicator" />
          </div>
        </nav>
        <button
          id="pnAdvancerLeftB"
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
          id="pnAdvancerRightB"
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
  )
}
