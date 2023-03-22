const { Row } = require("../../models/mongo.model");
const query = {};

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

const relation = {};

module.exports = { query, mutation, relation };
