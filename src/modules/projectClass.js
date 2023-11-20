export default class Project {
  constructor() {}

  toDos = [];

  addToDo(toDo) {
    this.toDos.push(toDo);
  }
  getToDos() {
    return this.toDos;
  }
  removeToDo() {}
}
