import "./style.css";
// Classes
class ToDo {
  constructor(title) {
    this.title = title;
  }

  subtasks = [];

  addSubTask() {}
}

class Project {
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

// Initial Page Load --> seperate later into page structure and event listeners
function loadPage() {
  // Build static page
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  const sidebar = document.createElement("div");
  const toDos = document.createElement("div");
  const title = document.createElement("div");
  const btnAddToDo = document.createElement("button");
  const projectList = document.createElement("div");

  const dialog = `
      <dialog id="taskDialog">
        <form method="dialog">
          <p>
            <input type="text" id="taskTitle" name="taskTitle" />
          </p>
          <div class="formButtons">
            <button id="cancel" type="reset">Cancel</button>
            <button id="submit" type="submit">Save</button>
          </div>
        </form>
      </dialog>`;

  title.innerText = "Odinist";
  btnAddToDo.innerText = "+ Add Task";

  wrapper.classList.add("wrapper");
  sidebar.classList.add("sidebar");
  toDos.classList.add("toDos");
  title.classList.add("title");
  btnAddToDo.classList.add("btnAddToDo");
  projectList.classList.add("projectList");

  sidebar.appendChild(title);
  sidebar.appendChild(btnAddToDo);
  sidebar.appendChild(projectList);
  wrapper.appendChild(sidebar);
  wrapper.appendChild(toDos);
  content.appendChild(wrapper);

  content.insertAdjacentHTML("afterbegin", dialog);

  // Build interaction --> add Task modal
  const taskDialog = document.querySelector("#taskDialog");
  const inputTaskTitle = document.querySelector("#taskTitle");
  const btnSubmit = document.querySelector("#submit");
  const btnCancel = document.querySelector("#cancel");

  btnAddToDo.addEventListener("click", () => {
    taskDialog.showModal();
  });

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault;
    createToDo(inputTaskTitle.value);
    inputTaskTitle.value = "";
    taskDialog.close();
  });

  btnCancel.addEventListener("click", () => {
    taskDialog.close();
  });
}

// Adding to DOM
function addProjectToPage(project) {
  console.log("Adding new project...");
  const sidebar = document.querySelector(".projectList");
  const element = `<div class="project">${project.name}</div>`;
  sidebar.insertAdjacentHTML("beforeend", element);
}

function addToDoToPage(toDo) {
  const toDos = document.querySelector(".toDos");
  const newToDo = document.createElement("div");
  const newToDoTitle = document.createElement("div");
  const newToDoCheckbox = document.createElement("div");

  newToDo.classList.add("toDo");
  newToDoCheckbox.classList.add("toDoCheckbox");
  newToDoTitle.innerText = toDo.title;
  newToDoCheckbox.innerText = "O";

  newToDo.appendChild(newToDoCheckbox);
  newToDo.appendChild(newToDoTitle);
  toDos.appendChild(newToDo);

  newToDoCheckbox.addEventListener("click", () => {
    newToDo.remove();
  });
}

// Creator Functions
function createToDo(title) {
  // toDo object is not yet taken into account
  const newToDo = new ToDo(title);
  addToDoToPage(newToDo);
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
loadPage();
const projects = [];

let inbox = new Project("Inbox");
addProjectToPage(inbox);
