import PortfolioLayout from "./layout/PortfolioLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
           <HashRouter >
            <Routes>
              <Route path ="/" element={<PortfolioLayout />} />
              <Route path ="/Admin" element={<Admin />} />
                <Route element={<PortfolioLayout />} path={"*"}></Route>
            </Routes>
            
            </HashRouter>

    </div>
  );
}

export default App;