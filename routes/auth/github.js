const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/mongo.model");

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
        }).then(async (response) => {
          const { login, email, name, avatar_url } = response.data;
          await User.findOne({ email })
            .then(async (user) => {
              if (!user) {
                const newUser = new User({
                  username: login,
                  email,
                  fullname: name,
                  avatar: avatar_url,
                });
                await newUser.save();
              }
              const token = jwt.sign(
                {
                  username: login,
                  email,
                  fullname: name,
                  avatar: avatar_url,
                },
                process.env.PRIVATE_KEY
              );
              res.redirect("http://localhost:3000/auth/success?token=" + token);
            })
            .catch((err) => {
              console.log(err);
            });
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
