import { useState } from 'react'
import { orgs } from '../../data/orgs'
import OrgModal from '../OrgModal.jsx'

export default function CommunitySection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="cool-orgs" className="section community-section">
      <h2 className="section-heading section-heading-light">community building</h2>
      <p className="eyebrow eyebrow-light">
        These organizations do amazing work and hold a special place in my heart
      </p>
      <div className="orgs-grid">
        {orgs.map((org) => (
          <button key={org.name} className="org-tile" onClick={() => setSelected(org)}>
            {org.logo ? (
              <img src={org.logo} alt={org.name} className="org-tile-logo" />
            ) : (
              <span className="org-tile-name">{org.name}</span>
            )}
            <span className="org-tile-badge" aria-hidden="true">
              <svg
                width="18"
                height="14"
                viewBox="0 0 32 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="12" x2="27" y2="12" />
                <polyline points="19 4 28 12 19 20" />
              </svg>
            </span>
            <span className="sr-only">
              {org.name} — {org.role}. {org.description}
            </span>
          </button>
        ))}
      </div>

      {selected && <OrgModal org={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
