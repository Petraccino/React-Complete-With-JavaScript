import { Header } from "./components/header/Header";
import CoreConcept from "./components/coreconcept/CoreConcept";
import Example from "./components/example/Example";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Example />
      </main>
    </>
  );
}

export default App;
