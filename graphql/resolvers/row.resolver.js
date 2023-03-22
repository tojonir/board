const { Row, Comment } = require("../../models/mongo.model");
const query = {
  getAllRow: async (_, { column }) => {
    return await Row.find({ column });
  },
};

const mutation = {
  upsertRow: async (_, { id, data }) => {
    let row = null;
    if (id) {
      // update
      row = await Row.findOneAndUpdate({ _id: id }, { ...data });
    } else {
      const newRow = new Row({ ...data });
      row = await newRow.save();
    }
    return row;
  },
  deleteRow: async (_, { id }) => {
    return Row.deleteOne({ _id: id });
  },
};

const relation = {
  comment: async ({ _id }) => {
    return await Comment.find({ row: _id });
  },
};

module.exports = { query, mutation, relation };
