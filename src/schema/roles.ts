import { gql } from "apollo-server";

export default gql`
  type Role {
    id: String!
    name: String!
    short_name: String!
  }

  type Query {
    getRoles: [Role]!
    getRole(id: Int!): Role
  }
`;
