import "./Section.css";

export default function Section({h2, children, ...props}) {
  return (
    <section {...props}>
      <h2>{h2}</h2>
      {children}
    </section>
  );
}
