import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { PanelFrame } from '@/components/ui/PanelFrame'
import './style.css'
import type { IdentityHeaderProps } from './types'

export type { IdentityHeaderProps } from './types'

export function IdentityHeader({ familyName, givenName, roles }: IdentityHeaderProps) {
  return (
    <PanelFrame tone="dark">
      <header className="identity-header">
        <div className="identity-header__content">
          <div className="identity-header__identity">
            <CodeIcon
              aria-hidden="true"
              className="identity-header__icon"
              size="var(--icon-size-big)"
              weight="duotone"
            />
            <h1 className="identity-header__name">
              <span>{givenName}</span> <strong>{familyName}</strong>
            </h1>
          </div>
          <ul aria-label="Professional roles" className="identity-header__roles">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </header>
    </PanelFrame>
  )
}
