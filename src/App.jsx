import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import { useState, useEffect } from "react";
import { getProjects } from "./api/projectsApi";

function App() {
  const [projects, setProjects] = useState([]);
  const tagsData = [
    "ALL",
    ...new Set(projects.flatMap((p) => (p.tags || []).map((tag) => tag.name)))
  ];


  useEffect(() => {
    async function load() {
      const data = await getProjects();
      setProjects(data);
    }
    load();
  }, []);

  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path="/" element={<PortfolioLayout projects={projects} setProjects={setProjects} tagsData={tagsData} />} />
          <Route path="/Admin" element={<Admin email="admin@example.com" setProjects={setProjects} />} />
          <Route element={<PortfolioLayout projects={projects} setProjects={setProjects} tagsData={tagsData} />} path={"*"}></Route>
        </Routes>

      </HashRouter>

    </div>
  );
}

export default App;