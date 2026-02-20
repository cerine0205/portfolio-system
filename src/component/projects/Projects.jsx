import ProjectCard from "../project card/ProjectCard";
import "./Projects.css";
import { projectsData, tagsData } from "../../data/projectsData";
import { useState } from "react";

function Projects({ activeTag, setActiveTag }) {
  const [projects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  const filterProjectsByTag = (tag, searchValue = searchTerm) => {
    const query = searchValue.trim().toLowerCase();

    const filtered = projects.filter((project) => {
      const matchesTag = tag === "ALL" || project.tags.includes(tag);

      const matchesSearch =
        query === "" ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      return matchesTag && matchesSearch;
    });

    setFilteredProjects(filtered);
  };

  return (
    <div className="projects">

      <div className="project-header">
        <p className="work-text">ALL WORK</p>

        <div className="search-container">
          <input type="text"
            placeholder="
            search projects..."
            value={searchTerm}
            onChange={(e) => {
              const value = e.target.value;
              setSearchTerm(value);
              filterProjectsByTag(activeTag, value);
            }} className="search-input" />
        </div>

        <h1 className="projects-title">Projects</h1>

        <nav className="tags-nav">
          <ul className="tag-list">
            {tagsData.map((tag) => (
              <li
                key={tag}
                className={activeTag === tag ? "tag-item-active" : "tag-item"}
                onClick={() => {
                  setActiveTag(tag);
                  filterProjectsByTag(tag);
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </nav>
      </div>




      <div className="projects-card">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            projectImage={project.image}
            Featured={project.featured}
            projectDate={project.year}
            projectName={project.name}
            projectDesciption={project.description}
            projectTags={project.tags} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

