import "./Header.css";
import img from "../../assets/investment-calculator-logo.png"
export default function Header() {
  return (
    <div id="header">
      <img src={img} />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
