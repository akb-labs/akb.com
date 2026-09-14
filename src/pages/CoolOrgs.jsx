import { orgs } from '../data/orgs'
import OrgCard from '../components/OrgCard.jsx'

export default function CoolOrgs() {
  return (
    <section>
      <h1>Cool Orgs</h1>
      <div className="grid">
        {orgs.map((org) => (
          <OrgCard key={org.name} {...org} />
        ))}
      </div>
    </section>
  )
}
