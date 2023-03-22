const type = `
type Comment {
    id: ID
    content: String
    row: String
    type:String
    created_by:User
  }
input commentInput{
  content: String
  row: String
  type:String
  created_by:String
}
`;

const query = `
getAllComment(project:String!):[Comment]
`;

const mutation = `
upsertComment(id:ID,data:commentInput!):Comment
deleteComment(id:ID!):Comment
`;

module.exports = { type, query, mutation };
