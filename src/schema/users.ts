import { gql } from "apollo-server";

export default gql`
  type Role {
    id: ID!
    name: String!
    shortName: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role_id: ID!
    avatar: String
    about: String
    website: String
    location: String
    role: Role!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    roles: [Role!]!
    role(id: String!): Role
  }
`;
