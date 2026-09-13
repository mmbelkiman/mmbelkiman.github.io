import { describe, expect, it } from 'vitest'
import { getCityLayer, getTimeOfDay } from '../utils'

describe('getTimeOfDay', () => {
  it.each([
    ['night', '2025-01-01T04:59:00Z'],
    ['morning', '2025-01-01T05:00:00Z'],
    ['morning', '2025-01-01T11:59:00Z'],
    ['afternoon', '2025-01-01T12:00:00Z'],
    ['afternoon', '2025-01-01T17:59:00Z'],
    ['night', '2025-01-01T18:00:00Z'],
  ] as const)('returns %s at %s in UTC', (expectedPeriod, isoDate) => {
    expect(getTimeOfDay(new Date(isoDate), 'UTC')).toBe(expectedPeriod)
  })

  it('uses the requested time zone', () => {
    expect(getTimeOfDay(new Date('2025-01-01T20:00:00Z'), 'America/Sao_Paulo')).toBe('afternoon')
  })
})

describe('getCityLayer', () => {
  it('returns the path, direction and duration for a layer', () => {
    expect(getCityLayer('morning', 0)).toEqual({
      direction: 'left',
      duration: 1000,
      imagePath: expect.any(String),
    })
    expect(getCityLayer('night', 1)).toMatchObject({
      direction: 'right',
      duration: 900,
      imagePath: expect.any(String),
    })
  })

  it('uses the final duration when the layer index exceeds the configured durations', () => {
    expect(getCityLayer('afternoon', 20)).toMatchObject({
      duration: 400,
      imagePath: expect.any(String),
    })
  })
})
