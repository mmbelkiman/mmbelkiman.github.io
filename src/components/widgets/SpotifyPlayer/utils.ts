export function getSpotifyEmbedUrl(spotifyUrl: string) {
  const url = new URL(spotifyUrl)
  const normalizedPath = url.pathname.replace(/^\/intl-\w+\//, '/')

  return `https://open.spotify.com/embed${normalizedPath}?utm_source=generator&theme=0`
}
