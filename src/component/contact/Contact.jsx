import "./Contact.css";
import { useState } from "react";
import { createMessage } from "../../api/messagesApi";

function Contact({ contactProject }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setStatus("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...formData,
      project_id: contactProject?.id || null
    };

    try {
      await createMessage(payload);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        content: ""
      });

    } catch (error) {
      setStatus("Failed to send message.");
    }
  }

  return (
    <div className="contact">

      {contactProject && (
        <p className="contact-project-note">
          Contacting about: <strong>{contactProject.name}</strong>
        </p>
      )}

      <div className="contact-header">
        <p className="contact-kicker">Contact</p>

        <h1 className="contact-title">let's talk.</h1>

        <p className="contact-subtext">
          Whether it's a project, a collaboration, or just a question — I'm listening.
        </p>
      </div>


      <div className="contact-form">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder="Message"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

        {status && <p className="contact-status">{status}</p>}

      </div>

    </div>
  );
}

export default Contact;