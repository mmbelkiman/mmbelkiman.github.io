import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { useTranslation } from 'react-i18next'
import { ProjectTechnology } from '@/components/compositions/ProjectCard'
import { ProjectCategory } from '@/components/compositions/ProjectCategory'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { Text } from '@/components/ui/Text'
import type { Engagement } from '../types'
import { CompanyLogo } from './CompanyLogo'

type ExperienceEngagementProps = {
  engagement: Engagement
}

export function ExperienceEngagement({ engagement }: ExperienceEngagementProps) {
  const { t } = useTranslation()

  return (
    <PanelFrame>
      <article className="professional-experience-row__engagement">
        <header className="professional-experience-row__engagement-header">
          <CompanyLogo company={engagement.name} logo={engagement.logo} size="large" />
          <div>
            <Heading level={3}>{engagement.name}</Heading>
            <Text color="secondary" size="meta">
              {engagement.role ? `${engagement.role} · ${engagement.type}` : engagement.type}
            </Text>
          </div>
          {engagement.period || engagement.category ? (
            <div className="professional-experience-row__engagement-meta">
              {engagement.period ? <span>{engagement.period}</span> : null}
              {engagement.category ? <ProjectCategory category={engagement.category} /> : null}
            </div>
          ) : null}
        </header>

        <Text color="secondary">{engagement.description}</Text>

        <div className="professional-experience-row__engagement-section">
          <div className="professional-experience-row__engagement-label">
            <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
            {t('v1.sections.keyResponsibilities')}
          </div>
          <ul className="professional-experience-row__responsibilities">
            {engagement.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {engagement.technologies.length ? (
          <div className="professional-experience-row__engagement-section">
            <div className="professional-experience-row__engagement-label">
              <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
              {t('v1.sections.techStack')}
            </div>
            <ul className="project-card__technologies">
              {engagement.technologies.map((tech) => (
                <ProjectTechnology
                  bg={engagement.technologyBackground}
                  key={tech}
                  tech={tech}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </article>
    </PanelFrame>
  )
}
