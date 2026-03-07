import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

function MainContent({ ActivePage, setActivePage,
  activeTag, setActiveTag, tagsData, projects,
  setProjects, selectedProject, setSelectedProject,
  certificates, setCertificates }) {

  if (ActivePage === "Home") {
    return <Home
      activePage={ActivePage}
      setActivePage={setActivePage}
      projects={projects} />;
  }

  else if (ActivePage === "Projects") {
    return <Projects
      activeTag={activeTag}
      setActiveTag={setActiveTag}
      tagsData={tagsData}
      projects={projects}
      setSelectedProject={setSelectedProject}
      setActivePage={setActivePage} />;

  } else if (ActivePage === "About") {
    return <About
      setActivePage={setActivePage}
      tagsData={tagsData}
      certificates={certificates} />;
  }

  else if (ActivePage === "Contact") {
    return <Contact />;
  }

  else if (ActivePage === "ProjectDetails") {
    return <ProjectDetails
      project={selectedProject}
      setActivePage={setActivePage} />;
  }

}

export default MainContent;