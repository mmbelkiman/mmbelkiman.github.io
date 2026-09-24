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

export type PortfolioProjectIcon = 'grid-nine' | 'virus' | 'compass' | 'house'

export type PortfolioLink = {
  className?: string
  compact?: boolean
  href: string
  labelKey: string
  textKey: string
}

export type PortfolioItem = {
  category: 'software' | 'game' | 'social' | 'doc'
  descriptionKeys?: string[]
  featured?: boolean
  linkSpacer?: boolean
  links?: PortfolioLink[]
  logoUrl?: string
  projectIcon?: PortfolioProjectIcon
  presentation?: 'pipoclube' | 'epicGolf'
  posterUrl: string
  supplementaryImage?: {
    altKey: string
    captionKey?: string
    src: string
  }
  technologies: PortfolioTechnology[]
  titleKey: string
  videoUrl: string
  year: number
}

export const portfolioItems: PortfolioItem[] = [
  {
    titleKey: 'portfolio.tictac.title',
    videoUrl: '/videos/tictac.webm',
    projectIcon: 'grid-nine',
    posterUrl: '/images/portfolio-previews/tictac.jpg',
    category: 'game',
    year: 2023,
    technologies: ['typescript', 'reactNative'],
    links: [
      {
        labelKey: 'portfolio.tictac.links.github.label',
        textKey: 'portfolio.tictac.links.github.text',
        href: 'https://github.com/mbelkiman/tiny_tic_tac_toe_mobile?tab=readme-ov-file',
      },
    ],
  },
  {
    titleKey: 'portfolio.pathCrypto.title',
    videoUrl: '/videos/pathcrypto.webm',
    logoUrl: '/images/logos/pathcrypto.jpg',
    posterUrl: '/images/portfolio-previews/pathcrypto.jpg',
    category: 'software',
    year: 2022,
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
    presentation: 'pipoclube',
    videoUrl: '/videos/pipoclube.webm',
    logoUrl: '/images/logos/pipoclube.png',
    posterUrl: '/images/portfolio-previews/pipoclube.jpg',
    category: 'social',
    year: 2022,
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
    logoUrl: '/images/logos/aulapp.jpg',
    posterUrl: '/images/portfolio-previews/aulapp.jpg',
    category: 'software',
    year: 2020,
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
    logoUrl: '/images/logos/livroh.png',
    posterUrl: '/images/portfolio-previews/livroh.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.livroh.description.first', 'portfolio.livroh.description.second'],
    year: 2019,
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
    logoUrl: '/images/logos/bancah.png',
    posterUrl: '/images/portfolio-previews/bancah.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.bancah.description.first', 'portfolio.bancah.description.second'],
    year: 2019,
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
    presentation: 'epicGolf',
    videoUrl: '/videos/epicgolf2d.webm',
    logoUrl: '/images/logos/epic-golf-2d.png',
    posterUrl: '/images/portfolio-previews/epicgolf2d.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.epicGolf2d.description.first',
      'portfolio.epicGolf2d.description.second',
    ],
    year: 2018,
    supplementaryImage: {
      altKey: 'portfolio.epicGolf2d.awardAlt',
      captionKey: 'portfolio.epicGolf2d.awardCaption',
      src: '/images/portfolio-awards/epic-golf-2d/big-festival-finalist.png',
    },
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
    logoUrl: '/images/logos/venus-particle-editor.png',
    posterUrl: '/images/portfolio-previews/venusparticleeditor.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.venusParticleEditor.description.first'],
    year: 2019,
    technologies: ['csharp', 'monogame'],
    links: [
      {
        labelKey: 'portfolio.venusParticleEditor.links.itchIo.label',
        textKey: 'portfolio.venusParticleEditor.links.itchIo.text',
        href: 'https://mbelkiman.itch.io/venus-particle-editor',
      },
      {
        labelKey: 'portfolio.venusParticleEditor.links.github.label',
        textKey: 'portfolio.venusParticleEditor.links.github.text',
        href: 'https://github.com/mbelkiman/Venus-Particle-Editor',
        className: 'sourcecode',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.ourAdventureTime.title',
    videoUrl: '/videos/ouradventuretime.webm',
    projectIcon: 'compass',
    posterUrl: '/images/portfolio-previews/ouradventuretime.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.ourAdventureTime.description.first'],
    year: 2018,
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
    projectIcon: 'virus',
    posterUrl: '/images/portfolio-previews/ultraretrovirusattack.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.ultraRetroVirusAttack.description.first',
      'portfolio.ultraRetroVirusAttack.description.second',
    ],
    year: 2018,
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
        href: 'https://github.com/mbelkiman/UltraRetroVirusAttack',
        className: 'sourcecode',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.itaucard.title',
    videoUrl: '/videos/itaucard.webm',
    logoUrl: '/images/logos/itau.png',
    posterUrl: '/images/portfolio-previews/itaucard.jpg',
    category: 'software',
    descriptionKeys: [
      'portfolio.itaucard.description.first',
      'portfolio.itaucard.description.second',
    ],
    year: 2017,
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
    logoUrl: '/images/logos/rupert-the-fish.png',
    posterUrl: '/images/portfolio-previews/rupert.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.rupert.description.first', 'portfolio.rupert.description.second'],
    year: 2017,
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
    logoUrl: '/images/logos/tribanco.png',
    posterUrl: '/images/portfolio-previews/tribanco.jpg',
    category: 'software',
    descriptionKeys: [
      'portfolio.tribanco.description.first',
      'portfolio.tribanco.description.second',
    ],
    year: 2016,
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
    projectIcon: 'house',
    posterUrl: '/images/portfolio-previews/omgmyhouse.jpg',
    category: 'game',
    descriptionKeys: [
      'portfolio.omgMyHouse.description.first',
      'portfolio.omgMyHouse.description.second',
    ],
    year: 2015,
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
    category: 'doc',
    descriptionKeys: [
      'portfolio.gamification.description.first',
      'portfolio.gamification.description.second',
      'portfolio.gamification.description.third',
    ],
    year: 2015,
    technologies: ['htmlCss', 'javascript'],
    linkSpacer: true,
    links: [
      {
        labelKey: 'portfolio.gamification.links.document.label',
        textKey: 'portfolio.gamification.links.document.text',
        href: '/downloads/gamification-MarceloBelkiman.pdf',
        compact: true,
      },
    ],
  },
  {
    titleKey: 'portfolio.spaceJay.title',
    videoUrl: '/videos/spacejay.webm',
    logoUrl: '/images/logos/space-jay.png',
    posterUrl: '/images/portfolio-previews/spacejay.jpg',
    category: 'game',
    descriptionKeys: ['portfolio.spaceJay.description.first'],
    year: 2014,
    technologies: ['java'],
    links: [
      {
        labelKey: 'portfolio.spaceJay.links.googlePlay.label',
        textKey: 'portfolio.spaceJay.links.googlePlay.text',
        href: 'https://play.google.com/store/apps/details?id=com.calangostudio.spacej',
      },
    ],
  },
  {
    titleKey: 'portfolio.clickideia.title',
    videoUrl: '/videos/clickideia.webm',
    logoUrl: '/images/logos/clickideia.png',
    posterUrl: '/images/portfolio-previews/clickideia.jpg',
    category: 'software',
    descriptionKeys: ['portfolio.clickideia.description.first'],
    year: 2015,
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
