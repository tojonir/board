const { User, Project } = require("../../models/mongo.model");
const query = {
  getAllProject: async () => {
    return await Project.find();
  },
};

const mutation = {
  createProject: async (_, { name, workspace }) => {
    const newProject = new Project({ name, workspace });
    newProject.save();
    return await Project.find({ workspace });
  },
  deleteProject: async (_, { id }) => {
    await Project.deleteOne({ _id: id });
    return await Project.find({ workspace });
  },
};

const relation = {};

module.exports = { query, mutation, relation };
