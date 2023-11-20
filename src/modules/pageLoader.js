import "../style.css";

export default function loadPage() {
  console.log("Loading page...");
  const content = document.getElementById("content");
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const projects = document.createElement("div");
  const toDos = document.createElement("div");
  const footer = document.createElement("div");

  wrapper.classList.add("wrapper");
  header.classList.add("header");
  projects.classList.add("projects");
  toDos.classList.add("toDos");
  footer.classList.add("footer");

  header.innerText = "Odinist";
  projects.innerText = "Projects";
  toDos.innerText = "To Dos";
  footer.innerText = "footer";

  wrapper.appendChild(header);
  wrapper.appendChild(projects);
  wrapper.appendChild(toDos);
  wrapper.appendChild(footer);
  content.appendChild(wrapper);
}
