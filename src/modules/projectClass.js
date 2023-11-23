export default class Project {
  constructor(name) {
    this.name = name;
  }
  toDos = [];

  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  getToDos() {
    return this.toDos;
  }
  removeToDo() {}
}
