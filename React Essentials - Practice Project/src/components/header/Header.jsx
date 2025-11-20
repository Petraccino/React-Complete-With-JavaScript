import "./Header.css";
import img from "../../assets/investment-calculator-logo.png"
export default function Header() {
  return (
    <header  id="header">
      <img src={img} alt="Investment calculator logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
