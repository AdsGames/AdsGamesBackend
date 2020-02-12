import { gql } from "apollo-server";

export default gql`
  type User {
    email: String
    name: String!
    id: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: Int!): User
  }
`;
