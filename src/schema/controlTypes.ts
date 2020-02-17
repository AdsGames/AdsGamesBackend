import { gql } from "apollo-server";

export default gql`
  type ControlType {
    id: ID!
    name: String!
    shortName: String!
    image: String!
  }

  type Query {
    controlTypes: [ControlType!]!
    controlType(id: String!): ControlType
  }
`;
