import "../style.css";
import loadDialog from "./DomLoadDialog";
import createToDo from "./toDoCreator";

export default function loadPage() {
  // Build static page
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const toDos = document.createElement("div");
  const footer = document.createElement("div");
  const title = document.createElement("div");
  const btnAddToDo = document.createElement("button");

  const dialog = `
    <dialog id="taskDialog">
      <form method="dialog">
        <p>
          <label for="taskTitle">Task Title</label><br />
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

  sidebar.appendChild(title);
  sidebar.appendChild(btnAddToDo);
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
