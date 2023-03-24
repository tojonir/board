const { User, Workspace, Project } = require("../../models/mongo.model");
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
  upsertWorkSpace: async (_, { id, name, created_by }) => {
    // update
    if (id) {
      await Workspace.findOneAndUpdate(
        { _id: id },
        { name, created_by },
        { upsert: true, new: true }
      );
    } else {
      // create
      const newWorkspace = new Workspace({ name, created_by });
      await newWorkspace.save();
    }

    return await Workspace.find({ created_by });
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
  project: async ({ _id }) => {
    return await Project.find({ workspace: _id });
  },
};

module.exports = { query, mutation, relation };
