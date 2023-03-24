const { Comment, User } = require("../../models/mongo.model");
const query = {
  getAllComment: async (_, { row }) => {
    return await Comment.find({ row });
  },
};

const mutation = {
  upsertComment: async (_, { id, data }) => {
    let comment = null;
    if (id) {
      // update
      comment = await Comment.findOneAndUpdate({ _id: id }, { ...data });
    } else {
      const newRow = new Comment({ ...data });
      comment = await newRow.save();
    }
    return comment;
  },
  deleteComment: async (_, { id }) => {
    return Comment.deleteOne({ _id: id });
  },
};

const relation = {
  created_by: async ({ created_by }) => {
    return await User.findById(created_by);
  },
};

module.exports = { query, mutation, relation };
