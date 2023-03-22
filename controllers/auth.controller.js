const {
  getGoogleConsentUrl,
  getGithubConsentUrl,
  logWithGithub,
  logWithGoogle,
} = require("../services/auth.service");

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
