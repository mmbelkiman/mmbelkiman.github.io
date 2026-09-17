import type { ExperienceMonthYear, ExperiencePeriod } from './types'

export function formatExperienceMonthYear({ month, year }: ExperienceMonthYear) {
  return `${month} ${year}`
}

export function formatExperiencePeriod({ end, start }: ExperiencePeriod, current = 'Present') {
  return `${formatExperienceMonthYear(start)} – ${end ? formatExperienceMonthYear(end) : current}`
}

export function getCompanyInitials(company: string) {
  return company
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
