const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const endpoint = process.env.PRISMA_ENDPOINT;
const secret = process.env.PRISMA_SECRET;

const resolvers = { Mutation, Query };
const context = req => ({
  ...req,
  db: new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint,
    secret,
    debug: false
  })
});

const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context
  });

module.exports = createServer;
