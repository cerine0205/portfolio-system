import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import { useState, useEffect } from "react";
import { getProjects } from "./api/projectsApi";
import { getCertificates } from "./api/certificatesApi"; 
import { getSkills } from "./api/skillsApi";
import ProjectDetails from "./component/ProjectDetails/ProjectDetails";
import { fallbackCertificates, fallbackProjects, fallbackSkills } from "./data/fallbackData";

function App() {

  const [projects, setProjects] = useState([]);
  const tagsData = [
    "ALL",
    ...new Set(projects.flatMap((p) => (p.tags || []).map((tag) => tag.name)))
  ];

  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const projectData = await getProjects();
        const certificateData = await getCertificates();
        const skillData = await getSkills();

        setProjects(projectData);
        setCertificates(certificateData);
        setSkills(skillData);
      }
      catch (error) {
        console.warn("API failed, using fallback data");
        setProjects(fallbackProjects);
        setCertificates(fallbackCertificates);
        setSkills(fallbackSkills);
      }
   
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
              setCertificates={setCertificates}
              skills={skills} />} />

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
              setCertificates={setCertificates}
              skills={skills} />}
          ></Route>
        </Routes>

      </HashRouter>

    </div>
  );
}

export default App;