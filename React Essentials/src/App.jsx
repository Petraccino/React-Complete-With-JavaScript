import { Header } from "./components/header/Header";
import CoreConcept from "./components/coreconcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton/TabButton";

function App() {

  function handleSelected(){
    console.log("Hello World -  selected");
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
            <TabButton title="Component" onSelected={handleSelected}/>
            <TabButton title="JSX"  onSelected={handleSelected}/>
            <TabButton title="Props"  onSelected={handleSelected}/>
            <TabButton title="State"  onSelected={handleSelected}/>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
