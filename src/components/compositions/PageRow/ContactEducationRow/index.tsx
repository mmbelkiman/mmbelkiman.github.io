import { ContactLinks } from '@/components/compositions/ContactLinks'
import { Education } from '@/components/compositions/Education'
import { Grid } from '@/components/layout/Grid'
import './style.css'
import type { ContactEducationRowProps } from './types'

export type { ContactEducationRowProps } from './types'

export function ContactEducationRow({ contactLinks, education }: ContactEducationRowProps) {
  return (
    <section aria-label="Contact links and education" className="v1-contact-education-row">
      <Grid>
        <Grid.Column weight={3}>
          <ContactLinks links={contactLinks} />
        </Grid.Column>
        <Grid.Column weight={7}>
          <Education items={education} />
        </Grid.Column>
      </Grid>
    </section>
  )
}
