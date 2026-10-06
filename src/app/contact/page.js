import Navbar from "../Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact">
        <div className="contact-content">
          <p className="section-title">Let's connect 💌</p>

          <h1>Contact Me</h1>

          <p>
            Have a project idea or just want to say hello?
            Feel free to reach out!
          </p>

          <div className="contact-card">
            <p>📧 Email</p>
            <h3>suhanitalekar556@gmail.com</h3>

            <p>📱 Phone</p>
            <h3>+91 123456789</h3>

            <p>📍 Location</p>
            <h3>India</h3>
          </div>
        </div>
      </main>
    </>
  );
}