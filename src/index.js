import loadPage from "./modules/DomLoadPage";
import ToDo from "./modules/toDoClass";
import addToDoToPage from "./modules/DomAddToDo";

loadPage();
let test = new ToDo("test");
console.log(test);
addToDoToPage(test.title);
