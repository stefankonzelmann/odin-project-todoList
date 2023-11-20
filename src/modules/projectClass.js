export default class Project {
  constructor(name, description, color) {
    (this.name = name), (this.description = description), (this.color = color);
  }

  default = false;
  toDos = [];

  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  getToDos() {
    return this.toDos;
  }
  removeToDo() {}

  setToDefault() {
    this.default = true;
  }
}
