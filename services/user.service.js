const { User } = require("../models/mongo.model");

exports.findAndCreateUser = async (filter, data) => {
  let user = await User.find(filter);
  if (!user) {
    user = new User(data);
    user.save();
  }
  return user;
};

exports.findAndUpdateUser = async (filter, data) => {
  return User.findOneAndUpdate(filter, data, { upsert: true, new: true });
};
