import type { ContactLinksProps } from '@/components/compositions/ContactLinks'
import type { EducationProps } from '@/components/compositions/Education'
import type { LanguagesProps } from '@/components/compositions/Languages'

export type ContactEducationRowProps = {
  contactLinks: ContactLinksProps['links']
  education: EducationProps['items']
  languages: LanguagesProps['languages']
}
