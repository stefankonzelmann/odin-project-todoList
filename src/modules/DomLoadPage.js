import "../style.css";
import loadDialog from "./DomLoadDialog";

export default function loadPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const toDos = document.createElement("div");
  const footer = document.createElement("div");
  const title = document.createElement("div");
  const btnAddToDo = document.createElement("button");

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

  btnAddToDo.addEventListener("click", () => {
    loadDialog();
  });
}
