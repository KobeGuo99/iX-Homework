export class Task {
    constructor(task, complete = false) {
      this.task = task;
      this.complete = complete;
    }
  
    static fromJSON(json) {
      return new Task(json.task, json.complete);
    }
  }
  