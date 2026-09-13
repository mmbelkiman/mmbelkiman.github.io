import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { FeaturedProjectTechnology } from '@/components/compositions/FeaturedProjectCard'
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
  return (
    <PanelFrame>
      <article className="v1-professional-experience-row__engagement">
        <header className="v1-professional-experience-row__engagement-header">
          <CompanyLogo company={engagement.name} logo={engagement.logo} size="large" />
          <div>
            <Heading level={3}>{engagement.name}</Heading>
            <Text color="secondary" size="meta">
              {engagement.type}
            </Text>
          </div>
          {engagement.period || engagement.category ? (
            <div className="v1-professional-experience-row__engagement-meta">
              {engagement.period ? <span>{engagement.period}</span> : null}
              {engagement.category ? <ProjectCategory category={engagement.category} /> : null}
            </div>
          ) : null}
        </header>

        <Text color="secondary">{engagement.description}</Text>

        <div className="v1-professional-experience-row__engagement-section">
          <div className="v1-professional-experience-row__engagement-label">
            <CaretRightIcon aria-hidden="true" size={16} weight="bold" />
            Key responsibilities
          </div>
          <ul className="v1-professional-experience-row__responsibilities">
            {engagement.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="v1-professional-experience-row__engagement-section">
          <div className="v1-professional-experience-row__engagement-label">
            <CaretRightIcon aria-hidden="true" size={16} weight="bold" />
            Tech stack
          </div>
          <ul className="v1-featured-project-card__technologies">
            {engagement.technologies.map((tech) => (
              <FeaturedProjectTechnology
                bg={engagement.technologyBackground}
                key={tech}
                tech={tech}
              />
            ))}
          </ul>
        </div>
      </article>
    </PanelFrame>
  )
}
