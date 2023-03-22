const { User, Workspace } = require("../../models/mongo.model");
const query = {
  getAllWorkspace: async () => {
    return await Workspace.find();
  },
  getWorkspaceById: async (_, { id }) => {
    return await Workspace.findById(id);
  },
  getWorkspaceByName: async (_, { name }) => {
    return await Workspace.findOne({ name });
  },
};

const mutation = {
  createWorkSpace: async (_, { name, created_by }) => {
    const newWorkspace = new Workspace({ name, created_by });
    return await newWorkspace.save();
  },
  deleteWorkspace: async (_, { id }) => {
    await Workspace.deleteOne({ _id: id });
    return await Workspace.find();
  },
};

const relation = {
  created_by: async ({ created_by }) => {
    return await User.findById(created_by);
  },
};

module.exports = { query, mutation, relation };
