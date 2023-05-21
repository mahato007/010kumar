// var li = document.getElementsByTagName("li");
// console.log(li);
var itemList = document.querySelector("#items");
// var newDiv=document.createElement('div');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// first child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello1";
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello3";

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = "red";

// create Element
//   create a div
var newDiv = document.createElement("div");
// console.log(newDiv);
// add className
newDiv.className = "hello";
// add id
newDiv.id = "hello1";

// add attribute
newDiv.setAttribute("title", "hello Div");

// add textnode
var newDivText = document.createTextNode("hello world");

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "40px";
