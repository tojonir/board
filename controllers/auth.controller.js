const {
  getGoogleConsentUrl,
  getGithubConsentUrl,
  loginWithGithub,
  loginWithGoogle,
  signupWithGithub,
  signupWithGoogle,
} = require("../services/auth.service");

exports.github = async (req, res) => {
  if (req.query.code) {
    try {
      let token = null;
      if (req.body.singup) {
        token = await signupWithGithub(req.query.code);
      } else {
        token = await loginWithGithub(req.query.code);
      }

      if (token.error) return res.status(404).send(token.error);
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
      let token = null;
      if (req.body.singup) {
        token = await signupWithGoogle(req.query.code);
      } else {
        token = await loginWithGoogle(req.query.code);
      }
      if (token.error) return res.status(404).send(token.error);
      return res.redirect(`http://localhost:3000/auth/success?token=${token}`);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  // redirect to login screen
  return res.redirect(getGoogleConsentUrl());
};
