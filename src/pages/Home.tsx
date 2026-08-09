import StatusBar from "../components/StatusBar";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <StatusBar />

        <h1 className="hero__title">
          I build all the parts of the app
          <br />
        </h1>

        <p className="hero__subtitle">
          Full stack Web Dev that is diving deeper into the stack and heap with backend and systems projects.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__link">
            view projects &rarr;
          </a>
          <a href="#about" className="hero__link hero__link--muted">
            about me
          </a>
        </div>
      </div>
    </section>
  );
}