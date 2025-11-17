import "./CoreConcept.css";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return (
            <li key={conceptItem.title}>
              <img src={conceptItem.image} alt={conceptItem.title} />
              <h3>{conceptItem.title}</h3>
              <p>{conceptItem.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
