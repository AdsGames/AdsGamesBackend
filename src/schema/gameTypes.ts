import { gql } from "apollo-server";

export default gql`
  type GameType {
    id: String!
    name: String!
    description: String!
  }

  type Query {
    getGameTypes: [GameType]!
    getGameType(id: Int!): GameType
  }
`;
