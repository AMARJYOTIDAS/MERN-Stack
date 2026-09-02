const express = require("express");

// const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const fs = require("fs");

// Middleware - plugin that has access to the request and response objects,
//  and the next middleware function in the application’s request-response cycle.
app.use(express.urlencoded({ extended: false }));

// Make connection to the database

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB ")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });
// DB Shema ->

const userShema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Jobtitle: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userShema);

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
  <ul>
  ${allDbUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
});
// app.get("/api/user", (req, res, next));
app.get("/api/users/:id", async (req, res) => {
  // const id = Number(req.params.id);
  const user = await User.findById(req.params.id);

  return res.json(user);
});
app.use(express.urlencoded({ extended: false }));

app.post("/api/users/create", async (req, res) => {
  const body = req.body;
  console.log("Body", body);
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.Jobtitle ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    Jobtitle: body.Jobtitle,
    gender: body.gender,
  });
  console.log("Result", result);
  return res.status(201).json({ status: "success", data: result });
});
// users.push({ id: users.length + 1, ...body });
// fs.writeFile(`./ MOCK_DATA.json`, JSON.stringify(users), (err, data) => {
//   return res.json({ status: "sucess" });
// });
// // console.log("Body", body);
//
app
  .route("/api/users/:id")
  .get((req, res) => {
    // const id = Number(req.params.id);
    const user = User.findById(req.params.id);
    return res.json(user);
  })
  .patch(async (req, res) => {
    // const id = Number(req.params.id);

    const userIndex = await User.findByIdAndUpdate(req.params.id, {
      last_name: "Das",
      new: "true",
    });

    return res.json({ status: "sucess" });
  })

  .put(async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if (
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.Jobtitle ||
      !body.gender
    ) {
      return res.status(404).json({ msg: "all fields are required" });
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        Jobtitle: body.Jobtitle,
        gender: body.gender,
      },

      {
        new: true,
      },
    );
    if (!updateUser) {
      return res.status(404).json({
        msg: "user not found",
      });
    }

    return res.json({
      msg: "user updated successfully",
      user: updateUser,
    });
  })

  .delete(async (req, res) => {
    // const id = Number(req.params.id);

    await User.findByIdAndDelete(req.params.id);

    return res.json({ status: "success" });
    // if (index === -1) {
    //   return res.status(404).json({
    //     message: "User not found",
    //   });
    // }

    // const deletedUser = users.splice(index, 1);
  });
// return res.json({
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
//
//
//
//   users.push(newuser);
//   return res.status(201).json(newuser);
// });

// app.listen(5000, () => {
//   console.log("Server listening on port 5000");
// });
