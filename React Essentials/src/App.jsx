import { useState } from "react";
import { Header } from "./components/header/Header";
import CoreConcept from "./components/coreconcept/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopit, setSelectedTopic] = useState(null);

  function handleSelected(title) {
    setSelectedTopic(title);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopit) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopit].title}</h3>
        <p>{EXAMPLES[selectedTopit].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopit].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopit === "components"} title="Component" onSelected={() => handleSelected("components")}/>
            <TabButton isSelected={selectedTopit === "jsx"} title="JSX"  onSelected={() => handleSelected("jsx")}/>
            <TabButton isSelected={selectedTopit === "props"} title="Props"  onSelected={() => handleSelected("props")}/>
            <TabButton isSelected={selectedTopit === "state"} title="State"  onSelected={() => handleSelected("state")}/>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
