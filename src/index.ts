import "dotenv/config";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { pool } from "./db";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: {
    db: pool,
  },
});

server.listen().then(({ url }) => console.log(`server ready at ${url}`));
