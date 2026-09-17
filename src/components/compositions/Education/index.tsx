import { Heading } from '@/components/ui/Heading'
import { useTranslation } from 'react-i18next'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'
import type { EducationProps } from './types'

export type { EducationItem, EducationProps } from './types'

export function Education({ items }: EducationProps) {
  const { t } = useTranslation()

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.education')} />}>
      <section aria-label={t('v1.sections.education')} className="education">
        <ul className="education__list">
          {items.map((item) => (
            <li className="education__item" key={`${item.institution}-${item.title}`}>
              <img alt={item.logoAlt} className="education__logo" src={item.logoSrc} />
              <div className="education__content">
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
