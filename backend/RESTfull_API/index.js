const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.filter((user) => user.id === id);

//   return res.json(user);
// });
app.use(express.json());
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
// app.post("/user", (req, res) => {
//   const newuser = {
//     id: users.length + 1,
//     ...req.body
//   };
//   users.push(newuser);
//   return res.status(201).json(newuser);
// });

// app.listen(5000, () => {
//   console.log("Server listening on port 5000");
// });
