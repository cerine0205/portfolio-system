import "./About.css";
import { tagsData } from "../../data/projectsData";
import { certificatesData } from "../../data/certifcatesData";

function About({ setActivePage }) {
  return (
    <div className="about">

      <div className="about-left">

        <p className="about-kicker">ABOUT</p>
        <h1 className="about-title">Who I am.</h1>

        <p className="about-text">
          I'm a software engineer who spends most of my time thinking about performance...
        </p>

        <p className="about-text">
          My work spans databases, creative tooling...
        </p>

        <button className="btn-contact"
          onClick={() => setActivePage("Contact")}>GET IN TOUCH →</button>

      </div>

      <div className="about-right">

        <p className="skills-title">STACK & EXPERTISE</p>

        <ul className="skills-list">
          {tagsData.map((skill) => (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>

        <p className="cert-title">CERTIFICATIONS</p>

        <ul className="cert-list">
          {certificatesData.slice(0, 3).map((cert) => (
            <li key={cert.id} className="cert-item">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                {cert.title}  </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/drive/folders/13yZgeX854Fzng1N_3XBnpAfsHgU7VjFu"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-view-all"
        >
          View All Certifications →
        </a>


      </div>


    </div>
  );
}

export default About;