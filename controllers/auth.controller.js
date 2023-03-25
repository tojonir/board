const { authInput, newUserInput } = require("../models/input.model");
const {
  getGoogleConsentUrl,
  getGithubConsentUrl,
  logWithGithub,
  logWithGoogle,
  login,
} = require("../services/auth.service");
const { encrypt } = require("../services/bcrypt.service");
const { findAndCreateUser } = require("../services/user.service");
const jwt = require("jsonwebtoken");

exports.github = async (req, res) => {
  if (req.query.code) {
    try {
      const token = await logWithGithub(req.query.code);
      return res.redirect(`http://localhost:3000/auth/success?token=${token}`);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  // redirect to login screen
  return res.redirect(getGithubConsentUrl());
};

exports.google = async (req, res) => {
  if (req.query.code) {
    try {
      const token = await logWithGoogle(req.query.code);
      return res.redirect(`http://localhost:3000/auth/success?token=${token}`);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  // redirect to login screen
  return res.redirect(getGoogleConsentUrl());
};

exports.login = async (req, res) => {
  await authInput
    .validate(req.body)
    .then(async () => {
      const user = await login(req.body.email, req.body.password);
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          avatar: user.avatar,
        },
        process.env.PRIVATE_KEY
      );
      return res.send(token);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

exports.signup = async (req, res) => {
  await newUserInput
    .validate(req.body)
    .then(async () => {
      const password = await encrypt(req.body.password);
      const userData = { ...req.body, password };
      const user = await findAndCreateUser({ email: req.body.email }, userData);
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          avatar: user.avatar,
        },
        process.env.PRIVATE_KEY
      );
      return res.send(token);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};
