const type = `
type User {
    id: ID
    username: String
    email: String
    avatar: String
  }
`;

const query = `
users: [User]
user(id: ID!): User
`;

const mutation = ``;

module.exports = { type, query, mutation };
