const type = `
type Row {
    id: ID
    title: String
    description: String
    column: String
    type: String
    created_by:User
    assign_to:User
    project:Project
  }
input rowInput{
  title: String
  description: String
  column: String
  type: String
  created_by:String
  assign_to:String
  project:String
}
`;

const query = `
`;

const mutation = `
upsertRow(id:ID,data:rowInput!):Row
deleteRow(id:ID!):Row
`;

module.exports = { type, query, mutation };
