import React, { useState } from "react";
import { Task } from "../models/Task";

export default function TaskForm(props) {
  const [task, setTask] = useState("");

  function onTaskFormSubmit(e) {
    e.preventDefault();

    if (task === "") return;

    const newTask = new Task(task);
    props.onTaskCreated(newTask);
    setTask("");
  }

  return (
    <div>
      <h1 class="text-center">Task List</h1>
      <hr />
      <p class="text-center">Our simple task list</p>
      <form id="form" onSubmit={onTaskFormSubmit} className="input-group m-2">
        <input
          type="text"
          className="form-control"
          placeholder="New task"
          aria-label="New task"
          aria-describedby="button-addon2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          +
        </button>
      </form>
    </div>
  );
}
