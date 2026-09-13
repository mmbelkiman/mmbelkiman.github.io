import { Heading } from '@/components/ui/Heading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'
import type { LanguagesProps } from './types'

export type { Language, LanguagesProps } from './types'

export function Languages({ languages }: LanguagesProps) {
  return (
    <PanelFrame header={<PanelHeader label="Languages" />}>
      <section aria-label="Languages" className="v1-languages">
        <ul className="v1-languages__list">
          {languages.map((language) => (
            <li className="v1-languages__item" key={language.name}>
              <span aria-hidden="true" className="v1-languages__flag">
                {language.flag}
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
