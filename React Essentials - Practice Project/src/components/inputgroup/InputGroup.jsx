import "./InputGroup.css";

export default function InputGroup({ left, right }) {
  return (
    <div className="input-group">
      <p>
        <label>{left.label}</label>
        <input type="number" required value={left.value} onChange={left.onChange} />
      </p>
      <p>
        <label>{right.label}</label>
        <input type="number" required value={right.value} onChange={right.onChange} />
      </p>
    </div>
  );
}
