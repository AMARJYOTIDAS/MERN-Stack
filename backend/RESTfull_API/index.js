const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();
const fs = require("fs");

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.filter((user) => user.id === id);
//   return res.json(user);
// });
// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });

// app.get("/users", (req, res) => {
//   const html = `
//   <ul>
//   ${users.map((user) => `<li>${user.first_name} </li>`).join("")}
//   </ul>
//   `;
//   res.send(html);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);

//   return res.json(user);
// });
app.use(express.urlencoded({ extended: false }));
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile(`./ MOCK_DATA.json`, JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucess" });
  });
  // console.log("Body", body);
});

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   // .patch("/api/user/:id", (req, res) => {
//   //   const id = Number(req.params.id);

//   //   const userIndex = users.find((user) => user.id === getID);

//   //   return res.json({ status: "pnding" });
//   // })
//   .delete((req, res) => {
//     const id = Number(req.params.id);

//     const index = users.findIndex((user) => user.id === id);

//     if (index === -1) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     const deletedUser = users.splice(index, 1);

//     return res.json({
//       message: "User deleted successfully",
//       user: deletedUser[0],
//     });
//   });

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

// app.use(express.json());
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     ...req.body,
//   };

//   users.push(newUser);

//   return res.status(201).json(newUser);
// });

// app.listen(5000, () => {
//   console.log("Server listening on port 5000");
// });
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
