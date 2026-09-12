import type { Meta, StoryObj } from '@storybook/react-vite'
import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase'
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import { TerminalWindowIcon } from '@phosphor-icons/react/dist/csr/TerminalWindow'
import './theme-foundation.css'

function ThemeFoundation() {
  return (
    <section className="v1-foundation-story">
      <article className="v1-foundation-story__panel">
        <p className="v1-foundation-story__eyebrow">Portfolio interface system / v1</p>
        <h1 className="v1-foundation-story__title">
          Rajdhani for information. Share Tech Mono for identity.
        </h1>
        <p className="v1-foundation-story__body">
          The visual foundation uses a light industrial palette with clear hierarchy, technical
          labels, and reusable semantic tokens.
        </p>
      </article>

      <article className="v1-foundation-story__panel">
        <p className="v1-foundation-story__eyebrow">Semantic color tokens</p>
        <ul className="v1-foundation-story__swatches">
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--page">Page</li>
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--surface">
            Surface
          </li>
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--inset">Inset</li>
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--strong">
            Strong
          </li>
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--accent">
            Accent
          </li>
          <li className="v1-foundation-story__swatch v1-foundation-story__swatch--positive">
            Positive
          </li>
        </ul>
      </article>

      <article className="v1-foundation-story__panel">
        <p className="v1-foundation-story__eyebrow">Iconography</p>
        <h2 className="v1-foundation-story__section-title">Phosphor Icons</h2>
        <p className="v1-foundation-story__body">
          Interface icons use the regular, bold, fill, and duotone weights to create hierarchy
          without introducing another visual language.
        </p>

        <div className="v1-foundation-story__icon-grid">
          <div className="v1-foundation-story__icon-card v1-foundation-story__icon-card--accent">
            <CodeIcon aria-hidden="true" size={36} weight="bold" />
            <strong>Code</strong>
            <span>Technical label</span>
          </div>
          <div className="v1-foundation-story__icon-card v1-foundation-story__icon-card--strong">
            <TerminalWindowIcon aria-hidden="true" size={36} weight="duotone" />
            <strong>Terminal</strong>
            <span>Panel utility</span>
          </div>
          <div className="v1-foundation-story__icon-card">
            <BriefcaseIcon aria-hidden="true" size={36} weight="bold" />
            <strong>Career</strong>
            <span>Content section</span>
          </div>
          <div className="v1-foundation-story__icon-card v1-foundation-story__icon-card--positive">
            <GameControllerIcon aria-hidden="true" size={36} weight="duotone" />
            <strong>Games</strong>
            <span>Featured area</span>
          </div>
          <div className="v1-foundation-story__icon-card">
            <MapPinIcon aria-hidden="true" size={36} weight="fill" />
            <strong>Location</strong>
            <span>Quick info</span>
          </div>
          <div className="v1-foundation-story__icon-card">
            <GithubLogoIcon aria-hidden="true" size={36} weight="fill" />
            <strong>GitHub</strong>
            <span>External profile</span>
          </div>
          <div className="v1-foundation-story__icon-card">
            <LinkedinLogoIcon aria-hidden="true" size={36} weight="fill" />
            <strong>LinkedIn</strong>
            <span>External profile</span>
          </div>
        </div>

        <div className="v1-foundation-story__weights" aria-label="Icon weight comparison">
          <GameControllerIcon aria-hidden="true" size={32} weight="regular" />
          <GameControllerIcon aria-hidden="true" size={32} weight="bold" />
          <GameControllerIcon aria-hidden="true" size={32} weight="fill" />
          <GameControllerIcon aria-hidden="true" size={32} weight="duotone" />
        </div>
      </article>
    </section>
  )
}

const meta = {
  title: 'Foundations/Theme v1',
  component: ThemeFoundation,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeFoundation>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
