const { User } = require("../models/mongo.model");

exports.findAndUpdateUser = async (filter, data, options) => {
  return User.findOneAndUpdate(filter, data, options);
};
