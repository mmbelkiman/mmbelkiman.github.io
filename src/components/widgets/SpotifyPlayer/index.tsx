import { DEFAULT_SPOTIFY_URL } from './constants'
import './style.css'
import type { SpotifyPlayerProps } from './types'
import { getSpotifyEmbedUrl } from './utils'

export type { SpotifyPlayerProps } from './types'

export function SpotifyPlayer({
  spotifyUrl = DEFAULT_SPOTIFY_URL,
  title = 'Spotify player',
}: SpotifyPlayerProps) {
  return (
    <section aria-label={title} className="spotify-player">
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className="spotify-player__embed"
        frameBorder="0"
        src={getSpotifyEmbedUrl(spotifyUrl)}
        title={title}
      />
    </section>
  )
}
