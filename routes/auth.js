const express = require("express");
const { github, google } = require("../controllers/auth.controller");

const route = express.Router();

route.post("/github", github);
route.post("/google", google);

exports.auth = route;
