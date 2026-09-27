import { useModalDismiss } from '../hooks/useModalDismiss'
import InstagramIcon from './InstagramIcon.jsx'
import LinkedInIcon from './LinkedInIcon.jsx'

const ICON_LINKS = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
}

export default function OrgModal({ org, onClose }) {
  const { overlayRef, handleOverlayClick } = useModalDismiss(onClose)

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={org.name}
    >
      <div className="modal-content org-modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="modal-text">
          {org.logo && <img src={org.logo} alt={`${org.name} logo`} className="org-card-logo" />}
          <h3 className="org-card-name">{org.name}</h3>
          <p className="org-card-role">{org.role}</p>
          <p className="org-card-description">{org.description}</p>
          {org.links.length > 0 && (
            <div className="org-card-links">
              {org.links.map((link) => {
                const Icon = ICON_LINKS[link.label]
                return Icon ? (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                ) : (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="org-card-link">
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
