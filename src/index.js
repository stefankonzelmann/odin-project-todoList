import loadPage from "./modules/DomLoadPage";
import ToDo from "./modules/toDoClass";
import addToDoToPage from "./modules/DomDisplayToDo";

loadPage();
let test1 = new ToDo("test1");
let test2 = new ToDo("test2");
let test3 = new ToDo("test3");
addToDoToPage(test1.title);
addToDoToPage(test2.title);
addToDoToPage(test3.title);
