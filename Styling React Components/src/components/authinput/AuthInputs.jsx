import { useState } from "react";
import "./AuthInputs.css";
import { styled } from "styled-components";
import Button from "../styled/Button";
import Input from "../input/Input";

const ControllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControllContainer>
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></Input>
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></Input>
      </ControllContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
