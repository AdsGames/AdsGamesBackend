import { gql } from "apollo-server";

export default gql`
  type ControlType {
    id: String!
    name: String!
    short_name: String!
    image: String!
  }

  type Query {
    getControlTypes: [ControlType]!
    getControlType(id: Int!): ControlType
  }
`;
