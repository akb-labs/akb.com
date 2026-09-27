import { projects } from '../../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <p className="eyebrow eyebrow-light">Things I've built, launched, and sold</p>
      <h2 className="section-heading">projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <img src={project.image} alt="" className="project-card-image" />
            <h3 className="project-card-name">{project.name}</h3>

            {project.description && <p className="project-card-description">{project.description}</p>}

            {project.stack && (
              <p className="project-card-stack">
                <span className="project-card-label">Stack</span> {project.stack}
              </p>
            )}

            {project.inspo && <blockquote className="project-card-inspo">{project.inspo}</blockquote>}

            {project.url && project.url !== '#' && (
              <a href={project.url} target="_blank" rel="noreferrer" className="project-card-link">
                Visit site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
