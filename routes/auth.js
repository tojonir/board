const express = require("express");
const { github, google } = require("../controllers/auth.controller");

const route = express.Router();

route.get("/github", github);
route.get("/google", google);

exports.auth = route;
