let demo = document.getElementById("btn");

// function cngcolor() {
//   document.body.style.backgroundColor = "green";
// }
// demo.onclick = (e) => {
//   // console.log("click me one time")
// //   console.log(e);
// //   console.log(e.type);
// //   console.log(e.target);

// };
// let demo1 = document.querySelector("#btn1");
// demo1.innertext = "change name";
// console.log(demo1);
// demo1.ondblclick = () => {
//   console.log("click me two time");
// };
// let test = document.querySelector("#para");
// test.onmouseover = (e) => {
//   console.log("i am in the box");
//   //   console.log(e.type);
//   //   console.log(e.test);
//   //   console.log(e.target);
// };

let currmode = "light";
demo.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "blue";
    document.querySelector("body").style.backgroundColor = "blue";
  } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  //   console.log(currmode);
});
