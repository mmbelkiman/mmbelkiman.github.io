import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'
import type { EducationProps } from './types'

export type { EducationItem, EducationProps } from './types'

export function Education({ items }: EducationProps) {
  return (
    <PanelFrame header={<PanelHeader label="Education" />}>
      <section aria-label="Education" className="v1-education">
        <ul className="v1-education__list">
          {items.map((item) => (
            <li className="v1-education__item" key={`${item.institution}-${item.title}`}>
              <img alt={item.logoAlt} className="v1-education__logo" src={item.logoSrc} />
              <div className="v1-education__content">
                <Heading level={3}>{item.title}</Heading>
                <Text color="secondary" size="label">
                  {item.institution}
                </Text>
                <Text color="secondary" size="meta">
                  {item.period}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PanelFrame>
  )
}
