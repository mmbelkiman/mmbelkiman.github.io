import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { useTranslation } from 'react-i18next'
import { CompanyLogo } from './CompanyLogo'
import type { Experience } from '../types'
import { formatExperienceMonthYear } from '../utils'

type ExperienceTimelineProps = {
  experiences: readonly Experience[]
  onSelect: (experienceId: string) => void
  selectedExperienceId: string | undefined
}

export function ExperienceTimeline({
  experiences,
  onSelect,
  selectedExperienceId,
}: ExperienceTimelineProps) {
  const { t } = useTranslation()

  return (
    <nav
      aria-label={t('v1.sections.professionalExperience')}
      className="professional-experience-row-timeline"
    >
      <div className="professional-experience-row-timeline-content">
        {experiences.map((experience) => {
          const isSelected = experience.id === selectedExperienceId

          return (
            <button
              aria-current={isSelected ? 'true' : undefined}
              className="professional-experience-row-timeline-item"
              key={experience.id}
              onClick={() => onSelect(experience.id)}
              type="button"
            >
              <span aria-hidden="true" className="professional-experience-row-timeline-marker" />
              <span className="professional-experience-row-timeline-period">
                <span>{formatExperienceMonthYear(experience.period.start)}</span>
                <span>
                  {experience.period.end
                    ? formatExperienceMonthYear(experience.period.end)
                    : t('v1.current')}
                </span>
              </span>
              <span className="professional-experience-row-timeline-company">
                <CompanyLogo company={experience.company} logo={experience.logo} />
                <span className="professional-experience-row-timeline-copy">
                  <strong>{experience.company}</strong>
                  <small>{experience.role}</small>
                </span>
                <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
