const express = require("express");

const app = express();

const users = [
  {
    id: 1,
    username: "amar",
    password: "123456",
  },
  {
    id: 2,
    username: "alexander",
    password: "1234567",
  },
  {
    id: 3,
    username: "ronney",
    password: "1234568",
  },
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function autentication(req, res, next) {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    return res.status(401).json({
      message: "invaild user name",
    });
  }
  req.user = user;

  next();
}

app.post("/login", autentication, (req, res) => {
  res.json({
    message: "login successful",
    user: req.user.username,
  });
});

app.listen(8000, () => {
  console.log("app listen on port 8000");
});
