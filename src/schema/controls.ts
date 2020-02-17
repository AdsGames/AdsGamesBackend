import { gql } from "apollo-server";

export default gql`
  type Control {
    gameId: ID!
    controlId: ID!
    description: String!
    control: ControlType!
  }

  type Query {
    controls: [Control!]!
  }
`;
