const { User, Project, Team } = require("../../models/mongo.model");
const query = {
  getAllProject: async () => {
    return await Project.find();
  },
};

const mutation = {
  upsertProject: async (_, { id, name, workspace }) => {
    // update
    if (id) {
      await Project.findOneAndUpdate(
        { _id: id },
        { name, workspace },
        { upsert: true, new: true }
      );
    } else {
      //check if project exist in workspace
      const check = await Project.findOne({ name, workspace });
      if (check) throw Error("Project already existed");

      // if not create new project
      const newProject = new Project({ name, workspace });
      await newProject.save();
    }

    return await Project.find({ workspace });
  },
  deleteProject: async (_, { id }) => {
    await Project.deleteOne({ _id: id });
    return await Project.find({ workspace });
  },
};

const relation = {
  team: async ({ _id }) => {
    return Team.find({ project: _id });
  },
};

module.exports = { query, mutation, relation };
