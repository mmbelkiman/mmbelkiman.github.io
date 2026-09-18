import { Heading } from '@/components/ui/Heading'
import { useTranslation } from 'react-i18next'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'
import type { LanguagesProps } from './types'

export type { Language, LanguagesProps } from './types'

export function Languages({ languages }: LanguagesProps) {
  const { t } = useTranslation()

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.languages')} />}>
      <section aria-label={t('v1.sections.languages')} className="languages">
        <ul className="languages__list">
          {languages.map((language) => (
            <li className="languages__item" key={language.name}>
              <span aria-hidden="true" className="languages__flag">
                <span className="languages__flag-glyph">{language.flag}</span>
              </span>
              <div>
                <Heading level={3}>{language.name}</Heading>
                <Text color="secondary" size="label">
                  {language.proficiency}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PanelFrame>
  )
}
