import { orgs } from '../../data/orgs'

export default function CommunitySection() {
  return (
    <section id="community" className="section community-section">
      <h2 className="section-heading section-heading-light">community building</h2>
      <p className="eyebrow eyebrow-light">
        These organizations do amazing work and hold a special place in my heart
      </p>
      <div className="orgs-grid">
        {orgs.map((org) => (
          <a key={org.name} href={org.orgUrl} target="_blank" rel="noreferrer" className="org-card">
            <img src={org.image} alt={org.name} className="org-card-logo" />
          </a>
        ))}
      </div>
    </section>
  )
}
