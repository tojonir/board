const { User, Project } = require("../../models/mongo.model");
const query = {
  getAllProject: async () => {
    return await Project.find();
  },
};

const mutation = {
  upsertProject: async (_, { name, workspace }) => {
    await Project.findOneAndUpdate(
      { name, workspace },
      { name, workspace },
      { upsert: true, new: true }
    );
    return await Project.find({ workspace });
  },
  deleteProject: async (_, { id }) => {
    await Project.deleteOne({ _id: id });
    return await Project.find({ workspace });
  },
};

const relation = {};

module.exports = { query, mutation, relation };
