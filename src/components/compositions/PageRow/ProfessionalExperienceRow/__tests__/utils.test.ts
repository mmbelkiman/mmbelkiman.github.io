import { describe, expect, it } from 'vitest'
import { formatExperienceMonthYear, formatExperiencePeriod, getCompanyInitials } from '../utils'

describe('ProfessionalExperienceRow utilities', () => {
  it('formats a month and year consistently', () => {
    expect(formatExperienceMonthYear({ month: 'Aug', year: 2015 })).toBe('Aug 2015')
  })

  it('formats finished and current periods', () => {
    expect(
      formatExperiencePeriod({
        start: { month: 'Aug', year: 2015 },
        end: { month: 'Nov', year: 2017 },
      }),
    ).toBe('Aug 2015 – Nov 2017')
    expect(formatExperiencePeriod({ start: { month: 'Aug', year: 2023 } })).toBe(
      'Aug 2023 – Present',
    )
  })

  it('creates a compact fallback mark from a company name', () => {
    expect(getCompanyInitials('Aura Labs')).toBe('AL')
  })
})
