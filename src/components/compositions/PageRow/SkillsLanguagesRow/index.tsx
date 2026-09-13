import { Languages } from '@/components/compositions/Languages'
import { Skills } from '@/components/compositions/Skills'
import { Grid } from '@/components/layout/Grid'
import './style.css'
import type { SkillsLanguagesRowProps } from './types'

export type { SkillsLanguagesRowProps } from './types'

export function SkillsLanguagesRow({ languages, skillGroups }: SkillsLanguagesRowProps) {
  return (
    <section aria-label="Skills and languages" className="v1-skills-languages-row">
      <Grid>
        <Grid.Column weight={7}>
          <Skills groups={skillGroups} />
        </Grid.Column>
        <Grid.Column weight={3}>
          <Languages languages={languages} />
        </Grid.Column>
      </Grid>
    </section>
  )
}
