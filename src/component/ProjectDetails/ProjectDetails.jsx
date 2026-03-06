import "./ProjectDetails.css";

function ProjectDetails({ project, setActivePage }) {
  if (!project) {
    return (
      <div className="project-details">
        <button className="back-btn" onClick={() => setActivePage("Projects")}>
          ← Back to Projects
        </button>

        <div className="project-section">
          <h2>Project not found</h2>
          <p className="project-empty-text">
            The selected project could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <button className="back-btn" onClick={() => setActivePage("Projects")}>
        ← Back to Projects
      </button>

      <div className="project-details-header">
        <div className="project-details-image-wrapper">
          <img
            src={project.image || "public/assets/background.png"}
            alt={project.name}
            className="project-details-image"
            onError={(e) => {
              e.target.src = "public/assets/background.png";
            }}
          />
        </div>

        <div className="project-details-info">
          <p className="project-details-year">{project.year}</p>

          <h1 className="project-details-title">{project.name}</h1>

          <p className="project-details-description">
            {project.description || "No description provided."}
          </p>

          <div className="project-details-meta">
            <span className="meta-badge">
              Status: {project.status || "Unknown"}
            </span>

            <span className="meta-badge">
              Team Size: {project.team_size ?? "N/A"}
            </span>

          
          </div>

          <div className="project-details-tags">
            {(project.tags || []).map((tag) => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-details-content">
        <div className="project-section">
          <h2>Problem</h2>
          <p>{project.problem || "No problem description provided."}</p>
        </div>

        <div className="project-section">
          <h2>Solution</h2>
          <p>{project.solution || "No solution description provided."}</p>
        </div>

        <div className="project-section full-width">
          <h2>Tech Stack</h2>

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
      </div>
    </div>
  );
}

export default ProjectDetails;