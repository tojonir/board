const userResolver = require("./user.resolver");
const workspaceResolver = require("./workspace.resolver");
const projectResolver = require("./project.resolver");
const teamResolver = require("./team.resolver");
const columnResolver = require("./column.resolver");
const rowResolver = require("./row.resolver");

const resolvers = {
  Query: {
    ...userResolver.query,
    ...workspaceResolver.query,
    ...projectResolver.query,
    ...teamResolver.query,
    ...columnResolver.query,
    ...rowResolver.query,
  },
  Mutation: {
    ...userResolver.mutation,
    ...workspaceResolver.mutation,
    ...projectResolver.mutation,
    ...teamResolver.mutation,
    ...columnResolver.mutation,
    ...rowResolver.mutation,
  },
  Workspace: { ...workspaceResolver.relation },
  Team: { ...teamResolver.relation },
  Project: { ...projectResolver.relation },
  Column: { ...columnResolver.relation },
  Row: { ...rowResolver.relation },
};

module.exports = { resolvers };
