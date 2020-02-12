import "dotenv/config";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers/user";
import typeDefs from "./schema/user";

const server = new ApolloServer({ resolvers, typeDefs });
server.listen().then(({ url }) => console.log(`server ready at ${url}`));
