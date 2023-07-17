class Task {
  constructor(task, complete = false) {
    this.task = task;
    this.complete = complete;
  }

  static fromJSON(json) {
    return new Task(json.task, json.complete);
  }
}

class UI {
  constructor() {
    this.form = document.querySelector(".input-group");
    this.taskInput = document.querySelector(".form-control");
    this.tableBody = document.getElementById("table-body");

    this.form.addEventListener("submit", (e) => this.onFormSubmit(e));

    this.tasks = [];
    this.loadTasksFromLocalStorage();

    this.renderTaskTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.taskInput.value === "") {
      return;
    }

    const task = new Task(this.taskInput.value);
    this.tasks.push(task);
    this.saveTasksToLocalStorage();

    this.renderTaskTable();

    this.taskInput.value = "";
  }

  renderTaskTable() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.tasks.length; ++i) {
      const task = this.tasks[i];

      const tr = this.createTaskTableRow(task, i);

      this.tableBody.appendChild(tr);
    }

    // Add event listeners to radio buttons to mark tasks as complete
    const completeButtons = document.getElementsByClassName("complete-task");
    for (let i = 0; i < completeButtons.length; ++i) {
      completeButtons[i].addEventListener("click", () => {
        this.tasks[i].complete = true;
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
      });
    }
  }

  createTaskTableRow(task, index) {
    const tr = document.createElement("tr");

    const tdTask = document.createElement("td");
    const tdComplete = document.createElement("td");
    const tdActions = document.createElement("td");

    tdTask.innerHTML = task.task;
    tdComplete.innerHTML =
      '<input type="radio" class="complete-task" ' +
      (task.complete ? "checked" : "") +
      "/>";

    const deleteButton = document.createElement("i");

    deleteButton.setAttribute("class", "bi bi-trash");
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
      this.onDeleteTaskClicked(index);
    });

    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;
  }

  onDeleteTaskClicked(index) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }

  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem("tasks");
    if (json) {
      const taskArr = JSON.parse(json);
      this.tasks = taskArr.map((x) => Task.fromJSON(x));
    }
  }
}

const ui = new UI();
