import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    roleId: ID!
    avatar: String
    about: String
    website: String
    location: String
    role: Role!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }
`;
