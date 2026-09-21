import { describe, expect, it } from 'vitest'
import { getSpotifyEmbedUrl } from '../utils'

describe('getSpotifyEmbedUrl', () => {
  it("creates Spotify's dark embed URL", () => {
    expect(getSpotifyEmbedUrl('https://open.spotify.com/playlist/2hRzhwkgq2xfCdeaewE3QB')).toBe(
      'https://open.spotify.com/embed/playlist/2hRzhwkgq2xfCdeaewE3QB?utm_source=generator&theme=0',
    )
  })

  it('removes the locale prefix and original query parameters', () => {
    expect(
      getSpotifyEmbedUrl(
        'https://open.spotify.com/intl-pt/track/5ihDGnhQgMA0F0tk9fNLlA?si=example',
      ),
    ).toBe(
      'https://open.spotify.com/embed/track/5ihDGnhQgMA0F0tk9fNLlA?utm_source=generator&theme=0',
    )
  })
})
