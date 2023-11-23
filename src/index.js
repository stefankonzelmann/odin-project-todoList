import loadPage from "./modules/DomLoadPage";
import addProjectToPage from "./modules/DomAddProject";
import Project from "./modules/projectClass";

loadPage();

let inboxProject = new Project("Inbox");
addProjectToPage(inboxProject);
