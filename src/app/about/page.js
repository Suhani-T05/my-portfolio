import Navbar from "../Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about">
        <div className="about-content">
          <p className="section-title">Get to know me ✨</p>

          <h1>About Me</h1>

          <p>
            Hi! I'm Suhani, a student and aspiring Full Stack Developer.
            I enjoy learning new technologies and building creative
            websites and applications.
          </p>

          <p>
            Currently, I am learning HTML, CSS, JavaScript, React and
            backend development. My goal is to become a skilled full-stack
            developer and create useful projects.
          </p>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>
      </main>
    </>
  );
}