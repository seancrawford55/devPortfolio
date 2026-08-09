import "./About.css";

const spec: { key: string; value: string }[] = [
  { key: "name", value: "Your Name" },
  { key: "role", value: "Backend / Systems Engineer" },
  { key: "focus", value: "distributed systems, APIs, data pipelines" },
  { key: "stack", value: "Go, TypeScript, PostgreSQL, Docker, AWS" },
  { key: "based_in", value: "your city" },
  { key: "currently", value: "open to new roles" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="eyebrow">about</p>
        <h2 className="about__heading">how the system's configured</h2>

        <p className="about__intro">
          A short paragraph about your background, what got you into
          backend/systems work, and what you care about when you build
          software. Two to three sentences is plenty &mdash; let the spec
          block below carry the details.
        </p>

        <div className="spec-block mono">
          {spec.map((row) => (
            <div className="spec-block__row" key={row.key}>
              <span className="spec-block__key">{row.key}:</span>
              <span className="spec-block__value">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}