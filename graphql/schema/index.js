const { gql } = require("apollo-server-express");
const userSchema = require("./user.schema");
const workspaceSchema = require("./workspace.schema");
const projectSchema = require("./project.schema");
const teamSchema = require("./team.schema");
const columSchema = require("./column.schema");
const rowSchema = require("./row.schema");
const commentSchema = require("./comment.schema");

const type = [
  userSchema.type,
  workspaceSchema.type,
  projectSchema.type,
  teamSchema.type,
  columSchema.type,
  rowSchema.type,
  commentSchema.type,
];
const query = [
  userSchema.query,
  workspaceSchema.query,
  projectSchema.query,
  teamSchema.query,
  columSchema.query,
  rowSchema.query,
  commentSchema.query,
];
const mutation = [
  userSchema.mutation,
  workspaceSchema.mutation,
  projectSchema.mutation,
  teamSchema.mutation,
  columSchema.mutation,
  rowSchema.mutation,
  commentSchema.mutation,
];

const typeDefs = gql`
  ${type.join("\n")}
  type Query {
    ${query.join("\n")}
  }
  type Mutation {
    ${mutation.join("\n")}
  }
`;

module.exports = { typeDefs };
