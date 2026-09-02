const express = require("express");

const app = express();

// app.get("/users", (req, res) => {
//   res.end("users");
// });
const user = [
  {
    id: 1,
    name: "amar",
  },
  {
    id: 2,
    name: "xx",
  },
  {
    id: 3,
    name: "ccc",
  },
];

app.get("/users", (req, res) => {
  res.json(user);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = user.find((user) => user.id === id);
  return res.json(user);
});
app.listen(8000, () => {
  console.log("server running on port 8000");
});
