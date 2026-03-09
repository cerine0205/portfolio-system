import "./ProjectDetails.css";

function ProjectDetails({
  project,
  setActivePage,
  setContactProject,
  projectBackPage,
}) {
  if (!project) {
    return (
      <div className="project-details">
        <button
          className="back-btn"
          onClick={() => setActivePage(projectBackPage)}
        >
          ← Back to {projectBackPage}
        </button>

        <div className="project-panel">
          <h2 className="section-title">Project not found</h2>
          <p className="project-empty-text">
            The selected project could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <button
        className="back-btn"
        onClick={() => setActivePage(projectBackPage)}
      >
        ← Back to {projectBackPage}
      </button>

      <section className="project-hero">
        <div className="project-hero-media">
          <img
            src={project.image || "/assets/background.png"}
            alt={project.name}
            className="project-hero-image"
            onError={(e) => {
              e.target.src = "/assets/background.png";
            }}
          />
        </div>

        <div className="project-hero-content">
          <p className="project-kicker">PROJECT</p>

          <h1 className="project-title">{project.name}</h1>

          <p className="project-description">
            {project.description || "No description provided."}
          </p>

          <div className="project-badges">
            <span className="project-badge">Year: {project.year}</span>
            <span className="project-badge">
              Status: {project.status || "Unknown"}
            </span>
            <span className="project-badge">
              Team Size: {project.team_size ?? "N/A"}
            </span>

            {project.role && (
              <span className="project-badge">Role: {project.role}</span>
            )}

            {project.duration && (
              <span className="project-badge">Duration: {project.duration}</span>
            )}

            {project.type && (
              <span className="project-badge">Type: {project.type}</span>
            )}
          </div>

          {(project.tags || []).length > 0 && (
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag.id} className="project-tag">
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="project-links">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                Live Demo
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                GitHub
              </a>
            )}

            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                Demo Video
              </a>
            )}

            {project.presentation_url && (
              <a
                href={project.presentation_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                Presentation
              </a>
            )}

            {project.report_url && (
              <a
                href={project.report_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                Report
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="project-grid">
        <div className="project-panel">
          <h2 className="section-title">Problem</h2>
          <p className="section-text">
            {project.problem || "No problem description provided."}
          </p>
        </div>

        <div className="project-panel">
          <h2 className="section-title">Solution</h2>
          <p className="section-text">
            {project.solution || "No solution description provided."}
          </p>
        </div>

        <div className="project-panel full-width">
          <h2 className="section-title">Tech Stack</h2>

          {(project.tech_stack || []).length > 0 ? (
            <div className="project-tech-list">
              {project.tech_stack.map((tech, index) => (
                <span key={index} className="project-tech-item">
                  {tech}
                </span>
              ))}
            </div>
          ) : (
            <p className="project-empty-text">No tech stack provided.</p>
          )}
        </div>

        {project.features?.length > 0 && (
          <div className="project-panel full-width">
            <h2 className="section-title">Features</h2>

            <ul className="project-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div className="project-panel">
            <h2 className="section-title">Challenges</h2>
            <p className="section-text">{project.challenges}</p>
          </div>
        )}

        {project.results && (
          <div className="project-panel">
            <h2 className="section-title">Results</h2>
            <p className="section-text">{project.results}</p>
          </div>
        )}

        {(project.architecture || project.architecture_image) && (
          <div className="project-panel full-width">
            <h2 className="section-title">System Architecture</h2>

            {project.architecture_image && (
              <img
                src={project.architecture_image}
                alt="System architecture diagram"
                className="project-architecture-image"
              />
            )}

            {project.architecture && (
              <p className="section-text">{project.architecture}</p>
            )}
          </div>
        )}

        {project.refactor_notes && (
          <div className="project-panel full-width">
            <h2 className="section-title">Refactoring Notes</h2>
            <p className="section-text">{project.refactor_notes}</p>
          </div>
        )}
      </section>

      {project.screenshots?.length > 0 && (
        <section className="project-gallery-section">
          <div className="gallery-header">
            <p className="gallery-kicker">GALLERY</p>
            <h2 className="gallery-title">Project Gallery</h2>
          </div>

          <div className="project-gallery-grid">
            {project.screenshots.map((shot) => (
              <div key={shot.id} className="gallery-card">
                <img
                  src={shot.image}
                  alt={`${project.name} screenshot`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="project-cta">
        <button
          className="contact-project-btn"
          onClick={() => {
            setContactProject(project);
            setActivePage("Contact");
          }}
        >
          Contact about this project →
        </button>
      </div>
    </div>
  );
}

export default ProjectDetails;