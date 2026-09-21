import { Heading } from '@/components/ui/Heading'
import { useTranslation } from 'react-i18next'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { PanelHeader } from '@/components/ui/PanelHeader'
import { Text } from '@/components/ui/Text'
import './style.css'
import type { ContactLinksProps } from './types'

export type { ContactLink, ContactLinksProps } from './types'

export function ContactLinks({ links }: ContactLinksProps) {
  const { t } = useTranslation()

  return (
    <PanelFrame header={<PanelHeader label={t('v1.sections.contact')} />}>
      <section aria-label={t('v1.sections.contact')} className="contact-links">
        <ul className="contact-links-list">
          {links.map((link) => {
            const isExternal = link.href.startsWith('http')

            return (
              <li className="contact-links-item" key={link.href}>
                <a
                  href={link.href}
                  rel={isExternal ? 'noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  <span aria-hidden="true" className="contact-links-icon">
                    {link.icon}
                  </span>
                  <span className="contact-links-content">
                    <Heading level={3}>{link.label}</Heading>
                    <Text color="secondary" size="label">
                      {link.value}
                    </Text>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </PanelFrame>
  )
}
