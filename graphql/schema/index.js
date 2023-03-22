const { gql } = require("apollo-server-express");
const userSchema = require("./user.schema");
const workspaceSchema = require("./workspace.schema");

const type = [userSchema.type, workspaceSchema.type];
const query = [userSchema.query, workspaceSchema.query];
const mutation = [userSchema.mutation, workspaceSchema.mutation];

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
