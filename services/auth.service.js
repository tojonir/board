const axios = require("axios");

const formatUrl = (rootUrl, options) => {
  const query = new URLSearchParams(options);
  return `${rootUrl}?${query.toString()}`;
};

exports.getGoogleConsentUrl = () => {
  return formatUrl("https://accounts.google.com/o/oauth2/v2/auth", {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    access_type: "offline",
    prompt: "consent",
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  });
};

exports.getGoogleAccessToken = async (code) => {
  const url = formatUrl("https://oauth2.googleapis.com/token", {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  });
  const response = await axios({
    method: "POST",
    url,
  });
  return response.data;
};

exports.getGoogleUser = async (access_token, id_token) => {
  const url = formatUrl("https://www.googleapis.com/oauth2/v1/userinfo", {
    alt: "json",
    access_token,
  });
  const response = await axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${id_token}`,
    },
  });
  return response.data;
};

exports.getGithubConsentUrl = () => {
  return formatUrl("https://github.com/login/oauth/authorize", {
    client_id: process.env.GITHUG_CLIENT_ID,
  });
};

exports.getGithubAccessToken = async (code) => {
  const url = formatUrl("https://github.com/login/oauth/access_token", {
    client_id: process.env.GITHUG_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code,
  });
  const response = await axios({
    method: "POST",
    url,
    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
};

exports.getGithubUser = async (access_token) => {
  const response = await axios({
    method: "GET",
    url: "https://api.github.com/user",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data;
};
