// const { log } = require("console");
const http = require("http");
const server = http.createServer((req, res) => {
  //   if (req.method === "GET" && req.url === "/users") {
  //     res.end("here are all user");
  //   } else {
  //     res.end("Route not found");
  //   }

  if (req.method === "POST" || req.url === "/users") {
    res.end("new user created");
  } else {
    res.end("route not found");
  }
});

server.listen(8000, () => {
  console.log("server listen on port 8000");
});
