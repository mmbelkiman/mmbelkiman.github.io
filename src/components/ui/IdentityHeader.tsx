import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code'
import { PanelFrame } from './PanelFrame'
import './IdentityHeader.css'

export type IdentityHeaderProps = {
  className?: string
  familyName: string
  givenName: string
  roles: readonly string[]
}

export function IdentityHeader({ className, familyName, givenName, roles }: IdentityHeaderProps) {
  return (
    <PanelFrame className={className} tone="dark">
      <header className="v1-identity-header">
        <div className="v1-identity-header__content">
          <div className="v1-identity-header__identity">
            <CodeIcon
              aria-hidden="true"
              className="v1-identity-header__icon"
              size={30}
              weight="duotone"
            />
            <h1 className="v1-identity-header__name">
              <span>{givenName}</span> <strong>{familyName}</strong>
            </h1>
          </div>
          <ul aria-label="Professional roles" className="v1-identity-header__roles">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </header>
    </PanelFrame>
  )
}
