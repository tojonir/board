const { Schema, model } = require("mongoose");

const User = new Schema({
  username: String,
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

const Workspace = new Schema({
  name: { type: String, unique: true },
  created_by: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

const Project = new Schema({
  name: String,
  workspace: { type: Schema.Types.ObjectId, ref: "Workspace" },
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

const Team = new Schema({
  email: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  invitation: { type: String, default: "Pending" },
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

const Column = new Schema({
  name: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  created_by: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

const Row = new Schema({
  title: String,
  description: String,
  status: String,
  type: String,
  created_by: { type: Schema.Types.ObjectId, ref: "User" },
  assign_to: { type: Schema.Types.ObjectId, ref: "User" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

exports.User = model("User", User);
exports.Workspace = model("Workspace", Workspace);
exports.Project = model("Project", Project);
exports.Team = model("Team", Team);
exports.Column = model("Column", Column);
exports.Row = model("Row", Row);
