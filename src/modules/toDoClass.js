export default class ToDo {
  constructor(projectName, title, description, dueDate, priority, notes) {
    (this.projectName = projectName((this.title = title))),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priotity),
      (this.notes = notes);
  }

  subtasks = [];

  addSubTask() {}
}
