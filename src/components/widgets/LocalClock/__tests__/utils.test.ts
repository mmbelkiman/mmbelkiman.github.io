import { describe, expect, it, vi } from 'vitest'
import {
  formatLocalDate,
  formatLocalTime,
  getLocationFromTimeZone,
  getResolvedTimeZone,
} from '../utils'

const time = new Date('2025-08-30T16:24:00Z')

describe('LocalClock utilities', () => {
  it('formats the local date and time in the requested locale and time zone', () => {
    expect(formatLocalDate({ locale: 'en-US', time, timeZone: 'America/Sao_Paulo' })).toBe(
      'Sat, Aug 30, 2025',
    )
    expect(formatLocalTime({ locale: 'en-US', time, timeZone: 'America/Sao_Paulo' })).toBe('13:24')
  })

  it('derives a readable city label from a time zone', () => {
    expect(getLocationFromTimeZone('America/Sao_Paulo')).toBe('Sao Paulo')
    expect(getLocationFromTimeZone('UTC')).toBe('UTC')
  })

  it('keeps an explicitly supplied time zone', () => {
    expect(getResolvedTimeZone('America/Sao_Paulo')).toBe('America/Sao_Paulo')
  })

  it('uses the browser time zone when none is supplied', () => {
    const formatter = {
      resolvedOptions: () => ({ timeZone: 'America/Sao_Paulo' }),
    } as Intl.DateTimeFormat
    const dateTimeFormat = vi.spyOn(Intl, 'DateTimeFormat').mockReturnValue(formatter)

    expect(getResolvedTimeZone()).toBe('America/Sao_Paulo')

    dateTimeFormat.mockRestore()
  })
})
