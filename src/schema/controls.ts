import { gql } from "apollo-server";

export default gql`
  type Control {
    game_id: String!
    control_id: String!
    description: String!
  }

  type Query {
    getControls: [Control]!
  }
`;
