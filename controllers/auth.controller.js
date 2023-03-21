const {
  getGoogleConsentUrl,
  getGithubConsentUrl,
  getGithubAccessToken,
  getGithubUser,
  getGoogleAccessToken,
  getGoogleUser,
} = require("../services/auth.service");
const { findAndUpdateUser } = require("../services/user.service");
const jwt = require("jsonwebtoken");

exports.github = async (req, res) => {
  if (req.query.code) {
    try {
      //get acess token
      const { access_token } = await getGithubAccessToken(req.query.code);
      // get user info
      const { login, email, name, avatar_url } = await getGithubUser(
        access_token
      );
      // upsert data into database
      const user = await findAndUpdateUser(
        { email },
        { username: login, email, fullname: name, avatar: avatar_url },
        { upsert: true, new: true }
      );
      //genrate token fo client
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          avatar: user.avatar,
        },
        process.env.PRIVATE_KEY
      );
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
      // get access_token from google
      const { id_token, access_token } = await getGoogleAccessToken(
        req.query.code
      );
      // get user info
      const { email, name, given_name, picture } = await getGoogleUser(
        access_token,
        id_token
      );

      const user = await findAndUpdateUser(
        { email },
        { email, fullname: name, username: given_name, avatar: picture },
        { upsert: true, new: true }
      );

      // generate token for client
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          avatar: user.avatar,
        },
        process.env.PRIVATE_KEY
      );
      return res.redirect(`http://localhost:3000/auth/success?token=${token}`);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  // redirect to login screen
  return res.redirect(getGoogleConsentUrl());
};
