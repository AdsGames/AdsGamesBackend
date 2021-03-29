import { ApolloServer } from "apollo-server-lambda";
import { typeDefs } from "./schema";

import { resolvers as gameResolvers } from "./resolvers/games";

const server = new ApolloServer({
  resolvers: [gameResolvers],
  typeDefs,
  cacheControl: {
    defaultMaxAge: 0,
  },
  playground: true,
  introspection: true,
});

export const graphql = server.createHandler({
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});
