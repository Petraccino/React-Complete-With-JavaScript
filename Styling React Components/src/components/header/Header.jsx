import logo from "../../assets/logo.png";
import "./Header.css";

const styleInline = {
  color: "red",
  textAlign: "left",
};

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p style={styleInline}>A community of artists and art-lovers.</p>
    </header>
  );
}
