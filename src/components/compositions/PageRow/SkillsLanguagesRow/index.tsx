import { Skills } from '@/components/compositions/Skills'
import { useTranslation } from 'react-i18next'
import { Grid } from '@/components/layout/Grid'
import './style.css'
import type { SkillsRowProps } from './types'

export type { SkillsRowProps } from './types'

export function SkillsRow({ skillGroups }: SkillsRowProps) {
  const { t } = useTranslation()

  return (
    <section aria-label={t('v1.sections.skills')} className="skills-row">
      <Grid>
        <Grid.Column weight={10}>
          <Skills groups={skillGroups} />
        </Grid.Column>
      </Grid>
    </section>
  )
}
