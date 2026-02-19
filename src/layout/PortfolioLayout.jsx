import { useState } from "react";
import Header from "../component/header/Header";
import MainContent from "../component/mainContent/MainContent";

function PortfolioLayout() {
  const [ActivePage, setActivePage] = useState("Home");
  

  return (
    <div >   
      <Header ActivePage={ActivePage} setActivePage={setActivePage} />
      <MainContent ActivePage={ActivePage} />
    </div>
  );
}   

export default PortfolioLayout;