import React from "react";

export default function TaskTable(props) {
  return (
    <div>
      <table className="table mt-3 text-center">
        <thead>
          <tr>
            <th>Task</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.task}</td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.complete}
                    onChange={() => props.onTaskComplete(index)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => props.onTaskDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
