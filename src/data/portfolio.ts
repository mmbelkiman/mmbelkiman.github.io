export type PortfolioTechnology =
  | 'construct2'
  | 'csharp'
  | 'htmlCss'
  | 'java'
  | 'javascript'
  | 'monogame'
  | 'nodeJs'
  | 'php'
  | 'reactNative'
  | 'sql'
  | 'typescript'
  | 'unity'

export type PortfolioLink = {
  className?: string
  compact?: boolean
  href: string
  labelKey: string
  textKey: string
}

export type PortfolioItem = {
  category: 'software' | 'game'
  descriptionKeys?: string[]
  featured?: boolean
  linkSpacer?: boolean
  links?: PortfolioLink[]
  posterUrl: string
  supplementaryImage?: {
    src: string
    width: string
  }
  technologies: PortfolioTechnology[]
  titleKey: string
  videoUrl: string
  yearKey?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    titleKey: 'portfolio.tictac.title',
    videoUrl: '/videos/tictac.webm',
    posterUrl: '/images/portfolio-previews/tictac.jpg',
    category: 'software',
    yearKey: 'portfolio.tictac.year',
    technologies: ['typescript', 'reactNative'],
    links: [
      {
        labelKey: 'portfolio.tictac.links.github.label',
        textKey: 'portfolio.tictac.links.github.text',
        href: 'https://github.com/mmbelkiman/tiny_tic_tac_toe_mobile?tab=readme-ov-file',
      },
    ],
  },
  {
    titleKey: 'portfolio.pathCrypto.title',
    videoUrl: '/videos/pathcrypto.webm',
    posterUrl: '/images/portfolio-previews/pathcrypto.jpg',
    category: 'software',
    yearKey: 'portfolio.pathCrypto.year',
    technologies: ['typescript', 'reactNative', 'nodeJs'],
    links: [
      {
        labelKey: 'portfolio.pathCrypto.links.website.label',
        textKey: 'portfolio.pathCrypto.links.website.text',
        href: 'https://www.pathcrypto.com/',
      },
    ],
  },
  {
    titleKey: 'portfolio.pipoclube.title',
    featured: true,
    videoUrl: '/videos/pipoclube.webm',
    posterUrl: '/images/portfolio-previews/pipoclube.jpg',
    category: 'software',
    yearKey: 'portfolio.pipoclube.year',
    technologies: ['typescript', 'reactNative', 'php'],
    links: [
      {
        labelKey: 'portfolio.pipoclube.links.website.label',
        textKey: 'portfolio.pipoclube.links.website.text',
        href: 'https://www.pipoclube.com/',
      },
    ],
  },
  {
    titleKey: 'portfolio.aulapp.title',
    videoUrl: '/videos/aulapp.webm',
    posterUrl: '/images/portfolio-previews/aulapp.jpg',
    category: 'software',
    yearKey: 'portfolio.aulapp.year',
    technologies: ['javascript', 'reactNative'],
    links: [
      {
        labelKey: 'portfolio.aulapp.links.googlePlay.label',
        textKey: 'portfolio.aulapp.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=br.com.ies.aulaapp',
      },
      {
        labelKey: 'portfolio.aulapp.links.appStore.label',
        textKey: 'portfolio.aulapp.links.appStore.text',
        href: 'https://apps.apple.com/br/app/aulapp/id1378370353',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.livroh.title',
    videoUrl: '/videos/livroh.webm',
    posterUrl: '/images/portfolio-previews/livroh.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.livroh.description.first', 'portfolio.livroh.description.second'],
    yearKey: 'portfolio.livroh.year',
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.livroh.links.googlePlay.label',
        textKey: 'portfolio.livroh.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=br.com.verisoft.livroh',
      },
    ],
  },
  {
    titleKey: 'portfolio.bancah.title',
    videoUrl: '/videos/bancah.webm',
    posterUrl: '/images/portfolio-previews/bancah.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.bancah.description.first', 'portfolio.bancah.description.second'],
    yearKey: 'portfolio.bancah.year',
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.bancah.links.googlePlay.label',
        textKey: 'portfolio.bancah.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=br.com.verisoft.bancah',
      },
    ],
  },
  {
    titleKey: 'portfolio.epicGolf2d.title',
    featured: true,
    videoUrl: '/videos/epicgolf2d.webm',
    posterUrl: '/images/portfolio-previews/epicgolf2d.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.epicGolf2d.description.first',
      'portfolio.epicGolf2d.description.second',
    ],
    yearKey: 'portfolio.epicGolf2d.year',
    supplementaryImage: { src: 'epicgolf2d-trofeu.jpg', width: '40%' },
    technologies: ['monogame', 'csharp'],
    links: [
      {
        labelKey: 'portfolio.epicGolf2d.links.googlePlay.label',
        textKey: 'portfolio.epicGolf2d.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=br.com.estudiovacaroxa.eg2d',
      },
    ],
  },
  {
    titleKey: 'portfolio.venusParticleEditor.title',
    videoUrl: '/videos/venusparticleeditor.webm',
    posterUrl: '/images/portfolio-previews/venusparticleeditor.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.venusParticleEditor.description.first'],
    yearKey: 'portfolio.venusParticleEditor.year',
    technologies: ['csharp', 'monogame'],
    links: [
      {
        labelKey: 'portfolio.venusParticleEditor.links.itchIo.label',
        textKey: 'portfolio.venusParticleEditor.links.itchIo.text',
        href: 'https://mmbelkiman.itch.io/venus-particle-editor',
      },
      {
        labelKey: 'portfolio.venusParticleEditor.links.github.label',
        textKey: 'portfolio.venusParticleEditor.links.github.text',
        href: 'https://github.com/mmbelkiman/Venus-Particle-Editor',
        className: 'sourcecode',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.ourAdventureTime.title',
    videoUrl: '/videos/ouradventuretime.webm',
    posterUrl: '/images/portfolio-previews/ouradventuretime.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.ourAdventureTime.description.first'],
    yearKey: 'portfolio.ourAdventureTime.year',
    technologies: ['unity', 'csharp'],
    links: [
      {
        labelKey: 'portfolio.ourAdventureTime.links.itchIo.label',
        textKey: 'portfolio.ourAdventureTime.links.itchIo.text',
        href: 'https://redemptor.itch.io/our-adventure-time',
        className: 'play-online',
      },
      {
        labelKey: 'portfolio.ourAdventureTime.links.github.label',
        textKey: 'portfolio.ourAdventureTime.links.github.text',
        href: 'https://github.com/redemptor/marriage_jam',
        className: 'sourcecode',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.ultraRetroVirusAttack.title',
    videoUrl: '/videos/ultraretrovirusattack.webm',
    posterUrl: '/images/portfolio-previews/ultraretrovirusattack.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.ultraRetroVirusAttack.description.first',
      'portfolio.ultraRetroVirusAttack.description.second',
    ],
    yearKey: 'portfolio.ultraRetroVirusAttack.year',
    technologies: ['unity', 'csharp'],
    links: [
      {
        labelKey: 'portfolio.ultraRetroVirusAttack.links.webPlayer.label',
        textKey: 'portfolio.ultraRetroVirusAttack.links.webPlayer.text',
        href: 'downloads/ultraretrovirusattack/index.html',
        className: 'play-online',
      },
      {
        labelKey: 'portfolio.ultraRetroVirusAttack.links.github.label',
        textKey: 'portfolio.ultraRetroVirusAttack.links.github.text',
        href: 'https://github.com/mmbelkiman/UltraRetroVirusAttack',
        className: 'sourcecode',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.itaucard.title',
    videoUrl: '/videos/itaucard.webm',
    posterUrl: '/images/portfolio-previews/itaucard.jpg',
    category: 'software',
    descriptionKeys: [
      'portfolio.itaucard.description.first',
      'portfolio.itaucard.description.second',
    ],
    yearKey: 'portfolio.itaucard.year',
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.itaucard.links.googlePlay.label',
        textKey: 'portfolio.itaucard.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=com.itaucard.activity',
      },
    ],
  },
  {
    titleKey: 'portfolio.rupert.title',
    videoUrl: '/videos/rupert.webm',
    posterUrl: '/images/portfolio-previews/rupert.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.rupert.description.first', 'portfolio.rupert.description.second'],
    yearKey: 'portfolio.rupert.year',
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.rupert.links.googlePlay.label',
        textKey: 'portfolio.rupert.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=com.calangostudio.rupertthefish',
      },
    ],
  },
  {
    titleKey: 'portfolio.tribanco.title',
    videoUrl: '/videos/tribanco.webm',
    posterUrl: '/images/portfolio-previews/tribanco.jpg',
    category: 'software',
    descriptionKeys: [
      'portfolio.tribanco.description.first',
      'portfolio.tribanco.description.second',
    ],
    yearKey: 'portfolio.tribanco.year',
    technologies: ['javascript'],
    links: [
      {
        labelKey: 'portfolio.tribanco.links.googlePlay.label',
        textKey: 'portfolio.tribanco.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=br.com.tribanco.mb&hl=pt_BR',
      },
      {
        labelKey: 'portfolio.tribanco.links.appStore.label',
        textKey: 'portfolio.tribanco.links.appStore.text',
        href: 'https://itunes.apple.com/us/app/tribanco-o-banco-do-varejo/id1095421258?mt=8',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.omgMyHouse.title',
    videoUrl: '/videos/omgmyhouse.webm',
    posterUrl: '/images/portfolio-previews/omgmyhouse.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.omgMyHouse.description.first',
      'portfolio.omgMyHouse.description.second',
    ],
    yearKey: 'portfolio.omgMyHouse.year',
    technologies: ['construct2'],
    links: [
      {
        labelKey: 'portfolio.omgMyHouse.links.webPlayer.label',
        textKey: 'portfolio.omgMyHouse.links.webPlayer.text',
        href: 'downloads/omg/index.html',
      },
    ],
  },
  {
    titleKey: 'portfolio.gamification.title',
    videoUrl: '/videos/monografia.webm',
    posterUrl: '/images/portfolio-previews/monografia.jpg',
    category: 'software',
    descriptionKeys: [
      'portfolio.gamification.description.first',
      'portfolio.gamification.description.second',
      'portfolio.gamification.description.third',
    ],
    yearKey: 'portfolio.gamification.year',
    technologies: ['htmlCss', 'javascript'],
    linkSpacer: true,
    links: [
      {
        labelKey: 'portfolio.gamification.links.document.label',
        textKey: 'portfolio.gamification.links.document.text',
        href: 'https://raw.githubusercontent.com/mmbelkiman/mmbelkiman.github.io/master/downloads/gamification-MarceloBelkiman.pdf',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.spaceJay.title',
    videoUrl: '/videos/spacejay.webm',
    posterUrl: '/images/portfolio-previews/spacejay.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.spaceJay.description.first'],
    yearKey: 'portfolio.spaceJay.year',
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.spaceJay.links.googlePlay.label',
        textKey: 'portfolio.spaceJay.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=com.calangostudio.spacejayfreermk',
      },
    ],
  },
  {
    titleKey: 'portfolio.clickideia.title',
    videoUrl: '/videos/clickideia.webm',
    posterUrl: '/images/portfolio-previews/clickideia.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.clickideia.description.first'],
    yearKey: 'portfolio.clickideia.year',
    technologies: ['javascript', 'sql', 'php'],
    linkSpacer: true,
    links: [
      {
        labelKey: 'portfolio.clickideia.links.website.label',
        textKey: 'portfolio.clickideia.links.website.text',
        href: 'http://www.clickideia.com.br',
        compact: true,
      },
    ],
  },
]
