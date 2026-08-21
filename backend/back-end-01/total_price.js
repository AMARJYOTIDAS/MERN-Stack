const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://$(req.headers.host)`);

  const quantity = url.searchParams.get("quantity");
  const price = url.searchParams.get("price");
  const total = parseInt(quantity) * parseInt(price);

  res.end(`quantity:${quantity},price:${price},total=${total}`);
});

server.listen(4000, () => {
  console.log("server listening on localhost:4000");
});
