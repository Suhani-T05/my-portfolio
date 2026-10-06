import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm 👋</p>

          <h1>Suhani Talekar</h1>

          <h2>Full Stack Developer 🚀</h2>

          <p>
            I am a student passionate about web development,
            technology and creating beautiful websites.
          </p>

          <div className="buttons">
            <a href="/about">About Me</a>
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </main>
    </>
  );
}