import InputGroup from "../inputgroup/InputGroup";
import "./UserInput.css";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <InputGroup
        left={{
          label: "Initial Investment",
          value: userInput.initialInvestment,
          onChange: (event) =>
            onChange("initialInvestment", event.target.value),
        }}
        right={{
          label: "Annual Investment",
          value: userInput.annualInvestment,
          onChange: (event) => onChange("annualInvestment", event.target.value),
        }}
      />
      <InputGroup
        left={{
          label: "Expected Return",
          value: userInput.expectedReturn,
          onChange: (event) => onChange("expectedReturn", event.target.value),
        }}
        right={{
          label: "Duration",
          value: userInput.duration,
          onChange: (event) => onChange("duration", event.target.value),
        }}
      />
    </section>
  );
}
