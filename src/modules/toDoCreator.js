import ToDo from "./toDoClass";
import addToDoToPage from "./DomDisplayToDo";

export default function createToDo(toDo) {
  // toDo object is not yet taken into account
  const newToDo = new ToDo("Test Task");
  addToDoToPage(newToDo);
}
