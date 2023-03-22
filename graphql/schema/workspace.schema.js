const type = `
type Workspace {
    id: ID
    name: String
    created_by: User
  }
`;

const query = `
workspaces: [Workspace]
workspace(id: ID!): Workspace
getWorkspaceByName(name: String!): Workspace
`;

const mutation = `
createWorkSpace(name: String!, created_by: String!): Workspace
`;

module.exports = { type, query, mutation };
