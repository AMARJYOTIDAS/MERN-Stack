// const { rawListeners } = require("cluster");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://$(req.headers.host)`);

  const name = url.searchParams.get("name");
  const sub = url.searchParams.get("sub");

  const pass = parseInt(url.searchParams.get("pass"));
  let result;
  if (pass >= 40) {
    result = "pass";
  } else {
    result = "fail";
  }

  res.end(`student is${name},sub is ${sub}, ${result}`);
});

server.listen(5500, () => {
  console.log("server listening on localhost:5500");
});
