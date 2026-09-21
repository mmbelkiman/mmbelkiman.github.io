import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { useTranslation } from 'react-i18next'
import { TechnologyTag } from '@/components/compositions/TechnologyTag'
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
      <article className="professional-experience-row-engagement">
        <header className="professional-experience-row-engagement-header">
          <CompanyLogo company={engagement.name} logo={engagement.logo} size="large" />
          <div>
            <Heading level={3}>{engagement.name}</Heading>
            <Text color="secondary" size="meta">
              {engagement.role ? `${engagement.role} · ${engagement.type}` : engagement.type}
            </Text>
          </div>
          {engagement.period || engagement.category ? (
            <div className="professional-experience-row-engagement-meta">
              {engagement.period ? <span>{engagement.period}</span> : null}
              {engagement.category ? <ProjectCategory category={engagement.category} /> : null}
            </div>
          ) : null}
        </header>

        <Text color="secondary">{engagement.description}</Text>

        <div className="professional-experience-row-engagement-section">
          <div className="professional-experience-row-engagement-label">
            <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
            {t('v1.sections.keyResponsibilities')}
          </div>
          <ul className="professional-experience-row-responsibilities">
            {engagement.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {engagement.technologies.length ? (
          <div className="professional-experience-row-engagement-section">
            <div className="professional-experience-row-engagement-label">
              <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
              {t('v1.sections.techStack')}
            </div>
            <ul className="technology-tags">
              {engagement.technologies.map((tech) => (
                <TechnologyTag
                  bg={engagement.technologyBackground}
                  key={tech}
                  technology={tech}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </article>
    </PanelFrame>
  )
}
