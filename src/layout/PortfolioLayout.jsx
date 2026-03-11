import { useState } from "react";
import Header from "../component/header/Header";
import MainContent from "../component/mainContent/MainContent";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer/Footer";

function PortfolioLayout({
  projects,
  setProjects,
  tagsData,
  certificates,
  setCertificates}) {
    
  const [ActivePage, setActivePage] = useState("Home");
  const [activeTag, setActiveTag] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [contactProject, setContactProject] = useState(null);
  const [projectBackPage, setProjectBackPage] = useState("Projects");

  const navigate = useNavigate();

  const handelAdmin= ()=>{
    navigate("/Admin");
  }


  return (
    <div >   
      <Header 
      ActivePage={ActivePage} 
      setActivePage={setActivePage} 
      handelAdmin={handelAdmin}
      setContactProject={setContactProject} />
     
      <MainContent 
      ActivePage={ActivePage} 
      setActivePage={setActivePage} 
      activeTag={activeTag} 
      setActiveTag={setActiveTag} 
      tagsData={tagsData} 
      projects={projects} 
      setProjects={setProjects} 
      selectedProject={selectedProject} 
      setSelectedProject={setSelectedProject}
      certificates={certificates} 
      setCertificates={setCertificates}
      selectedCertificate={selectedCertificate} 
      setSelectedCertificate={setSelectedCertificate}
      contactProject={contactProject}
      setContactProject={setContactProject}
      projectBackPage={projectBackPage}
      setProjectBackPage={setProjectBackPage}/>
    
    
    <Footer/>
    </div>
    
  );
}   

export default PortfolioLayout;