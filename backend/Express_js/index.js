const express = require("express");

const app = express();

// app.get("/users", (req, res) => {
//   res.end("users");
// });

app.get("/users", (req, res) => {
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
  res.json(user);
});
app.listen(8000, () => {
  console.log("server running on port 8000");
});
