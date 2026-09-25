const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}:from server \n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("this is from home page");
        break;
      case "/about":
        res.end("this is from aboutpage");
        break;
      default:
        res.end("404 not found");
    }
    res.end("hello from server");
  });
});

server.listen(8000, () => {
  console.log("server listen on port 8000");
});
// const http = require("http");
// const server = http.createServer((req, res) => {
//   //   if (req.method === "GET" && req.url === "/users") {
//   //     res.end("here are all user");
//   //   } else {
//   //     res.end("Route not found");
//   //   }

//   if (req.method === "POST" || req.url === "/users") {
//     res.end("new user created");
//   } else {
//     res.end("route not found");
//   }
// });

// server.listen(8000, () => {
//   console.log("server listen on port 8000");
// });
