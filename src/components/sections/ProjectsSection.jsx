import { projects } from '../../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <p className="eyebrow eyebrow-light">Things I've built, launched, and sold</p>
      <h2 className="section-heading">projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3 className="project-card-name">{project.name}</h3>
            <p className="project-card-role">{project.role}</p>

            <p className="project-card-description">{project.description}</p>

            {project.tags.length > 0 && (
              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {project.story && <blockquote className="project-card-inspo">{project.story}</blockquote>}

            {project.links.length > 0 && (
              <div className="project-card-links">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="project-card-link">
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
