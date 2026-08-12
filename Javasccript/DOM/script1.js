// let division = document.querySelector("div");
// console.log(division);

// import { createElement } from "react";

// let demo = division.getAttribute("id");
// console.log(demo);

let para = document.querySelector("p");
let newbtn2 = document.createElement("button");
newbtn2.innerText = "p-btn";
para.after(newbtn2);
newbtn2.addEventListener("click", () => {
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
});
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
// console.log(newBtn);
newBtn.addEventListener("click", () => {
  document.querySelector("div").innerText = "change by newBtn";
});

let body = document.querySelector("body");
body.style.backgroundColor = "brown";

let div1 = document.querySelector("div");
// div1.append(newBtn);
// div1.prepend(newBtn);
// div1.before(newBtn);
div1.after(newBtn);

// div1.remove(newBtn);
// let para = document.querySelector("p");
// para.remove();

function changeText() {
  document.querySelector("div").innerText = "Change by ChangeText function";
}

function changeColor() {
  let color = "white";
  if (div1.style.backgroundColor === "white") {
    div.style.backgroundColor = "red";
  } else {
    div1.style.backgroundColor = "white";
  }
  //   document.querySelector("div").style.backgroundColor = "red";
}

const image = document.querySelector("img");

const images = [
  "/Javasccript/images/img_1.jpeg",
  "/Javasccript/images/img_2.jpeg",
  "/Javasccript/images/img_4.jpeg",
];

let index = 0;

document.getElementById("btn3").addEventListener("click", function () {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  image.src = images[index];
});

document.getElementById("btn4").addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  image.src = images[index];
});

function getInput() {
  let input = document.getElementById("input").value;
  document.getElementById("result").innerText = input;
}
