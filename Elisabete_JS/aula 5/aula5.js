
//select content by id
const title = document.getElementById("title");
console.log(title);
console.log("id:", title.id);

//select element by class
const mainContent = document.getElementsByClassName("main-content");
console.log(mainContent);

//select elements by tagName
const paragraphCollection = document.getElementsByTagName("p");
console.log(paragraphCollection);

//******************************** */

// DOM elements
const body = document.querySelector("body");
const productList = document.createElement("ul");

body.appendChild(productList);

// representation of products
let products = ["Computer", "Toothbrush", "Knife", "Plate"];

for (let i = 0; i < products.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerText = products[i];
  productList.appendChild(listItem);
}

productList.remove();

// DOM events
const btn = document.createElement("button");
btn.innerText = "Click Me!";
document.body.appendChild(btn);

// anonymous function
btn.addEventListener('click', () => {
  alert("You clicked me!");
});
// normal function
btn.addEventListener('click', showMessage);

function showMessage() {
  alert("You clicked me!");
}


