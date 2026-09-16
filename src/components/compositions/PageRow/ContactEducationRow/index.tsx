import { ContactLinks } from '@/components/compositions/ContactLinks'
import { Education } from '@/components/compositions/Education'
import { Languages } from '@/components/compositions/Languages'
import { Grid } from '@/components/layout/Grid'
import './style.css'
import type { ContactEducationRowProps } from './types'

export type { ContactEducationRowProps } from './types'

export function ContactEducationRow({ contactLinks, education, languages }: ContactEducationRowProps) {
  return (
    <section aria-label="Contact links, education and languages" className="v1-contact-education-row">
      <Grid>
        <Grid.Column weight={3}>
          <ContactLinks links={contactLinks} />
        </Grid.Column>
        <Grid.Column weight={4}>
          <Education items={education} />
        </Grid.Column>
        <Grid.Column weight={3}>
          <Languages languages={languages} />
        </Grid.Column>
      </Grid>
    </section>
  )
}
