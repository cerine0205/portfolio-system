import ProjectCard from "../project card/ProjectCard";
import "./Home.css";

function Home({ activePage, setActivePage,projects }) {

    return (
        <div className="home">
            <p className="intro-text">Software Engineer & Systems Thinker</p>

            <h1>Building<br /> systems <br />
                <span>at the edge<br /></span>
                of what's<br /> possible. </h1>

            <p className="description-text">I design and engineer software that operates at the boundary<br />
                of performance, elegance, and scale. Rust, Go, TypeScript, and<br />
                everything in between.</p>

            <div className="home-buttons">
                <button className="btn view-projects" onClick={() => setActivePage("Projects")}>View Projects</button>
                <button className="btn contact-me" onClick={() => setActivePage("About")}>Contact Me</button>
            </div>



            <div className="Featured-section">

                <div className="featured-title">
                    <span className="featured-star">★</span> Featured
                    <hr className="featured-line" />
                </div>

                <div className="Featured-card">

                    {projects.filter(project => project.featured === true).map((project) => (
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
        </div>

    );
}

export default Home;