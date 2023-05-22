var form1 = document.getElementById("addform");

var list = document.getElementById("kalyan");

form1.addEventListener("submit", addItem);

list.addEventListener("click", remove1);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("rudra").value;

  var li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  var button1 = document.createElement("button");

  button1.className = "btn btn-danger btn-sm float-end delete";

  button1.appendChild(document.createTextNode("X"));

  li.appendChild(button1);

  list.appendChild(li);
}

function remove1(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}
