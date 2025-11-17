import "./Tabs.css";

export default function ({ children, buttons, buttonsContainer }) {
    const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
