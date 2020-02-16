import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
    role_id: String!
    avatar: String
    about: String
    website: String
    location: String
  }

  type Query {
    getUsers: [User]!
    getUser(id: Int!): User
  }
`;
