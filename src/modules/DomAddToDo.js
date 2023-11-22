export default function addToDoToPage(toDo) {
  const toDos = document.querySelector(".toDos");
  const newToDo = document.createElement("div");
  const newToDoTitle = document.createElement("div");
  const newToDoCheckbox = document.createElement("div");

  newToDo.classList.add("toDo");
  newToDoTitle.innerText = toDo;
  newToDoCheckbox.innerText = "[ ]";

  newToDo.appendChild(newToDoCheckbox);
  newToDo.appendChild(newToDoTitle);

  toDos.appendChild(newToDo);

  newToDoCheckbox.addEventListener("click", (e) => {
    newToDo.remove();
  });
}
