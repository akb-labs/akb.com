import { projects } from '../../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <p className="eyebrow eyebrow-light">Products and tools I'm working on</p>
      <h2 className="section-heading">projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noreferrer" className="project-card">
            <img src={project.image} alt="" className="project-card-image" />
            {project.caption && <p className="project-card-caption">{project.caption}</p>}
          </a>
        ))}
      </div>
    </section>
  )
}
