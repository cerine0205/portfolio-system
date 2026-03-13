import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-divider"></div>

      <p className="footer-text">
        Let's build something great together.
      </p>

      <div className="footer-links">

        <a href="https://github.com/cerine0205" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icon" />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/cerine-aljahdali/" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-icon" />
          LinkedIn
        </a>

        <a href="https://x.com/c_2erine?s=21" target="_blank" rel="noreferrer">
          <FaXTwitter className="footer-icon" />   
        </a>

        <a href="mailto:saljahdali0205@outlook.com">
          <FaEnvelope className="footer-icon" />
          Email
        </a>

      </div>

      <div className="footer-divider"></div>

    </footer>
  );
}

export default Footer;