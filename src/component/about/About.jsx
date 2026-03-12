import "./About.css";

function About({
  setActivePage,
  certificates,
  setSelectedCertificate,
  skills }) {


  return (
    <div className="about">
      <div className="about-left">
        <p className="about-kicker">ABOUT</p>

        <h1 className="about-title">
          Who I <br /> am.
        </h1>

        <p className="about-text">
          I'm a software developer who enjoys turning ideas into real, working systems.
          I like building full-stack applications where interfaces, APIs, and databases
          work together in a clear and structured way.
        </p>

        <p className="about-text">
          I enjoy designing systems where data flows smoothly from the backend to the
          user interface, creating software that feels simple but powerful underneath.
          Beyond web development, I'm also interested in game development and exploring
          artificial intelligence.
        </p>

        <div className="about-actions">
          <button
            className="btn contact-me"
            onClick={() => setActivePage("Contact")}
          >
            GET IN TOUCH →
          </button>

          <button
            className="btn view-projects"
            onClick={() => setActivePage("Projects")}
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>

      <div className="about-right">
        <div className="about-right-section">
          <p className="skills-title">STACK & EXPERTISE</p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill.id} className="skill-item">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="about-right-section">
          <p className="cert-title">CERTIFICATIONS</p>

          <div className="cert-grid">
            {certificates.slice(0, 3).map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                onClick={() => {
                  setSelectedCertificate(cert);
                  setActivePage("CertificateDetails");
                }}
              >
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;