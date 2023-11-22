import ToDo from "./toDoClass";
import addToDoToPage from "./DomDisplayToDo";

export default function createToDo(title) {
  // toDo object is not yet taken into account
  const newToDo = new ToDo(title);
  addToDoToPage(newToDo);
}
