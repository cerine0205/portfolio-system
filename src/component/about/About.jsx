import "./About.css";

function About({ setActivePage, tagsData, certificates ,setSelectedCertificate}) {

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
          {tagsData.filter((skill) => skill !== "ALL").map((skill) => (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>

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
  );
}

export default About;