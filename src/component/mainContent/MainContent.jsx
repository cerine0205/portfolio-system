import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import CertificateDetails from "../CertificateDetails/CertificateDetails";

function MainContent({ ActivePage,
  setActivePage,
  activeTag,
  setActiveTag,
  tagsData,
  projects,
  setProjects,
  selectedProject,
  setSelectedProject,
  certificates,
  setCertificates,
  selectedCertificate,
  setSelectedCertificate,
  contactProject,
  setContactProject,
  projectBackPage,
  setProjectBackPage,
  skills,
  offlineMode }) {

  if (ActivePage === "Home") {
    return <Home
      activePage={ActivePage}
      setActivePage={setActivePage}
      projects={projects} 
      setContactProject={setContactProject}
      setSelectedProject={setSelectedProject}
      setProjectBackPage={setProjectBackPage}/>;
  }

  else if (ActivePage === "Projects") {
    return <Projects
      activeTag={activeTag}
      setActiveTag={setActiveTag}
      tagsData={tagsData}
      projects={projects}
      setSelectedProject={setSelectedProject}
      setActivePage={setActivePage}
      setProjectBackPage={setProjectBackPage} />;

  } else if (ActivePage === "About") {
    return <About
      setActivePage={setActivePage}
      certificates={certificates}
      setSelectedCertificate={setSelectedCertificate}
      skills= {skills} />;
  }

  else if (ActivePage === "Contact") {
    return <Contact
    contactProject={contactProject}
    offlineMode={offlineMode} />;
  }

  else if (ActivePage === "ProjectDetails") {
    return <ProjectDetails
      project={selectedProject}
      setActivePage={setActivePage} 
      setContactProject={setContactProject}
      projectBackPage={projectBackPage}/>;
  }

  else if (ActivePage === "CertificateDetails") {
    return <CertificateDetails
      selectedCertificate={selectedCertificate}
      setActivePage={setActivePage} />;
  }

}

export default MainContent;