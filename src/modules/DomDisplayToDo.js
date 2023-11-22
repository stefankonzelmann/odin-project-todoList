export default function addToDoToPage(toDo) {
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
