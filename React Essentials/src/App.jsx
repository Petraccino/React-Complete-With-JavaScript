import reactIcon from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Foundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max * 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={reactIcon} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS.at(0).title}
              description={CORE_CONCEPTS.at(0).description}
              image={CORE_CONCEPTS.at(0).image}
            />
            <CoreConcept
              title={CORE_CONCEPTS.at(1).title}
              description={CORE_CONCEPTS.at(1).description}
              image={CORE_CONCEPTS.at(1).image}
            />
            <CoreConcept
              title={CORE_CONCEPTS.at(2).title}
              description={CORE_CONCEPTS.at(2).description}
              image={CORE_CONCEPTS.at(2).image}
            />
            <CoreConcept
              title={CORE_CONCEPTS.at(3).title}
              description={CORE_CONCEPTS.at(3).description}
              image={CORE_CONCEPTS.at(3).image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
