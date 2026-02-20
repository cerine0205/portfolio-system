import { useState } from "react";
import Header from "../component/header/Header";
import MainContent from "../component/mainContent/MainContent";

function PortfolioLayout() {
  const [ActivePage, setActivePage] = useState("Home");
  const [activeTag, setActiveTag] = useState("ALL");
  

  return (
    <div >   
      <Header ActivePage={ActivePage} setActivePage={setActivePage} />
      <MainContent ActivePage={ActivePage} setActivePage={setActivePage} activeTag={activeTag} setActiveTag={setActiveTag} />
    </div>
  );
}   

export default PortfolioLayout;