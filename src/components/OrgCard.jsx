export default function OrgCard({ name, description, orgUrl, getInvolvedUrl }) {
  return (
    <div className="card org-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="org-card-links">
        <a href={orgUrl} target="_blank" rel="noreferrer">
          Visit site
        </a>
        <a href={getInvolvedUrl} target="_blank" rel="noreferrer">
          Get involved
        </a>
      </div>
    </div>
  )
}
