import "./StatusBar.css";

interface StatusField {
  label: string;
  value: string;
}

const fields: StatusField[] = [
  { label: "status", value: "online" },
  { label: "uptime", value: "6yrs" },
  { label: "stack", value: "go / node / postgres" },
  { label: "region", value: "us-east" },
];

export default function StatusBar() {
  return (
    <div className="status-bar mono">
      <div className="status-bar__dot" aria-hidden="true" />
      {fields.map((f) => (
        <div className="status-bar__field" key={f.label}>
          <span className="status-bar__label">{f.label}</span>
          <span className="status-bar__value">{f.value}</span>
        </div>
      ))}
    </div>
  );
}