const http = require("http");

const server = http.createServer((req, res) => {
  //   const url = new URL(req.url, `http://$(req.headers.host)`);
  //   const id = url.searchParams.get("id");
  //   res.end(`user id:${id}`);

  const url = new URL(req.url, `http://$(req.headers.host)`);

  const name = url.searchParams.get("name");
  const price = url.searchParams.get("price");

  res.end(`product:${name},price:${price}`);
});

server.listen(3000, () => {
  console.log("server listen on port:3000");
});
