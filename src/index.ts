import "dotenv/config";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const server = new ApolloServer({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  resolvers,
  typeDefs,
  cacheControl: {
    defaultMaxAge: 0,
  },
});

// eslint-disable-next-line
server.listen().then(({ url }) => console.log(`server ready at ${url}`));
