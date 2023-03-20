require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { google } = require("./routes/auth/google");
const { github } = require("./routes/auth/github");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.use("/auth/google", google);
app.use("/auth/github", github);

const start = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("db connected successfuly");
      app.listen(port, () => console.log(`server is running on port ${port}`));
    })
    .catch((err) => {
      console.log(err);
    });
};

start();
