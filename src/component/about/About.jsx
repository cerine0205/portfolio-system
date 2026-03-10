
import "./About.css";

function About({ setActivePage, tagsData, certificates, setSelectedCertificate }) {
  return (
    <div className="about">
      <div className="about-left">
        <p className="about-kicker">ABOUT</p>

        <h1 className="about-title">
          Who I <br /> am.
        </h1>

        <p className="about-text">
          I'm a software engineer who spends most of my time thinking about
          performance, elegance, and building systems that are meant to last.
        </p>

        <p className="about-text">
          My work spans APIs, databases, UI systems, and developer tooling.
          I enjoy building software that feels simple but is powerful under the hood.
        </p>

        <div className="about-actions">
          <button
            className="btn-contact"
            onClick={() => setActivePage("Contact")}
          >
            GET IN TOUCH →
          </button>

          <button
            className="btn-secondary"
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
            {tagsData
              .filter((skill) => skill !== "ALL")
              .map((skill) => (
                <span key={skill} className="skill-item">
                  {skill}
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