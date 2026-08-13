// const message = document.getElementById("message");
// const button = document.getElementById("btn");

// // button.addEventListener("click", () => {
// //   message.textContent = "button clicked";
// // });
// // button.addEventListener("click", () => {
// //   message.innerHTML = "button clicked";
// //   console.log(button);
// // });
// // button.addEventListener("click", () => {
// //   message.innerText = "button clicked";
// //   console.log(button);
// // });

// let input = document.getElementById("username");
// let output = document.getElementById("output");

// input.addEventListener("input", (e) => {
//   output.textContent = e.target.value;
// });

let input = document.getElementById("inputBox");

input.addEventListener("keydown", function (event) {
  console.log(event.key);
});
