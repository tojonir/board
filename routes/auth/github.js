const express = require("express");
const axios = require("axios");

const route = express.Router();

route.get("/", async (req, res) => {
  if (req.query.code) {
    await axios({
      method: "POST",
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUG_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${req.query.code}`,
      headers: {
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        await axios({
          method: "GET",
          url: "https://api.github.com/user",
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
          },
        }).then((response) => {
          const { email, name, avatar_url } = response.data;
          res.redirect("http://localhost:3000/login?token=tojonirina");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUG_CLIENT_ID}`
    );
  }
});

exports.github = route;
