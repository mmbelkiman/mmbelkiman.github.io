import { Skills } from '@/components/compositions/Skills'
import { Grid } from '@/components/layout/Grid'
import './style.css'
import type { SkillsRowProps } from './types'

export type { SkillsRowProps } from './types'

export function SkillsRow({ skillGroups }: SkillsRowProps) {
  return (
    <section aria-label="Skills" className="v1-skills-row">
      <Grid>
        <Grid.Column weight={10}>
          <Skills groups={skillGroups} />
        </Grid.Column>
      </Grid>
    </section>
  )
}
