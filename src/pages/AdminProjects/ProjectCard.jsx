import './AdminProjects.css';
import '../adminShared.css';

function ProjectCard({ project, handleEdit, handleDelete }) {
  return (
    <div className="admin-project-card admin-panel-card">

      <div className="admin-project-card-content">

        <h3 className="admin-project-card-title">
          {project.name}
        </h3>

        {project.description && (
          <p className="admin-project-card-description">
            {project.description}
          </p>
        )}

        <div className="admin-project-meta">

          {project.year && (
            <span className="admin-project-year">
              {project.year}
            </span>
          )}

          {project.status && (
            <span className="admin-project-status">
              {project.status}
            </span>
          )}

        </div>

        {project.featured && (
          <p className="admin-project-featured">
            Featured
          </p>
        )}

      </div>

      <div className="admin-project-card-actions admin-panel-card-actions">

        <button
          className="admin-edit-project-btn"
          onClick={() => handleEdit(project)}
        >
          Edit
        </button>

        <button
          className="admin-delete-project-btn"
          onClick={() => handleDelete(project.id)}
        >
          ×
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;