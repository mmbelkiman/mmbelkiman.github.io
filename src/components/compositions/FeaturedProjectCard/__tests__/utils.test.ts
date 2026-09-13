import { describe, expect, it } from 'vitest'
import { getExternalLinkText } from '../utils'

describe('FeaturedProjectCard utilities', () => {
  it('uses a compact hostname for valid external links', () => {
    expect(getExternalLinkText('https://www.example.com/projects/portfolio')).toBe('example.com')
  })

  it('keeps an invalid URL visible instead of throwing', () => {
    expect(getExternalLinkText('not-a-url')).toBe('not-a-url')
  })
})
