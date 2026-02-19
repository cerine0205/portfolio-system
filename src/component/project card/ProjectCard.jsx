import "./ProjectCard.css";

function ProjectCard({ projectImage,projectName ,Featured,projectDate, projectDesciption,projectTags}) {
  return (
    <div className="project-card">
   <img
  src={projectImage || "public/assets/background.png"} // استخدم الصورة الافتراضية إذا لم يتم توفير صورة المشروع
  alt={projectName}
  className="project-image"
  onError={(e) => {
    e.target.src = "public/assets/background.png"; // حدد المسار للصورة البديلة هنا
    // "https://cerine0205.github.io/portfolio-system/assets/background.jpg"
  }}
/>
<span className={Featured? "featured": ""}>{Featured? "featured": ""}</span>
        
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