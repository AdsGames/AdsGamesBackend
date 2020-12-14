import "dotenv/config";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { pool } from "./db";

const server = new ApolloServer({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  resolvers,
  typeDefs,
  context: {
    db: pool,
  },
});

// eslint-disable-next-line
server.listen().then(({ url }) => console.log(`server ready at ${url}`));
