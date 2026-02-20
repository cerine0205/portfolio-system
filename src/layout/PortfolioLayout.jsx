import { useState } from "react";
import Header from "../component/header/Header";
import MainContent from "../component/mainContent/MainContent";
import { useNavigate } from "react-router-dom";

function PortfolioLayout() {
  const [ActivePage, setActivePage] = useState("Home");
  const [activeTag, setActiveTag] = useState("ALL");
  const navigate = useNavigate();

  const handelAdmin= ()=>{
    navigate("/Admin");
  }


  return (
    <div >   
      <Header ActivePage={ActivePage} setActivePage={setActivePage} handelAdmin={handelAdmin} />
      <MainContent ActivePage={ActivePage} setActivePage={setActivePage} activeTag={activeTag} setActiveTag={setActiveTag} />
    </div>
  );
}   

export default PortfolioLayout;