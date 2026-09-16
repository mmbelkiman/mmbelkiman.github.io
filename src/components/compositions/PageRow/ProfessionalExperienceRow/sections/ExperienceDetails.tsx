import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase'
import { CompanyLogo } from './CompanyLogo'
import { ExperienceEngagement } from './ExperienceEngagement'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import type { Experience } from '../types'
import { formatExperiencePeriod } from '../utils'

type ExperienceDetailsProps = {
  experience: Experience
}

export function ExperienceDetails({ experience }: ExperienceDetailsProps) {
  return (
    <article className="professional-experience-row__details">
      <header className="professional-experience-row__details-header">
        <CompanyLogo company={experience.company} logo={experience.logo} size="large" />
        <div>
          <Heading level={2}>{experience.company}</Heading>
          <Text color="secondary">{experience.role}</Text>
          {experience.location || experience.companyType ? (
            <div className="professional-experience-row__company-meta">
              {experience.location ? (
                <span className="professional-experience-row__location">
                  <MapPinIcon aria-hidden="true" size="var(--icon-size-normal)" weight="fill" />
                  {experience.location}
                </span>
              ) : null}
              {experience.companyType ? (
                <span className="professional-experience-row__company-type">
                  <BriefcaseIcon aria-hidden="true" size="var(--icon-size-normal)" weight="fill" />
                  {experience.companyType}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <span className="professional-experience-row__details-period">
          {formatExperiencePeriod(experience.period)}
        </span>
      </header>

      <Text color="secondary">{experience.description}</Text>

      {experience.engagements?.length ? (
        <PanelFrame header={<PanelHeader label="Clients & projects" />}>
          <section
            aria-label="Clients and projects"
            className="professional-experience-row__engagements"
          >
            {experience.engagements.map((engagement) => (
              <ExperienceEngagement engagement={engagement} key={engagement.id} />
            ))}
          </section>
        </PanelFrame>
      ) : null}
    </article>
  )
}
