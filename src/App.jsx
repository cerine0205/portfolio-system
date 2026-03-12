import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import { useState, useEffect } from "react";
import { getProjects } from "./api/projectsApi";
import { getCertificates } from "./api/certificatesApi";import ProjectDetails from "./component/ProjectDetails/ProjectDetails";

function App() {
  
  const [projects, setProjects] = useState([]);
  const tagsData = [
    "ALL",
    ...new Set(projects.flatMap((p) => (p.tags || []).map((tag) => tag.name)))
  ];

  const [certificates, setCertificates] = useState([]);


  useEffect(() => {
    async function load() {
      const projectData = await getProjects();
      const certificateData = await getCertificates();

      setProjects(projectData);
      setCertificates(certificateData);
    }
    load();
  }, []);

  return (
    <div className="App">
      <HashRouter >
        <Routes>

          <Route path="/" 
          element={<PortfolioLayout 
          projects={projects} 
          setProjects={setProjects} 
          tagsData={tagsData}  
          certificates={certificates} 
          setCertificates={setCertificates}/>} />

          <Route path="/Admin" 
          element={<Admin 
          email="cerine@portfolio" />} />

          <Route path="project/:id" 
          element={<ProjectDetails 
          projects={projects} />} />

          <Route 
          path={"*"}
          element={<PortfolioLayout 
          projects={projects} 
          setProjects={setProjects} 
          tagsData={tagsData} 
          certificates={certificates} 
          setCertificates={setCertificates} />} 
         ></Route>
        </Routes>

      </HashRouter>

    </div>
  );
}

export default App;