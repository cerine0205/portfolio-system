import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">

        <p className="contact-kicker">Contact</p>
        <h1 className="contact-title">let's talk.</h1>

        <p className="contact-subtext">
          Whether it's a project, a collaboration, or just a question — I'm listening.
        </p>
      </div>


      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send Message →</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;