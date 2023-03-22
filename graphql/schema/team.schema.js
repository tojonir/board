const type = `
type Team {
    id: ID
    project:[Project]
    email: String
    Invitation: String
  }
`;

const query = `
`;

const mutation = `
upsertTeam(id:ID,email:String!,project:ID!):[Team]
deleteTeam(id:ID):[Team]
`;

module.exports = { type, query, mutation };
