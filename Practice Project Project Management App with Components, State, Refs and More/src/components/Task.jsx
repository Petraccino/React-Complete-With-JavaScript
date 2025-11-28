import { useState } from "react";

export default function Task({ onAddTask}) {
  const [enteredTask, setEnteredTask] = useState();

  function handleEnteredTask(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center justify-between">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleEnteredTask}
        value={enteredTask}
      />
      <button
        className="text-stone-600 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
