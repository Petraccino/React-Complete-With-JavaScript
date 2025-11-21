import { useState } from "react";
import Header from "./components/header/Header";
import UserInput from "./components/userinput/UserInput";
import Result from "./components/result/Result";
import { INITIAL_VALUE } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUE);

  function handleChange(field, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: +value,
      };
    });
  }

  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid && <Result userInput={userInput} />}
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
