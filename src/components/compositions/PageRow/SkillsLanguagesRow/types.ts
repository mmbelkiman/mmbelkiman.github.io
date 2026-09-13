import type { LanguagesProps } from '@/components/compositions/Languages'
import type { SkillsProps } from '@/components/compositions/Skills'

export type SkillsLanguagesRowProps = {
  languages: LanguagesProps['languages']
  skillGroups: SkillsProps['groups']
}
