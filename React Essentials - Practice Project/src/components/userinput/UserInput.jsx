import { useState } from "react";
import { INITIAL_VALUE } from "../../util/investment";
import InputGroup from "../inputgroup/InputGroup";
import "./UserInput.css";

export default function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_VALUE);

  function handleChange(field, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: value,
      };
    });
  }

  return (
    <section id="user-input">
      <InputGroup
        left={{
          label: "Initial Investment",
          value: userInput.initialInvestment,
          onChange: (event) => handleChange("initialInvestment", event.target.value),
        }}
        right={{
          label: "Annual Investment",
          value: userInput.annualInvestment,
          onChange: (event) => handleChange("annualInvestment", event.target.value),
        }}
      />
      <InputGroup
        left={{
          label: "Expected Return",
          value: userInput.expectedReturn,
          onChange: (event) => handleChange("expectedReturn", event.target.value),
        }}
        right={{
          label: "Duration",
          value: userInput.duration,
          onChange: (event) => handleChange("duration", event.target.value),
        }}
      />
    </section>
  );
}
