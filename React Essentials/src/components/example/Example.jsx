import "./Example.css";
import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import Section from "../section/Section";
import { EXAMPLES } from "../../data";

export default function Example() {
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
    <Section id="examples" h2="Examples">
      <menu>
        <TabButton
          isSelected={selectedTopit === "components"}
          title="Component"
          onClick={() => handleSelected("components")}
        />
        <TabButton
          isSelected={selectedTopit === "jsx"}
          title="JSX"
          onClick={() => handleSelected("jsx")}
        />
        <TabButton
          isSelected={selectedTopit === "props"}
          title="Props"
          onClick={() => handleSelected("props")}
        />
        <TabButton
          isSelected={selectedTopit === "state"}
          title="State"
          onClick={() => handleSelected("state")}
        />
      </menu>
      {tabContent}
    </Section>
  );
}
