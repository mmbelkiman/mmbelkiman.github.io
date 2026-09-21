import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { useTranslation } from 'react-i18next'
import { TechnologyTag } from '@/components/compositions/TechnologyTag'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import './style.css'
import type { SkillsProps } from './types'

export type { SkillsGroup, SkillsProps } from './types'

export function Skills({ groups }: SkillsProps) {
  const { t } = useTranslation()

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.skills')} />}>
      <section aria-label={t('v1.sections.skills')} className="skills">
        <div className="skills-groups">
          {groups.map((group) => (
            <section className="skills-group" key={group.title}>
              <Heading level={3}>
                <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                {group.title}
              </Heading>
              <ul className="technology-tags skills-technologies">
                {group.technologies.map((technology) => (
                  <TechnologyTag
                    bg="transparent"
                    border="none"
                    key={technology}
                    technology={technology}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </PanelFrame>
  )
}
