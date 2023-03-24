const { Team } = require("../../models/mongo.model");
const query = {};

const mutation = {
  upsertTeam: async (_, { id, email, project }) => {
    if (id) {
      // update
      await Team.findOneAndUpdate({ _id: id }, { email, project });
    } else {
      // create
      await Team.findOneAndUpdate(
        { email, project },
        { email, project },
        { upsert: true, new: true }
      );
    }
    return await Team.find({ project });
  },
  deleteTeam: async (_, { id }) => {
    const team = await Team.deleteOne({ _id: id });
    return await Team.find({ project: team.project });
  },
};

const relation = {};

module.exports = { query, mutation, relation };
