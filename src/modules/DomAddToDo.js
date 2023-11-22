export default function addToDoToPage(toDo) {
  const toDos = document.querySelector(".toDos");
  toDos.innerText += toDo;
}
