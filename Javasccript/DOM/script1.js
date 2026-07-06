// let division = document.querySelector("div");
// console.log(division);

// let demo = division.getAttribute("id");
// console.log(demo);

// let para = document.querySelector("p");
// console.log(para.setAttribute("newclass","pigon"));

// to accses css property and change it we can use style property of the element
let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.color = "white";
div.style.border = "2px solid black";
div.style.fontStyle = "italic";
// div.style.visibility = "visible";
div.innerHTML = "Hello World hello world";
div.style.textWrap = "center";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "aqua";
console.log(newBtn);

let body = document.querySelector("body");
body.style.backgroundColor = "brown"

let div1= document.querySelector("div");
// div1.append(newBtn);
// div1.prepend(newBtn);
// div1.before(newBtn);
div.after(newBtn);

// div1.remove(newBtn);
let para = document.querySelector("p");
 para.remove();

