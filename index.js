const plusButton = document.querySelector(".plus-button");

var counter = 1;

plusButton.addEventListener("click", addToDo);

function addToDo() {
  const value = document.getElementById("input-field").value;

  var ul = document.getElementById("to-do-list");
  var li = document.createElement("li");

  const span = document.createElement("span");
  span.classList.add("float-right");
  span.innerHTML = `<button id="trash-button-${counter}"><i class="fa-solid fa-trash-can"></i></button>`;

  li.setAttribute("id", `id-${counter}`);
  li.appendChild(document.createTextNode(value));
  li.appendChild(span);
  ul.appendChild(li);

  document.getElementById("input-field").value = "";
  counter++;
}
