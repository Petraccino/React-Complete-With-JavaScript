import "./CoreConcept.css";
import { CORE_CONCEPTS } from "../../data";
import Section from "../section/Section";

export default function CoreConcept() {
  return (
    <Section id="core-concepts" h2="Core Concepts">
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
    </Section>
  );
}
