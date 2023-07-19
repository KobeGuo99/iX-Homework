import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { useState, useEffect } from "react";
import { Task } from "./models/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, [])

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks])  

  function onTaskCreated(task) {
    setTasks([...tasks, task]);
  }

  function onTaskDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function onTaskComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  }

  function saveTasksToLocalStorage(){
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <TaskForm onTaskCreated={onTaskCreated} />
        <TaskTable
          tasks={tasks}
          onTaskDelete={onTaskDelete}
          onTaskComplete={onTaskComplete}
        />
      </div>
    </div>
  );
}

export default App;

