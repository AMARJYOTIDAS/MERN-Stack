const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("home page");
  } else if (req.url === "/about") {
    res.write("about page");
  } else if (req.url === "/contact") {
    res.write("contact page");
  }
  res.end();
});

server.listen(8000, () => {
  console.log("server running on localhost:8000");
});
