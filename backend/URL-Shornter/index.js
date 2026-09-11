const express = require("express");

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

const app = express();
app.use(express.json());

const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("mongodb connected succsessfuly");

  // const mongoose = require("mongoose");
  // await mongoose.connection.db
  //   .collection("test")
  //   .insertOne({
  //     message: "mongodbis working",
  //   })
  //   .catch((err) => {
  //     console.error("mongodb connection failed", err);
  //   });
});

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`server start at port: ${PORT}`);
});
