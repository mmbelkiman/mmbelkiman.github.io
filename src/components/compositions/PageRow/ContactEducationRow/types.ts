import type { ContactLinksProps } from '@/components/compositions/ContactLinks'
import type { EducationProps } from '@/components/compositions/Education'

export type ContactEducationRowProps = {
  contactLinks: ContactLinksProps['links']
  education: EducationProps['items']
}
