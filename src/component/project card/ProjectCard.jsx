import "./ProjectCard.css";

function ProjectCard({ projectImage, projectName, Featured, projectDate, projectDesciption, projectTags ,onClick}) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-wrapper">
        <img
          src={projectImage || "public/assets/background.png"}
          alt={projectName}
          className="project-image"
          onError={(e) => {
            e.target.src = "public/assets/background.png";
          }}
        />
      </div>
      <span className={Featured ? "featured" : ""}>{Featured ? "featured" : ""}</span>

      <div className="card-header">
        <h2 className="project-title">{projectName}</h2>
        <p className="project-date">{projectDate}</p>
      </div>

      <p className="project-description">{projectDesciption}</p>

      <div className="Project-tags">
        {projectTags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;