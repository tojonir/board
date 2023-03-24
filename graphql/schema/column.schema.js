const type = `
type Column {
    id: ID
    name: String
    project: Project
    row:[Row]
  }
`;

const query = `
getAllColumn(project:String!):[Column]
`;

const mutation = `
upsertColumn(id:ID,name:String!,project:String!):Column
deleteColumn(id:ID!):Column
`;

module.exports = { type, query, mutation };
