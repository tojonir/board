const { User } = require("../../models/mongo.model");
const query = {
  users: async () => {
    return await User.find();
  },
  user: async (_, { id }) => {
    return await User.findById(id);
  },
};

const mutation = {};

const relation = {};

module.exports = { query, mutation, relation };
