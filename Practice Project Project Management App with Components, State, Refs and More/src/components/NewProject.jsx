export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <p>
          <label>TITLE</label>
          <input type="text" />
        </p>
        <p>
          <label>DESCRIPTION</label>
          <textarea></textarea>
        </p>
        <p>
          <label>DUE DATE</label>
          <input type="date" />
        </p>
      </div>
    </div>
  );
}
