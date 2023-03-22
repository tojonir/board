const userResolver = require("./user.resolver");
const workspaceResolver = require("./workspace.resolver");
const projectResolver = require("./project.resolver");
const teamResolver = require("./team.resolver");

const resolvers = {
  Query: {
    ...userResolver.query,
    ...workspaceResolver.query,
    ...projectResolver.query,
    ...teamResolver.query,
  },
  Mutation: {
    ...userResolver.mutation,
    ...workspaceResolver.mutation,
    ...projectResolver.mutation,
    ...teamResolver.mutation,
  },
  Workspace: { ...workspaceResolver.relation },
  Team: { ...teamResolver.relation },
  Project: { ...projectResolver.relation },
};

module.exports = { resolvers };
