import './SpotifyPlayer.css'

const defaultSpotifyUrl = 'https://open.spotify.com/playlist/2hRzhwkgq2xfCdeaewE3QB'

export type SpotifyPlayerProps = {
  className?: string
  spotifyUrl?: string
  title?: string
}

function getEmbedUrl(spotifyUrl: string) {
  const url = new URL(spotifyUrl)
  const normalizedPath = url.pathname.replace(/^\/intl-\w+\//, '/')

  return `https://open.spotify.com/embed${normalizedPath}?utm_source=generator&theme=0`
}

export function SpotifyPlayer({
  className,
  spotifyUrl = defaultSpotifyUrl,
  title = 'Spotify player',
}: SpotifyPlayerProps) {
  const classNames = ['v1-spotify-player', className].filter(Boolean).join(' ')

  return (
    <section aria-label={title} className={classNames}>
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className="v1-spotify-player__embed"
        frameBorder="0"
        src={getEmbedUrl(spotifyUrl)}
        title={title}
      />
    </section>
  )
}
