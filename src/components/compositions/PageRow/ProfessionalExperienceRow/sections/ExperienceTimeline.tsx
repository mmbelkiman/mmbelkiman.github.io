import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
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
  return (
    <nav
      aria-label="Professional experience timeline"
      className="v1-professional-experience-row__timeline"
    >
      {experiences.map((experience) => {
        const isSelected = experience.id === selectedExperienceId

        return (
          <button
            aria-current={isSelected ? 'true' : undefined}
            className="v1-professional-experience-row__timeline-item"
            key={experience.id}
            onClick={() => onSelect(experience.id)}
            type="button"
          >
            <span aria-hidden="true" className="v1-professional-experience-row__timeline-marker" />
            <span className="v1-professional-experience-row__timeline-period">
              <span>{formatExperienceMonthYear(experience.period.start)}</span>
              <span>
                {experience.period.end
                  ? formatExperienceMonthYear(experience.period.end)
                  : 'Present'}
              </span>
            </span>
            <span className="v1-professional-experience-row__timeline-company">
              <CompanyLogo company={experience.company} logo={experience.logo} />
              <span className="v1-professional-experience-row__timeline-copy">
                <strong>{experience.company}</strong>
                <small>{experience.role}</small>
              </span>
              <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
            </span>
          </button>
        )
      })}
    </nav>
  )
}
