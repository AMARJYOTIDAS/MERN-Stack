const fs = require("fs");

// sync...
// fs.writeFileSync("./test.txt", "hello node js");

//asyncronous file
// fs.writeFile("./test.txt", "hello node js this is async", (err) => {});

//sunc..
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

//Asnc ...
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `\n${Date.now()} append this`);

// fs.unlink("./contact.txt", (err) => {
//   if (err) {
//     console.log("err", err);
//   } else {
//     console.log("delete succesfuly");
//   }
// });

// fs.mkdirSync("FolderBy_fs");
// fs.rmdirSync("./FolderBy_fs");

console.log(fs.statSync("./test.txt"));

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("home page");
//   } else if (req.url === "/about") {
//     res.write("about page");
//   } else if (req.url === "/contact") {
//     res.write("contact page");
//   }
//   res.end();
// });

// server.listen(8000, () => {
//   console.log("server running on localhost:8000");
// });
