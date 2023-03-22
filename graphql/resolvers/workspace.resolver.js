const { Workspace } = require("../../models/mongo.model");
const query = {
  workspaces: async () => {
    return await Workspace.find();
  },
  workspace: async (_, { id }) => {
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
};

const relation = {
  created_by: async ({ created_by }) => {
    return await User.findById(created_by);
  },
};

module.exports = { query, mutation, relation };
