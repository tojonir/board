require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { google } = require("./routes/auth/google");
const { github } = require("./routes/auth/github");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.use("/auth/google", google);
app.use("/auth/github", github);

app.listen(port, () => console.log(`server is running on port ${port}`));
