const type = `
type Project {
    id: ID
    name: String
    workspace: Workspace
  }
`;

const query = `
getAllProject:[Project]
`;

const mutation = `
createProject(name:String!,workspace:ID!):[Project]
deleteProject(id:ID!):[Project]
`;

module.exports = { type, query, mutation };
