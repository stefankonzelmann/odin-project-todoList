import "../style.css";

export default function loadPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const toDos = document.createElement("div");
  const footer = document.createElement("div");
  const title = document.createElement("div");

  title.innerText = "Odinist";

  wrapper.classList.add("wrapper");
  sidebar.classList.add("sidebar");
  toDos.classList.add("toDos");
  title.classList.add("title");

  sidebar.appendChild(title);
  wrapper.appendChild(sidebar);
  wrapper.appendChild(toDos);
  content.appendChild(wrapper);
}
