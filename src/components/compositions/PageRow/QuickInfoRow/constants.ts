import { AtomIcon } from '@phosphor-icons/react/dist/csr/Atom'
import { FilmSlateIcon } from '@phosphor-icons/react/dist/csr/FilmSlate'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GuitarIcon } from '@phosphor-icons/react/dist/csr/Guitar'
import { PersonSimpleTaiChiIcon } from '@phosphor-icons/react/dist/csr/PersonSimpleTaiChi'
import type { QuickInfoItem } from './types'

export const QUICK_INFO_ITEMS: readonly QuickInfoItem[] = [
  { icon: GuitarIcon, label: 'Guitar player' },
  { icon: AtomIcon, label: 'Geek' },
  { icon: FilmSlateIcon, label: 'Pop culture' },
  { icon: GameControllerIcon, label: 'Games' },
  { icon: PersonSimpleTaiChiIcon, label: 'Mindfulness' },
]
