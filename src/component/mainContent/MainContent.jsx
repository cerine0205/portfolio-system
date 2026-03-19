import { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ActivePage]);


  const pages = {
    Home: (
      <Home
        activePage={ActivePage}
        setActivePage={setActivePage}
        projects={projects}
        setContactProject={setContactProject}
        setSelectedProject={setSelectedProject}
        setProjectBackPage={setProjectBackPage}
      />
    ),

    Projects: (
      <Projects
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        tagsData={tagsData}
        projects={projects}
        setSelectedProject={setSelectedProject}
        setActivePage={setActivePage}
        setProjectBackPage={setProjectBackPage}
      />
    ),

    About: (
      <About
        setActivePage={setActivePage}
        certificates={certificates}
        setSelectedCertificate={setSelectedCertificate}
        skills={skills}
      />
    ),

    Contact: (
      <Contact
        contactProject={contactProject}
        offlineMode={offlineMode}
      />
    ),

    ProjectDetails: (
      <ProjectDetails
        project={selectedProject}
        setActivePage={setActivePage}
        setContactProject={setContactProject}
        projectBackPage={projectBackPage}
      />
    ),

    CertificateDetails: (
      <CertificateDetails
        selectedCertificate={selectedCertificate}
        setActivePage={setActivePage}
      />
    ),
  };

  return (
    <div key={ActivePage} className="page-fade">
      {pages[ActivePage] || null}
    </div>
  );

}

export default MainContent;