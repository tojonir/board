const { Column, Row } = require("../../models/mongo.model");
const query = {
  getAllColumn: async (_, { project }) => {
    return await Column.find({ project });
  },
};

const mutation = {
  upsertColumn: async (_, { id, name, project }) => {
    let column = null;
    if (id) {
      // update
      column = await Column.findOneAndUpdate({ _id: id }, { name, project });
    } else {
      const newRow = new Column({ name, project });
      column = await newRow.save();
    }
    return column;
  },
  deleteColumn: async (_, { id }) => {
    return Column.deleteOne({ _id: id });
  },
};

const relation = {
  row: async ({ _id }) => {
    console.log(_id);
    return await Row.find({ column: _id });
  },
};

module.exports = { query, mutation, relation };
