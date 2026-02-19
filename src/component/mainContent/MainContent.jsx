import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";

function MainContent({ ActivePage,setActivePage, activeTag, setActiveTag }) {
 
    if (ActivePage === "Home") {
      return <Home activePage={ActivePage} setActivePage={setActivePage}/>;
    } else if (ActivePage === "Projects") {
      return <Projects activeTag={activeTag} setActiveTag={setActiveTag}/>;
    } else if (ActivePage === "About") {
      return <About/>;
    } else if (ActivePage === "Contact") {
      return <Contact/>;
    }       
    else if (ActivePage === "Admin") {
      // router
    }

}

export default MainContent;