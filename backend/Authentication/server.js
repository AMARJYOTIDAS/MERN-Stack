const express = require("express");
const app = express();

function Autentication(req, res, next) {
  const apikey = req.headers["x-api-key"];
  if (apikey !== "WEBOCKET123") {
    return res.status(401).json({
      message: "invalid user unauthorized",
    });
  }
  next();
}

app.get("/students", Autentication, (req, res) => {
  res.json({
    message: "student data",
    students: ["amar", "alexander", "ronney"],
  });
});

app.listen(8000, () => {
  console.log("app listen on port 8000");
});
