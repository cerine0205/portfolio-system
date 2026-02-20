import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {

  const help = `Available commands:
- lsProj             : List all projects.
- delProj            : Delete a project.
- editProj           : Edit a project.
- createProj         : Create a new project.
- lsMsgs             : List all received messages.
- exit               : Exit the admin terminal.`;

  return (
    <div className="App">
           <HashRouter >
            <Routes>
              <Route path ="/" element={<PortfolioLayout />} />
              <Route path ="/Admin" element={<Admin email="admin@example.com" help={help} />} />
                <Route element={<PortfolioLayout />} path={"*"}></Route>
            </Routes>
            
            </HashRouter>

    </div>
  );
}

export default App;