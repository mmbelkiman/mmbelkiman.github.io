import { CaretRightIcon } from '@phosphor-icons/react/dist/csr/CaretRight'
import { ProjectTechnology } from '@/components/compositions/ProjectCard'
import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import './style.css'
import type { SkillsProps } from './types'

export type { SkillsGroup, SkillsProps } from './types'

export function Skills({ groups }: SkillsProps) {
  return (
    <PanelFrame header={<PanelHeader label="Skills" />}>
      <section aria-label="Skills" className="skills">
        <div className="skills__groups">
          {groups.map((group) => (
            <section className="skills__group" key={group.title}>
              <Heading level={3}>
                <CaretRightIcon aria-hidden="true" size="var(--icon-size-normal)" weight="bold" />
                {group.title}
              </Heading>
              <ul className="project-card__technologies skills__technologies">
                {group.technologies.map((technology) => (
                  <ProjectTechnology
                    bg="transparent"
                    border="none"
                    key={technology}
                    tech={technology}
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
