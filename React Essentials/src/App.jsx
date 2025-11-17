import { Header } from "./components/header/Header";
import CoreConcept from "./components/coreconcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton/TabButton";

function App() {

  function handleSelected(title){
    console.log(title);
}


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton title="Component" onSelected={() => handleSelected("component")}/>
            <TabButton title="JSX"  onSelected={() => handleSelected("jsx")}/>
            <TabButton title="Props"  onSelected={() => handleSelected("props")}/>
            <TabButton title="State"  onSelected={() => handleSelected("state")}/>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
