import { describe, expect, it } from 'vitest'
import {
  formatLocalDate,
  formatLocalTime,
} from '../utils'

const time = new Date('2025-08-30T16:24:00Z')

describe('LocalClock utilities', () => {
  it('formats the local date and time in the requested locale and time zone', () => {
    expect(formatLocalDate({ locale: 'en-US', time, timeZone: 'America/Sao_Paulo' })).toBe(
      'Sat, Aug 30, 2025',
    )
    expect(formatLocalTime({ locale: 'en-US', time, timeZone: 'America/Sao_Paulo' })).toBe('13:24')
  })

})
