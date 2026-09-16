import type { Meta, StoryObj } from '@storybook/react-vite'
import { BriefcaseIcon } from '@phosphor-icons/react/dist/csr/Briefcase'
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { GameControllerIcon } from '@phosphor-icons/react/dist/csr/GameController'
import { GithubLogoIcon } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import { MapPinIcon } from '@phosphor-icons/react/dist/csr/MapPin'
import { TerminalWindowIcon } from '@phosphor-icons/react/dist/csr/TerminalWindow'
import { Grid } from '@/components/layout/Grid'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import '../theme-foundation.css'

function ThemeFoundation() {
  return (
    <section className="foundation-story">
      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Portfolio interface system / v1</Text>
        </div>
        <Heading level={1}>Rajdhani for information. Share Tech Mono for identity.</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            The visual foundation uses a light industrial palette with clear hierarchy, technical
            labels, and reusable semantic tokens.
          </Text>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Semantic color tokens</Text>
        </div>
        <ul className="foundation-story__swatches">
          <li className="foundation-story__swatch foundation-story__swatch--page">Page</li>
          <li className="foundation-story__swatch foundation-story__swatch--surface">
            Surface
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--inset">Inset</li>
          <li className="foundation-story__swatch foundation-story__swatch--strong">
            Strong
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--accent">
            Accent
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--positive">
            Positive
          </li>
        </ul>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Text roles</Text>
        </div>
        <Heading level={2}>Primary and secondary</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Components use semantic text roles. Each theme maps those roles to its own palette.
          </Text>
        </div>
        <div className="foundation-story__text-examples">
          <Text>Primary text communicates the main information.</Text>
          <Text color="secondary">Secondary text supports the primary content.</Text>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Layout grid</Text>
        </div>
        <Heading level={2}>Grid and Column</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Layouts use a ten-column grid. Each Grid.Column declares its proportional weight, and
            rowHeight controls compact desktop rows while mobile rows return to automatic height.
          </Text>
        </div>
        <div className="foundation-story__grid-demo">
          <Grid rowHeight="7rem">
            <Grid.Column weight={4}>
              <div className="foundation-story__grid-column">Column / weight 4</div>
            </Grid.Column>
            <Grid.Column weight={6}>
              <div className="foundation-story__grid-column foundation-story__grid-column--accent">
                Column / weight 6
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Iconography</Text>
        </div>
        <Heading level={2}>Phosphor Icons</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Interface icons use the regular, bold, fill, and duotone weights to create hierarchy
            without introducing another visual language.
          </Text>
        </div>

        <div className="foundation-story__icon-grid">
          <div className="foundation-story__icon-card foundation-story__icon-card--accent">
            <CodeIcon aria-hidden="true" size={36} weight="bold" />
            <strong>Code</strong>
            <span>Technical label</span>
          </div>
          <div className="foundation-story__icon-card foundation-story__icon-card--strong">
            <TerminalWindowIcon aria-hidden="true" size={36} weight="duotone" />
            <strong>Terminal</strong>
            <span>Panel utility</span>
          </div>
          <div className="foundation-story__icon-card">
            <BriefcaseIcon aria-hidden="true" size={36} weight="bold" />
            <strong>Career</strong>
            <span>Content section</span>
          </div>
          <div className="foundation-story__icon-card foundation-story__icon-card--positive">
            <GameControllerIcon aria-hidden="true" size={36} weight="duotone" />
            <strong>Games</strong>
            <span>Featured area</span>
          </div>
          <div className="foundation-story__icon-card">
            <MapPinIcon aria-hidden="true" size={36} weight="fill" />
            <strong>Location</strong>
            <span>Quick info</span>
          </div>
          <div className="foundation-story__icon-card">
            <GithubLogoIcon aria-hidden="true" size={36} weight="fill" />
            <strong>GitHub</strong>
            <span>External profile</span>
          </div>
          <div className="foundation-story__icon-card">
            <LinkedinLogoIcon aria-hidden="true" size={36} weight="fill" />
            <strong>LinkedIn</strong>
            <span>External profile</span>
          </div>
        </div>

        <div className="foundation-story__weights" aria-label="Icon weight comparison">
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
