


import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectGrid.css";

function ProjectGrid({ projects, handleEdit, handleDelete }) {

  if (projects.length === 0) {
    return (
      <p className="admin-empty-projects">
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
