export default class ToDo {
  constructor(title, description, dueDate, priority, notes) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priotity),
      (this.notes = notes);
  }

  subtasks = [];

  addSubTask() {}
}
