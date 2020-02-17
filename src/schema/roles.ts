import { gql } from "apollo-server";

export default gql`
  type Role {
    id: ID!
    name: String!
    shortName: String!
  }

  type Query {
    roles: [Role!]!
    role(id: String!): Role
  }
`;
