const type = `
type Workspace {
    id: ID
    name: String
    created_by: User
    project:[Project]
  }
`;

const query = `
getAllWorkspace: [Workspace]
getWorkspaceById(id: ID!): Workspace
getWorkspaceByName(name: String!): Workspace
`;

const mutation = `
upsertWorkSpace(id:ID,name: String!, created_by: String!): Workspace
deleteWorkspace(id:ID!):[Workspace]
`;

module.exports = { type, query, mutation };
