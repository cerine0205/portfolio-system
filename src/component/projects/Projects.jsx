import ProjectCard from "../project card/ProjectCard";
import "./Projects.css";

function Projects({activeTag, setActiveTag}) {
  const tags = [
    {id: 1, label: 'Rust'},
    {id: 2, label: 'Systems'},
    {id: 3, label: 'Database'},
    {id: 4, label: 'Web'},
    {id: 5, label: 'Mobile'},
    {id: 6, label: 'AI'},
    {id: 7, label: 'ML'},
    {id: 8, label: 'Data Science'},
    {id: 9, label: 'Web3'},
    {id: 10, label: 'all'}
  ]; // مثال على التاقات

  return (
 <div className="projects">

    <div className="project-header">
        <p className="work-text">ALL WORK</p>
        <h1 className="projects-title">Projects</h1>

        <nav className="tags-nav">
            <ul className="tag-list">
                {tags.map((tag) => (
                    <li 
                        key={tag.id}
                        className={activeTag === tag.label ? "tag-item-active" : "tag-item"}
                        onClick={() => setActiveTag(tag.label)}
                    >
                        {tag.label}
                    </li>
                ))}
            </ul>
        </nav>
    </div>

   

      <div className="projects-card">
        <ProjectCard
          projectImage="/path/to/image.jpg"
          Featured={true}
          projectDate={2024}
          projectName="Lattice DB"
          projectDesciption="An embedded graph database Written in Rust, with a query language inspired by Datalog."
          projectTags={['Rust', 'Systems', 'Database']}  // تمرير التاقات كـ array
        />
        <ProjectCard
          projectImage="/path/to/image.jpg"
          Featured={true}
          projectDate={2024}
          projectName="Lattice DB"
          projectDesciption="An embedded graph database Written in Rust, with a query language inspired by Datalog."
          projectTags={['Rust', 'Systems', 'Database']}  // تمرير التاقات كـ array
        />
        <ProjectCard
          projectImage="/path/to/image.jpg"
          Featured={false}
          projectDate={2024}
          projectName="Lattice DB"
          projectDesciption="An embedded graph database Written in Rust, with a query language inspired by Datalog."
          projectTags={['Rust', 'Systems', 'Database']}  // تمرير التاقات كـ array
        />
      </div>
    </div>
  );
}

export default Projects;

