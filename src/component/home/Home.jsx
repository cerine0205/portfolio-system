import ProjectCard from "../project card/ProjectCard";
import "./Home.css";

function Home({
    activePage,
    setActivePage,
    projects,
    setContactProject,
    setSelectedProject,
    setProjectBackPage
}) {
    return (
        <div className="home">
            <div className="hero-section">

                <div className="home-content">
                    <p className="intro-text">
                        Full-Stack Developer • System Builder
                    </p>

                    <h1>
                        Turning<br />
                        ideas <br />
                        <span>into real<br /></span>
                        working<br />
                        systems.
                    </h1>

                    <p className="description-text">
                        I design and build full-stack systems — connecting interfaces,
                        APIs, and databases into software that actually works.
                    </p>

                    <div className="home-buttons">
                        <button
                            className="btn view-projects"
                            onClick={() => setActivePage("Projects")}
                        >
                            View Projects
                        </button>

                        <button
                            className="btn contact-me"
                            onClick={() => {
                                setContactProject(null);
                                setActivePage("Contact");
                            }}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="hero-logo">
                    <div className="logo-circle">
                        <img src="public\assets\DarkModeLogo.jpg" alt="Cerine avatar" className="hero-avatar" />
                    </div>
                </div>

            </div>

            <div className="Featured-section">
                <div className="featured-title">
                    <span className="featured-star">★</span> Featured
                    <hr className="featured-line" />
                </div>

                <div className="Featured-card">
                    {projects
                        .filter((project) => project.featured === true)
                        .map((project) => (
                            <ProjectCard
                                key={project.id}
                                projectImage={project.image}
                                Featured={project.featured}
                                projectDate={project.year}
                                projectName={project.name}
                                projectDesciption={project.description}
                                projectTags={(project.tags || []).map((tag) => tag.name)}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setProjectBackPage("Home");
                                    setActivePage("ProjectDetails");
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Home;