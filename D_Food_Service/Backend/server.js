const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors(
    {
      origin: allowedOrigins,
    },
    (res, err) => {},
  ),
);

app.listen(PORT, (req, res) => {
  console.log(`app listen on port ${PORT}`);
});
