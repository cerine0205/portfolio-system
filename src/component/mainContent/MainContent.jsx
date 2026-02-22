import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";

function MainContent({ ActivePage,setActivePage, activeTag, setActiveTag ,tagsData,projects,setProjects}) {
 
    if (ActivePage === "Home") {
      return <Home activePage={ActivePage} setActivePage={setActivePage} projects={projects}/>;
    } else if (ActivePage === "Projects") {
      return <Projects activeTag={activeTag} setActiveTag={setActiveTag} tagsData={tagsData} projects={projects}/>;
    } else if (ActivePage === "About") {
      return <About setActivePage={setActivePage} tagsData={tagsData}/>;
    } else if (ActivePage === "Contact") {
      return <Contact/>;
    }       

}

export default MainContent;