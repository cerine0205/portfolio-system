import "./Contact.css";
import { useState } from "react";
import { createMessage } from "../../api/messagesApi";

function Contact({
  contactProject,
  offlineMode }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: ""
  });

  const [isSending, setIsSending] = useState(false);
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

    if (isSending) return;
 
    const payload = {
      ...formData,
      project_id: contactProject?.id || null
    };

    try {
      setIsSending(true);
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
    finally {
      setIsSending(false);
    }
  }

  return (
    <div className="contact">

      {contactProject && !offlineMode && (
        <p className="demo-banner">
          <span className="demo-dot"></span>
          Contacting about: <strong>{contactProject.name}</strong>
        </p>
      )}

      <div className="contact-header">
        <p className="contact-kicker">Contact</p>

        <h1 className="contact-title">let's talk.</h1>

        <p className="contact-subtext">
          Whether it's a project idea, a collaboration, or just a question — feel free to reach out.        </p>
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

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message →"}
          </button>

        </form>

        {status && <p className="contact-status">{status}</p>}

      </div>

    </div>
  );
}

export default Contact;