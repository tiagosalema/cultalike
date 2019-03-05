const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const context = req => ({
  ...req,
  db: new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
  })
});

const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: { Mutation, Query },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context
  });

module.exports = createServer;
