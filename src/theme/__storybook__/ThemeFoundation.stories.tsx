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
          <Text size="label">Semantic color roles</Text>
        </div>
        <Heading level={2}>Aliases over a compact palette</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Semantic roles remain stable while a theme can map related roles to the same primitive
            color. Surface and raised share white; inset and muted share mist.
          </Text>
        </div>
        <ul className="foundation-story__swatches">
          <li className="foundation-story__swatch foundation-story__swatch--page">
            <span>Page</span>
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--surface">
            <span>Surface</span>
            <small>Surface + raised</small>
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--inset">
            <span>Inset</span>
            <small>Inset + muted</small>
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--strong"><span>Strong</span></li>
          <li className="foundation-story__swatch foundation-story__swatch--accent">
            <span>Accent</span>
            <small>Default + hover + active</small>
          </li>
          <li className="foundation-story__swatch foundation-story__swatch--positive"><span>Positive</span></li>
          <li className="foundation-story__swatch foundation-story__swatch--focus">
            <span>Focus</span>
          </li>
        </ul>
        <div className="foundation-story__border-tokens" aria-label="Border token hierarchy">
          <span className="foundation-story__border-token foundation-story__border-token--default">Border</span>
          <span className="foundation-story__border-token foundation-story__border-token--strong">Border strong</span>
          <span className="foundation-story__border-token foundation-story__border-token--outline">Border outline</span>
        </div>
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
          <span className="foundation-story__text-muted">Muted text communicates metadata.</span>
          <div className="foundation-story__text-on-strong">
            <span className="foundation-story__text-inverse">Inverse text supports dark surfaces.</span>
            <span className="foundation-story__text-ice">Ice text provides a quieter hierarchy.</span>
          </div>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Typography</Text>
        </div>
        <Heading level={2}>Type scale and hierarchy</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Rajdhani carries readable information; Share Tech Mono gives headings and labels their
            technical personality.
          </Text>
        </div>
        <div className="foundation-story__type-scale">
          <div className="foundation-story__type-sample foundation-story__type-sample--nano">
            <span>nano</span>
            <strong>Metadata and compact details</strong>
            <code>0.85rem / 100</code>
          </div>
          <div className="foundation-story__type-sample foundation-story__type-sample--normal">
            <span>normal</span>
            <strong>Body information</strong>
            <code>1rem / 400</code>
          </div>
          <div className="foundation-story__type-sample foundation-story__type-sample--big">
            <span>big</span>
            <strong>Section emphasis</strong>
            <code>1.25rem / 500</code>
          </div>
          <div className="foundation-story__type-sample foundation-story__type-sample--huge">
            <span>huge</span>
            <strong>Primary identity</strong>
            <code>1.75rem / 500</code>
          </div>
        </div>
        <div className="foundation-story__label-sample">
          <span>Technical label</span>
          <code>Share Tech Mono / 0.04em</code>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Layout primitives</Text>
        </div>
        <Heading level={2}>Spacing, borders and elevation</Heading>
        <div className="foundation-story__token-groups">
          <div className="foundation-story__token-group">
            <strong>Spacing</strong>
            <div className="foundation-story__space-scale">
              <div><span className="foundation-story__space foundation-story__space--nano" />nano · 4px</div>
              <div><span className="foundation-story__space foundation-story__space--small" />small · 8px</div>
              <div><span className="foundation-story__space foundation-story__space--normal" />normal · 16px</div>
              <div><span className="foundation-story__space foundation-story__space--big" />big · 24px</div>
            </div>
          </div>
          <div className="foundation-story__token-group">
            <strong>Frame</strong>
            <div className="foundation-story__frame-samples">
              <span className="foundation-story__frame foundation-story__frame--thin">thin · 1px</span>
              <span className="foundation-story__frame foundation-story__frame--strong">strong · 2px</span>
              <span className="foundation-story__radius">radius · 2 / 4px</span>
            </div>
          </div>
          <div className="foundation-story__token-group">
            <strong>Elevation</strong>
            <div className="foundation-story__elevation-samples">
              <span className="foundation-story__elevation foundation-story__elevation--panel">panel</span>
              <span className="foundation-story__elevation foundation-story__elevation--strong">strong</span>
              <span className="foundation-story__elevation foundation-story__elevation--inset">inset</span>
            </div>
          </div>
        </div>
      </article>

      <article className="foundation-story__panel">
        <div className="foundation-story__eyebrow">
          <Text size="label">Interaction and accessibility</Text>
        </div>
        <Heading level={2}>Accent states and visible focus</Heading>
        <div className="foundation-story__body">
          <Text color="secondary">
            Interactive controls move from accent to hover and active states. Keyboard focus always
            uses a distinct blue outline.
          </Text>
        </div>
        <div className="foundation-story__interaction-samples">
          <span className="foundation-story__interaction foundation-story__interaction--default">Default</span>
          <span className="foundation-story__interaction foundation-story__interaction--hover">Hover</span>
          <span className="foundation-story__interaction foundation-story__interaction--active">Active</span>
          <button className="foundation-story__focus-sample" type="button">Keyboard focus</button>
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
        <div className="foundation-story__icon-sizes" aria-label="Icon size scale">
          <span><GameControllerIcon aria-hidden="true" size="var(--icon-size-nano)" />nano</span>
          <span><GameControllerIcon aria-hidden="true" size="var(--icon-size-normal)" />normal</span>
          <span><GameControllerIcon aria-hidden="true" size="var(--icon-size-big)" />big</span>
          <span><GameControllerIcon aria-hidden="true" size="var(--icon-size-huge)" />huge</span>
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
