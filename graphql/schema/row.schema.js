const type = `
type Row {
    id: ID
    title: String,
    description: String,
    status: String,
    type: String,
    created_by:User,
    assign_to:User,
    project:Project
  }
`;

const query = `
`;

const mutation = `

`;

module.exports = { type, query, mutation };
