import { orgs } from '../../data/orgs'

export default function CommunitySection() {
  return (
    <section id="cool-orgs" className="section community-section">
      <h2 className="section-heading section-heading-light">community building</h2>
      <p className="eyebrow eyebrow-light">
        These organizations do amazing work and hold a special place in my heart
      </p>
      <div className="orgs-grid">
        {orgs.map((org) => (
          <div key={org.name} className="org-card">
            {org.logo && <img src={org.logo} alt={`${org.name} logo`} className="org-card-logo" />}
            <h3 className="org-card-name">{org.name}</h3>
            <p className="org-card-role">{org.role}</p>
            <p className="org-card-description">{org.description}</p>
            {org.links.length > 0 && (
              <div className="org-card-links">
                {org.links.map((link) => (
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
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
