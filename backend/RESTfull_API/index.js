const express = require("express");
const user = require("./MOCK_DATA.json");
const app = express();

app.get("/users/:id", (req, res) => {
  return res.json(user.filter(user) => {
    
});

app.listen(5000, () => {
  console.log("server listen on port 5000");
});
