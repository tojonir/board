const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Workspace {
    id: ID
    name: String
  }
  type Query {
    workspace: Workspace
  }
`;

module.exports = { typeDefs };
