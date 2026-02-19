import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";

function MainContent({ ActivePage }) {
 
    if (ActivePage === "Home") {
      return <Home/>;
    } else if (ActivePage === "Projects") {
      return <Projects/>;
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