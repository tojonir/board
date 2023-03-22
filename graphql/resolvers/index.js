const userResolver = require("./user.resolver");
const workspaceResolver = require("./workspace.resolver");
const projectResolver = require("./project.resolver");

const resolvers = {
  Query: {
    ...userResolver.query,
    ...workspaceResolver.query,
    ...projectResolver.query,
  },
  Mutation: {
    ...userResolver.mutation,
    ...workspaceResolver.mutation,
    ...projectResolver.mutation,
  },
  Workspace: { ...workspaceResolver.relation },
};

module.exports = { resolvers };
