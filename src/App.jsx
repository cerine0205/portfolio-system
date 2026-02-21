import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import { useState } from "react";
import { projectsData,tagsData } from "./data/projectsData";

function App() {
  const [projects,setProjects] = useState(projectsData);
  

  return (
    <div className="App">
           <HashRouter >
            <Routes>
              <Route path ="/" element={<PortfolioLayout projects={projects} setProjects={setProjects} tagData={tagsData} />} />
              <Route path ="/Admin" element={<Admin email="admin@example.com" projects={projects} setProjects={setProjects} />} />
              <Route element={<PortfolioLayout projects={projects} setProjects={setProjects} tagData={tagsData} />} path={"*"}></Route>
            </Routes>
            
            </HashRouter>

    </div>
  );
}

export default App;