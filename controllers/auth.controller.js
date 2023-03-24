const { compare } = require("bcrypt");
const { authInput, newUserInput } = require("../models/input.model");
const { User } = require("../models/mongo.model");
const {
  getGoogleConsentUrl,
  getGithubConsentUrl,
  logWithGithub,
  logWithGoogle,
} = require("../services/auth.service");
const { encrypt } = require("../services/bcrypt.service");
const { findAndCreateUser } = require("../services/user.service");

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
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(404).send("User not found");
      const checkPwd = await compare(req.body.password, user.password);
      if (!checkPwd) return res.status(404).send("Wrong password");
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
      const password = encrypt(req.body.password);
      const userData = { ...req.body, password };
      const user = await findAndCreateUser(userData);
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
