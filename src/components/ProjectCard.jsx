export default function ProjectCard({ title, description, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}
