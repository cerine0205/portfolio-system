import ProjectCard from "./ProjectCard";
import './AdminProjects.css';
import '../adminShared.css';

function ProjectGrid({ projects, handleEdit, handleDelete }) {

  if (projects.length === 0) {
    return (
      <p className="admin-empty-projects admin-panel-empty">
        No projects yet.
      </p>
    );
  }

  return (
    <div className="admin-projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;